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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//REGISTER
Route::post('register', 'App\Http\Controllers\UserController@register');

//LOGIN
Route::post('login', 'App\Http\Controllers\UserController@login');

//ADD USER
Route::post('addUser', 'App\Http\Controllers\UserController@register');

//GET ALL USERS
Route::get('users', 'App\Http\Controllers\UserController@getUsers');

//GET USER BY ID
Route::get('user/{id}', 'App\Http\Controllers\UserController@getUserById');

//UPDATE USER
Route::put('updateUser/{id}', 'App\Http\Controllers\UserController@updateUser');

//DELETE USER
Route::delete('deleteUser/{id}', 'App\Http\Controllers\UserController@deleteUser');
