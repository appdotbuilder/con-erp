<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Material;
use Inertia\Inertia;

class MaterialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $materials = Material::orderBy('name')
            ->paginate(10)
            ->through(function ($material) {
                return [
                    'id' => $material->id,
                    'name' => $material->name,
                    'code' => $material->code,
                    'category' => $material->category,
                    'current_stock' => $material->current_stock,
                    'minimum_stock' => $material->minimum_stock,
                    'unit_of_measure' => $material->unit_of_measure,
                    'unit_cost' => number_format((float)$material->unit_cost, 2),
                    'supplier' => $material->supplier,
                    'stock_status' => $material->current_stock <= $material->minimum_stock ? 'low' : 'normal',
                ];
            });

        return Inertia::render('materials', [
            'materials' => $materials,
        ]);
    }
}