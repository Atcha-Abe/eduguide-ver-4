<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\Validation\ValidateController;
use Illuminate\Support\Facades\Request as Input;
use Illuminate\Support\Facades\DB;
use App\ProductInventory;
use Validator;

class InventoryController extends Controller
{
    public function index()
    {
        $validate = new ValidateController();
        $r = $validate->check_authorization();
    
        if($r){
            $product_available = DB::select('
            select z.product_id, z.name, sum(z.item_available) as item_avail from
            (
                select a.product_id, b.name, a.quantity as item_available 
                from product_inventories as a
                join products as b on b.id = a.product_id
                where a.is_closed = 0 and a.shopuser_id =?
            
            union ALL
            
                select b.product_id, e.name as product, -(b.quantity-d.quantity) as item_available 		
                from orders as a 
                join order_details as b on b.order_no = a.order_no
                join `return` as c on c.order_no = b.order_no
                join return_details as d on d.return_id = c.id
                join products as e on e.id = b.product_id
                where a.shopuser_id =?
            ) as z
            group by product_id, name;
            ', [auth()->user()->id, auth()->user()->id]);
            $product_inventory = DB::select('
                select a.id, b.id as product_id, b.name, a.quantity, b.is_active from product_inventories as a 
                join products as b on b.id = a.product_id 
                where a.shopuser_id = ?', [auth()->user()->id]);

            $success['product_available'] = $product_available;
            $success['product_inventory'] = $product_inventory;
            return response()->json(['success' => $success]);
        }else{
            $error['msg'] = "Unauthorized: Try to login.";
            return response()->json(['error' => $error]);
        }
    }

    public function store(Request $request)
    {
        // 'product_id',
        // 'shopuser_id',
        // 'quantity',
        $input = $request->all();
        if(Input::has('id'))
        {
            if($request->id > 0){
                $result = ProductInventory::where(
                    [
                        'product_id' => $request->product, 
                        'shopuser_id' => auth()->user()->id,
                        'id' => $request->id,

                    ]
                    )->count();
                if($result > 0){
                    $validator = Validator::make($input, [
                        'quantity' => "required|integer",
                    ]);
                    if($validator->fails()){
                        $error['msg'] = $validator->errors();
                        return response()->json(['error' => $error]);  
                    }

                    $productinv = ProductInventory::find($request->id);
                    $result = $productinv->update($input);
                
                    if($result){
                        $success['msg'] = "Product quantity updated successfully.";
                        $success['product_price'] = $productinv;
                        return response()->json(['success' => $success]);
                    }else{
                        $error['msg'] = 'Something went wrong on updating product quantity.';
                        return response()->json(['error' => $error]);
                    }
                }
            }
        }

        $validator = Validator::make($input, [
            'quantity' => "required|integer",
        ]);

        if($validator->fails()){
            $error['msg'] = $validator->errors();
            return response()->json(['error' => $error]);  
        }
   
        $product_inv = new ProductInventory;       
        $product_inv->product_id = $request->product;
        $product_inv->quantity = $request->quantity;
        $product_inv->shopuser_id = auth()->user()->id;
        $result = $product_inv->save();   

        // $product = Product::create($input);
        if($result){
            $success['msg'] = "Product quantity saved successfully.";
            $success['products'] = $product_inv;
            return response()->json(['success' => $success]);
        }else{
            $error['msg'] = 'Something went wrong on saving product quantity.';
            return response()->json(['error' => $error]);
        }
    } 

}
