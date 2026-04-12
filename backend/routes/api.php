<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\PageController;
use App\Http\Controllers\API\PortfolioController;
use App\Http\Controllers\API\ServiceController;
use App\Http\Controllers\API\ContactController;

// ========== LOGIN ENDPOINT (MANUAL) ==========
Route::post('/login', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    $user = User::where('email', $request->email)->first();

    if (!$user || !Hash::check($request->password, $user->password)) {
        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([
        'token' => $token,
        'user' => $user
    ]);
});

// ========== LOGOUT ENDPOINT ==========
Route::middleware('auth:sanctum')->post('/logout', function (Request $request) {
    $request->user()->currentAccessToken()->delete();
    return response()->json(['message' => 'Logged out']);
});

// ========== PUBLIC ENDPOINTS ==========
Route::get('/pages', [PageController::class, 'index']);
Route::get('/pages/{slug}', [PageController::class, 'show']);
Route::get('/pages/id/{id}', [PageController::class, 'showById']);
Route::get('/portfolios', [PortfolioController::class, 'index']);
Route::get('/portfolios/{id}', [PortfolioController::class, 'show']);
Route::get('/services', [ServiceController::class, 'index']);
Route::get('/services/{service}', [ServiceController::class, 'show']);
Route::post('/contact', [ContactController::class, 'store']);

// ========== PROTECTED ADMIN ENDPOINTS ==========
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('admin/pages', PageController::class)->except(['index', 'show']);
    Route::apiResource('admin/portfolios', PortfolioController::class)->except(['index', 'show']);
    Route::apiResource('admin/services', ServiceController::class)->except(['index', 'show']);
    Route::get('/admin/contacts', [ContactController::class, 'index']);
    Route::put('/admin/contacts/{id}/read', [ContactController::class, 'markAsRead']);
});
