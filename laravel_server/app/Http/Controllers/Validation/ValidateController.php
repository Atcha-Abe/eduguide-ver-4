<?php

namespace App\Http\Controllers\Validation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ValidateController extends Controller
{
    public function check_authorization(){
        if(auth()->user()){
            return true;
        }else{
            return false;
        }
    }
}
