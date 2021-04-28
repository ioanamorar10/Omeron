<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminte\Support\Facades\Hash;

use App\Models\User;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTExceptions;

class UserController extends Controller
{
    public function register(Request $request) {

        $user = User::where('email', $request['email'])->first();

        if($user) {
            $response['status'] = 0;
            $response['code'] = 409;
            $response['message'] = 'Email Already Exists';
        } else {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password),
                'role' => 'user'
            ]);
            $response['status'] = 1;
            $response['code'] = 200;
            $response['message'] = 'User Register Successfully';
        }

        return response()->json($response);
    }

    public function login(Request $request){
        $credentials = $request->only('email', 'password');
        try {
            if(!$token = auth()->attempt($credentials)){
                $response['status'] = 0;
                $response['code'] = 401;
                $response['message'] = 'Email or Password is incorrect';
                $response['data'] = null;
                return response()->json($response);
            }
        } catch(JWTException $e){
            $response['code'] = 500;
            $response['message'] = 'Could Not Create Token';
            $response['data'] = null;
            return response()->json($response);
        }

        $user = auth()->user();
        $data['token'] = auth()->claims([
            'user_id' => $user->id,
            'email' => $user->email,
            'role' => $user->role
        ])->attempt($credentials);

        $response['status'] = 1;
        $response['code'] = 200;
        $response['message'] = 'Login Successfully';
        $response['data'] = $data;

        return response()->json($response);
    }

    public function getUsers(){
        
        $response = User::all();

        return response()->json($response);
    }

    public function getUserById($id){
        $user = User::find($id);
        if($user){
            $response['status'] = 1;
            $response['code'] = 200;
            $response['message'] = 'User Find Successfully';
            $response['data'] = $user::find($id);
        } else {
            $response['status'] = 0;
            $response['code'] = 404;
            $response['message'] = 'User Not Found';
        }

        return response()->json($response);
    }

    public function updateUser(Request $request, $id){

        $user = User::find($id);
        if($user){
            $user->update([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password),
                'role' => 'client'
            ]);
            $response['status'] = 1;
            $response['code'] = 200;
            $response['message'] = 'User Updated Successfully';
        } else {
            $response['status'] = 0;
            $response['code'] = 404;
            $response['message'] = 'User Not Found';
        }

        return response()->json($response);

    }

    public function deleteUser($id){
        $user = User::find($id);
        if($user){
            $user->delete();
            $response['status'] = 1;
            $response['code'] = 204;
            $response['message'] = 'User Deleted Successfully';
            $response['data'] = null;
        } else {
            $response['status'] = 0;
            $response['code'] = 404;
            $response['message'] = 'User Not Found';
        }

        return response()->json($response);

    }


}
