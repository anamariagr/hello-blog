<?php

use Illuminate\Http\Request;


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

//Route::resource('post', PostController::class);


Route::middleware(['auth:api','cors'])->group(function (){
    Route::resource('post',PostController::class);

    Route::put('/post/{id}', 'PostController@update');
    Route::post('/post/{id}/publish', 'PostController@update');

});


