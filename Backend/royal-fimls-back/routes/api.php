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

Route::post('/add-movie', [\App\Http\Controllers\MoviesController::class, 'store']);
Route::get('/movies', [\App\Http\Controllers\MoviesController::class, 'index']);
Route::get('/edit-movie/{id}', [\App\Http\Controllers\MoviesController::class, 'edit']);
Route::put('/update-movie/{id}', [\App\Http\Controllers\MoviesController::class, 'update']);
Route::delete('/delete-movie/{id}', [\App\Http\Controllers\MoviesController::class, 'destroy']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});