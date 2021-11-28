<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', 'API\RegisterController@register');
Route::post('login', 'API\RegisterController@login');
   
Route::middleware('auth:api')->group( function () {
    Route::get('search-product', 'API\ProductController@SearchProduct');
    Route::get('product-via-category', 'API\ProductController@ProductviaCategory');
    Route::resource('products', 'API\ProductController');
    Route::resource('productprice', 'API\PricingController');
    Route::resource('productinv', 'API\InventoryController');
    Route::resource('productinv', 'API\PostCommentController');





});

