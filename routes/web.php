<?php

use App\Http\Controllers\ConstructionERPController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\MaterialController;
use App\Http\Controllers\EmployeeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

// Home page route - show dashboard if authenticated, welcome if not
Route::get('/', function () {
    if (auth()->check()) {
        return app(ConstructionERPController::class)->index();
    }
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    
    // Construction ERP Module Routes
    Route::get('/projects', [ProjectController::class, 'index'])->name('projects');
    Route::get('/materials', [MaterialController::class, 'index'])->name('materials');
    Route::get('/employees', [EmployeeController::class, 'index'])->name('employees');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
