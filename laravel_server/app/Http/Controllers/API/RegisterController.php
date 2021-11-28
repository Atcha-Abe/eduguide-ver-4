<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use App\Http\Controllers\API\BaseController as BaseController;
use App\User;
use Illuminate\Support\Facades\Auth;
use Validator;

class RegisterController extends Controller
{ /**
    * Register api
    *
    * @return \Illuminate\Http\Response
    */
   public function register(Request $request)
   {
       $validator = Validator::make($request->all(), [
           'name' => 'required',
           'email' => 'required|unique:users|email',
           'password' => 'required',
           'c_password' => 'required|same:password',
           'address' => 'required',
       ]);
  
       if($validator->fails()){
           $error['msg'] = $validator->errors();
           return response()->json($error, 404); 
       }
  
       $input = $request->all();
       $input['password'] = bcrypt($input['password']);
       $user = User::create($input);
       $success['token'] =  $user->createToken('Expresspi')->accessToken;
       $success['name'] =  $user->name;
       $success['msg'] = 'User register successfully.';
  
       return response()->json(['success'=>$success], 200);
   }
  
   /**
    * Login api
    *
    * @return \Illuminate\Http\Response
    */
   public function login(Request $request)
   {
       if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
           $user = Auth::user(); 
           $success['token'] =  $user->createToken('Expresspi')-> accessToken; 
           $success['name'] =  $user->name;
           $success['msg'] =  'User login successfully.';
  
           return response()->json(['success' => $success], 200);
       } 
       else{ 
            $error['msg'] =  'Unauthorised.';
            return response()->json($error, 404);
       } 
   }
}
