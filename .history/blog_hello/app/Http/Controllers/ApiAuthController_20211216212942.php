<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Auth;
use App\User;

class ApiAuthController extends Controller
{
    public function userAuth(Request $request){


        $user = User::create([
            'name' => "editor",
            'email' => "editor@editor.com",
            'password' => bcrypt("editor"),
        ]);

        // Le asignamos el rol de Cliente
        $user->assignRole('editor');

        die();

        $credencials = $request->only('email','password');
        $token = null;
        try{
            if(!$token = JWTAuth::attempt($credencials)){

                return response()->json(['error' => 'invalide_credentials']);
            }

        }catch(JWTException $ex){
            return response()->json(['error'=> 'something_went_error', 500]);
        }

        if (!empty($token)) {
            $user = Auth::user();
        }



        return response()->json(compact('token','user'));
    }
}
