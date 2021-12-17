<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class ApiAuthController extends Controller
{
    public function userAuth(Request $request){


        $credencials = $request->only('email','password');
        $token = null;
        try{
            if(!$token = JWTAuth::attempt($credencials)){

                return response()->json(['error' => 'invalide_credentials']);
            }
            if (!empty($token)) {
                $user = JWTAuth::toUser($token);

            }


        }catch(JWTException $ex){
            return response()->json(['error'=> 'something_went_error', 500]);
        }




        return response()->json(compact('token','user'));
    }
}