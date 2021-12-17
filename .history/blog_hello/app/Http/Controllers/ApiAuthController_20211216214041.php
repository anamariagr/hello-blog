<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Auth;
use App\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class ApiAuthController extends Controller
{
    public function userAuth(Request $request){




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

            $permission = Permission::find(5);
            $permission2 = Permission::find(6);
            $permission3 = Permission::create(['name' => 'delete blog']);
            $permission4 = Permission::find(7);
            $permission5 = Permission::create(['name' => 'publish blog']);


            $role = Role::find(2);
            $role->givePermissionTo($permission);
            $role->givePermissionTo($permission2);
           // $role->givePermissionTo($permission3);
            $role->givePermissionTo($permission4);

            dd("ok");
        }



        return response()->json(compact('token','user'));
    }
}
