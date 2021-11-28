<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\Validation\ValidateController;
use Illuminate\Support\Facades\Request as Input;
use App\Product;
use App\ProductPricing;
use Validator;
use Illuminate\Support\Facades\DB;

class PricingController extends Controller
{
    public function index()
    {
        
        $validate = new ValidateController();
        $r = $validate->check_authorization();
    
        if($r){
            $products = DB::select('
                select a.id as product_id, concat(a.name, " | ", b.name) as name from products as a
                join product_categories as b on b.id = a.cat_id
            ');
            $product_price = DB::select('
                select a.id, b.id as product_id, b.name, a.price, a.discount, a.shipment_fee, b.is_active from product_pricings as a 
                join products as b on b.id = a.product_id 
                where a.shopuser_id = ?', [auth()->user()->id]);
            $success['products'] = $products;
            $success['product_price'] = $product_price;
            return response()->json(['success' => $success]);
        }else{
            $error['msg'] = "Unauthorized: Try to login.";
            return response()->json(['error' => $error]);
        }
    }

    public function store(Request $request)
    {
        $input = $request->all();
        if(Input::has('id'))
        {
            if($request->id > 0){
                $result = ProductPricing::where(
                    [
                        'product_id' => $request->product, 
                        'shopuser_id' => auth()->user()->id,
                        'id' => $request->id
                    ]
                    )->count();
                if($result > 0){
                    $validator = Validator::make($input, [
                        'price' => "required|regex:/^\d+(\.\d{1,2})?$/",
                        'discount' => '',
                        'fee' => "required|regex:/^\d+(\.\d{1,2})?$/",
                    ]);
                    if($validator->fails()){
                        $error['msg'] = $validator->errors();
                        return response()->json(['error' => $error]);  
                    }

                    $productprice = ProductPricing::find($request->id);
                    $productprice['shipment_fee'] = $request->fee;
                    $result = $productprice->update($input);
                
                    if($result){
                        $success['msg'] = "Product's price updated successfully.";
                        $success['product_price'] = $productprice;
                        return response()->json(['success' => $success]);
                    }else{
                        $error['msg'] = 'Something went wrong on updating product.';
                        return response()->json(['error' => $error]);
                    }
                }
            }
        }

        $check_product = ProductPricing::where('product_id', $request->product)->count();

        if($check_product > 0){
            $error['msg'] = 'Product already exist!';
            return response()->json(['error' => $error]);  
        }

        $validator = Validator::make($input, [
            'product' => "required|integer",
            'price' => "required|regex:/^\d+(\.\d{1,2})?$/",
            'discount' => '',
            'fee' => "required|regex:/^\d+(\.\d{1,2})?$/",
        ]);
   
        if($validator->fails()){
            $error['msg'] = $validator->errors();
            return response()->json(['error' => $error]);  
        }
   
        $product_price = new ProductPricing;       
        $product_price->product_id = $request->product;
        $product_price->price = $request->price;
        $product_price->discount = $request->discount;
        $product_price->shipment_fee = $request->fee;
        $product_price->shopuser_id = auth()->user()->id;
        $result = $product_price->save();   

        // $product = Product::create($input);
        if($result){
            $success['msg'] = "Product's price saved successfully.";
            $success['products'] = $product_price;
            return response()->json(['success' => $success]);
        }else{
            $error['msg'] = 'Something went wrong on saving product price.';
            return response()->json(['error' => $error]);
        }
    } 
}
