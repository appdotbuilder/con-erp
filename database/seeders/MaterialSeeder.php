<?php

namespace Database\Seeders;

use App\Models\Material;
use Illuminate\Database\Seeder;

class MaterialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $materials = [
            [
                'name' => 'Portland Cement',
                'code' => 'CEM-001',
                'description' => 'High-grade Portland cement for concrete mixing',
                'category' => 'Concrete',
                'unit_of_measure' => 'bags',
                'unit_cost' => 12.50,
                'current_stock' => 150,
                'minimum_stock' => 200,
                'supplier' => 'CementCorp Industries',
            ],
            [
                'name' => 'Steel Rebar #4',
                'code' => 'STL-004',
                'description' => 'Grade 60 steel reinforcement bars',
                'category' => 'Steel',
                'unit_of_measure' => 'tons',
                'unit_cost' => 850.00,
                'current_stock' => 25,
                'minimum_stock' => 30,
                'supplier' => 'Steel Solutions LLC',
            ],
            [
                'name' => 'Construction Grade Lumber 2x4',
                'code' => 'WOD-204',
                'description' => 'Pressure-treated construction lumber',
                'category' => 'Wood',
                'unit_of_measure' => 'pieces',
                'unit_cost' => 8.75,
                'current_stock' => 500,
                'minimum_stock' => 300,
                'supplier' => 'Forest Products Co',
            ],
            [
                'name' => 'Electrical Wire 12 AWG',
                'code' => 'ELC-012',
                'description' => 'Copper electrical wire for standard circuits',
                'category' => 'Electrical',
                'unit_of_measure' => 'feet',
                'unit_cost' => 1.25,
                'current_stock' => 2500,
                'minimum_stock' => 5000,
                'supplier' => 'ElectroSupply Inc',
            ],
            [
                'name' => 'PVC Pipe 4 inch',
                'code' => 'PLB-004',
                'description' => 'Schedule 40 PVC pipe for plumbing',
                'category' => 'Plumbing',
                'unit_of_measure' => 'feet',
                'unit_cost' => 3.50,
                'current_stock' => 800,
                'minimum_stock' => 1000,
                'supplier' => 'PlumbPro Supply',
            ],
            [
                'name' => 'Exterior Paint - White',
                'code' => 'PNT-WHT',
                'description' => 'Weather-resistant exterior paint',
                'category' => 'Paint',
                'unit_of_measure' => 'gallons',
                'unit_cost' => 45.00,
                'current_stock' => 75,
                'minimum_stock' => 100,
                'supplier' => 'ColorWorks Paint Co',
            ],
            [
                'name' => 'Concrete Blocks 8x8x16',
                'code' => 'BLK-816',
                'description' => 'Standard concrete masonry units',
                'category' => 'Concrete',
                'unit_of_measure' => 'pieces',
                'unit_cost' => 2.25,
                'current_stock' => 1200,
                'minimum_stock' => 1500,
                'supplier' => 'Masonry Materials Ltd',
            ],
            [
                'name' => 'Hydraulic Excavator Fuel',
                'code' => 'FUL-DSL',
                'description' => 'Diesel fuel for heavy machinery',
                'category' => 'Fuel',
                'unit_of_measure' => 'gallons',
                'unit_cost' => 4.85,
                'current_stock' => 450,
                'minimum_stock' => 500,
                'supplier' => 'Industrial Fuel Supply',
            ],
            [
                'name' => 'Safety Helmets',
                'code' => 'SAF-HLM',
                'description' => 'OSHA-compliant construction safety helmets',
                'category' => 'Safety',
                'unit_of_measure' => 'pieces',
                'unit_cost' => 25.00,
                'current_stock' => 45,
                'minimum_stock' => 50,
                'supplier' => 'SafetyFirst Equipment',
            ],
            [
                'name' => 'Power Tools - Drill Set',
                'code' => 'TLS-DRL',
                'description' => 'Professional cordless drill set',
                'category' => 'Tools',
                'unit_of_measure' => 'sets',
                'unit_cost' => 150.00,
                'current_stock' => 8,
                'minimum_stock' => 12,
                'supplier' => 'ToolMaster Pro',
            ],
        ];

        foreach ($materials as $materialData) {
            Material::create($materialData);
        }
    }
}