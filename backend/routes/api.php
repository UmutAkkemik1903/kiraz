<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::post('/login', [App\Http\Controllers\Auth\LoginController::class, 'login']);
Route::post('/register', 'App\Http\Controllers\Auth\LoginController@register')->name('register');
Route::get('/logout', 'App\Http\Controllers\Auth\LoginController@logout')->name('logout');

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('cart','App\Http\Controllers\CartController@store');
    Route::get('cart','App\Http\Controllers\CartController@index');
    Route::get('order','App\Http\Controllers\OrderController@index');
    Route::get('order-detail/{id}','App\Http\Controllers\OrderController@show');
    Route::post('order','App\Http\Controllers\OrderController@store');
    Route::post('cart-delete/{id}','App\Http\Controllers\CartController@destroy');
});
Route::get('category','App\Http\Controllers\CategoryController@index');
Route::get('product','App\Http\Controllers\ProductController@index');


