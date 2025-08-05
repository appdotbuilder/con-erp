<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create default user first
        User::factory()->create([
            'name' => 'Construction ERP Admin',
            'email' => 'admin@construction-erp.com',
        ]);

        // Seed all Construction ERP data
        $this->call([
            ProjectSeeder::class,
            MaterialSeeder::class,
            EmployeeSeeder::class,
            ExpenseSeeder::class,
        ]);
    }
}
