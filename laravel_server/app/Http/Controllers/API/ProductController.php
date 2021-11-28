<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as Input;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Product;
use App\ProductCategory;
use Validator;
use App\Http\Resources\Product as ProductResource;
use App\Http\Resources\ProductCategory as CategoryResource;
use App\Http\Controllers\Validation\ValidateController;

class ProductController extends Controller
{/**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        $validate = new ValidateController();
        $r = $validate->check_authorization();

        if($r){
            $products = DB::select('
                select a.id, a.name, a.cat_id, b.name as catname, a.is_active from products as a
                join product_categories as b on b.id = a.cat_id
            ');
            $category = ProductCategory::select('id', 'name')->get();
            $success['products'] = $products;
            $success['categories'] = $category;
            if(!is_null($products)){
                $success['msg'] = "Found added products";
            }else{
                $success['msg'] = "Empty products";
            }
            return response()->json(['success' => $success]);
        }else{
            $error['msg'] = "Unauthorized: Try to login.";
            return response()->json(['error' => $error]);
        }
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();
        if(Input::has('id')){
            if($request->id > 0){
                $result = Product::where(
                    [
                        'id' => $request->id, 
                        'shopuser_id' => auth()->user()->id
                    ]
                    )->count();
                if($result > 0){
                    $validator = Validator::make($input, [
                        'name' => 'required', 
                        'description' => 'required|string|max:255', 
                        'category' => 'required|integer', 
                        'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
                        'active' => 'required|boolean', 
                    ]);
                    if($validator->fails()){
                        $error['msg'] = $validator->errors();
                        return response()->json(['error' => $error]);  
                    }


                    if(Input::has('image')) {
                        if(!is_null($request->image)){
                            $file_name = $request->image->getClientOriginalName();
                            $image_path = $request->image->storeAs('images', $file_name, 'public');
                            
                        }
                    }
                    $input['image'] = $image_path;
                    $product = Product::find($request->id);
                    $result = $product->update($input);
                
                    if($result){
                        $success['msg'] = 'Product updated successfully.';
                        $success['products'] = new ProductResource($product);
                        return response()->json(['success' => $success]);
                    }else{
                        $error['msg'] = 'Something went wrong on updating product.';
                        return response()->json(['error' => $error]);
                    }
                }
            }
        }

        $validator = Validator::make($input, [
            'name' => 'required|unique:products', 
            'description' => 'required|string|max:255', 
            'category' => 'required|integer', 
            'active' => 'required|boolean', 
        ]);
   
        if($validator->fails()){
            $error['msg'] = $validator->errors();
            return response()->json(['error' => $error]);  
        }
   
        $file_name = $request->image->getClientOriginalName();
        $image_path = $request->image->storeAs('images', $file_name, 'public');
        
        $product = new Product;       
        $product->name = $request->name;
        $product->desc = $request->description;
        $product->cat_id = $request->category;
        $product->image = $image_path;
        $product->is_active = $request->active;
        $product->shopuser_id = auth()->user()->id;
        $result = $product->save();   

        // $product = Product::create($input);
        if($result){
            $success['msg'] = 'Product saved successfully.';
            $success['products'] = new ProductResource($product);
            return response()->json(['success' => $success]);
        }else{
            $error['msg'] = 'Something went wrong on saving product.';
            return response()->json(['error' => $error]);
        }
    } 
   
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Product::find($id);
  
        if (is_null($product)) {
            $error['msg'] = 'Product not found.';
            return response()->json(['error' => $error]);
        }
   
        $success['msg'] = 'Product retrieved successfully.';
        $success['products'] = new ProductResource($product);
        return response()->json(['success' => $success]);
    }
    
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $input = $request->all();
   
        $validator = Validator::make($input, [
            'name' => 'required',
            'detail' => 'required'
        ]);
   
        if($validator->fails()){
            $error['msg'] = $validator->errors();
            return response()->json(['error' => $error]);      
        }
   
        $product->name = $input['name'];
        $product->detail = $input['detail'];
        $product->save();

        $success['msg'] = 'Product updated successfully.';
        $success['products'] = new ProductResource($product);
        return response()->json(['success' => $success]);
   
    }
   
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        // $product->delete();
   
        $success['msg'] = 'Product deleted successfully.';
        return response()->json(['success' => $success]);
    }

    // Customer Search Product
    public function SearchProduct(Request $request)
    {
        $text = $request->searchfor;
        $result = DB::query("select 
        a.id as product_id, 
        a.name as product,
        b.id as category_id,
        b.name as category,
        c.price,
        c.discount,
        a.shopuser_id as shop,
        sum(d.quantity) as quantity,
        (select count(*) from orders as x
            join order_details as z on z.order_no = x.order_no
            where z.product_id = a.id 
             and x.is_confirm = 1
             and x.is_shipped = 1
             and x.is_received = 1) as sold
        from products as a
        join product_categories as b on b.id = a.cat_id
        join product_pricings as c on c.product_id = a.id and c.shopuser_id = a.shopuser_id
        join product_inventories as d on d.product_id = a.id and d.shopuser_id = a.shopuser_id
        where (c.product_id IS NOT NULL OR c.product_id != 0 OR c.product_id != '')
        and (d.product_id IS NOT  NULL OR d.product_id != 0 OR d.product_id != '')
        and d.is_closed = 0
        and a.name like '%?%' or b.name like '%?%'
        group by a.id, a.name, b.id, b.name, c.price, a.shopuser_id;", [$text, $text]);

        dd($result);
        $success['msg'] = 'ok';
        if(is_null($result) || $result == ''){
            $success['msg'] = 'Product Not Found';
        }

        $success['searched_product'] = $result;
        return response()->json(['success' => $success]);
    }
    
    // Customer Product per Category
    public function ProductviaCategory(Request $request)
    {
        $id = $request->category_id;
        $result = DB::select("select 
        a.id as product_id, 
        a.name as product,
        b.id as category_id,
        b.name as category,
        c.price,
        c.discount,
        a.shopuser_id as shop,
        sum(d.quantity) as quantity,
        (select count(*) from orders as x
            join order_details as z on z.order_no = x.order_no
            where z.product_id = a.id 
             and x.is_confirm = 1
             and x.is_shipped = 1
             and x.is_received = 1) as sold
        from products as a
        join product_categories as b on b.id = a.cat_id
        join product_pricings as c on c.product_id = a.id and c.shopuser_id = a.shopuser_id
        join product_inventories as d on d.product_id = a.id and d.shopuser_id = a.shopuser_id
        where (c.product_id IS NOT NULL OR c.product_id != 0 OR c.product_id != '')
        and (d.product_id IS NOT  NULL OR d.product_id != 0 OR d.product_id != '')
        and d.is_closed = 0
        and b.id = ?
        group by a.id, a.name, b.id, b.name, c.price, c.discount, a.shopuser_id;", [$id]);

        $success['msg'] = 'ok';
        if(is_null($result) || $result == ''){
            $success['msg'] = 'Category Not Found';
        }

        $success['productviacategory'] = $result;
        return response()->json(['success' => $success]);
    }

    public function SelectedProduct(Request $request)       
    {
        $id = $request->product;
        $result = DB::select("select 
        a.id as product_id, 
        a.name as product,
        b.id as category_id,
        b.name as category,
        c.price,
        c.shipment_fee as shipmentfee,
        c.discount,
        a.shopuser_id as shop,
        sum(d.quantity) as quantity,
        (select count(*) from orders as x
            join order_details as z on z.order_no = x.order_no
            where z.product_id = a.id 
             and x.is_confirm = 1
             and x.is_shipped = 1
             and x.is_received = 1) as sold
        from products as a
        join product_categories as b on b.id = a.cat_id
        join product_pricings as c on c.product_id = a.id and c.shopuser_id = a.shopuser_id
        join product_inventories as d on d.product_id = a.id and d.shopuser_id = a.shopuser_id
        where (c.product_id IS NOT NULL OR c.product_id != 0 OR c.product_id != '')
        and (d.product_id IS NOT  NULL OR d.product_id != 0 OR d.product_id != '')
        and d.is_closed = 0
        and a.id = ?
        group by a.id, a.name, b.id, b.name, c.price, a.shopuser_id;", [$id]);
        
        $success['msg'] = 'ok';
        if(is_null($result) || $result == ''){
            $success['msg'] = 'Product Unavailable';
        }

        $success['selected_product'] = $result;
        return response()->json(['success' => $success]);
    }
}
