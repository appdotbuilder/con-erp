<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::first();
        
        if (!$user) {
            $user = User::factory()->create([
                'name' => 'Admin User',
                'email' => 'admin@construction-erp.com',
            ]);
        }

        $projects = [
            [
                'name' => 'Downtown Office Complex',
                'code' => 'DOC-2024-001',
                'description' => 'Modern 20-story office building with underground parking',
                'status' => 'active',
                'priority' => 'high',
                'start_date' => '2024-01-15',
                'end_date' => '2024-12-31',
                'budget' => 15000000.00,
                'actual_cost' => 8500000.00,
                'progress_percentage' => 65,
                'location' => 'Downtown Business District',
                'client_name' => 'Metro Development Corp',
                'project_manager' => 'Sarah Johnson',
                'user_id' => $user->id,
            ],
            [
                'name' => 'Residential Tower A',
                'code' => 'RTA-2024-002',
                'description' => '35-floor luxury residential tower with amenities',
                'status' => 'active',
                'priority' => 'critical',
                'start_date' => '2024-03-01',
                'end_date' => '2025-06-30',
                'budget' => 25000000.00,
                'actual_cost' => 12000000.00,
                'progress_percentage' => 45,
                'location' => 'Waterfront District',
                'client_name' => 'Skyline Properties LLC',
                'project_manager' => 'Michael Chen',
                'user_id' => $user->id,
            ],
            [
                'name' => 'Highway Bridge Renovation',
                'code' => 'HBR-2024-003',
                'description' => 'Complete renovation of 2-mile highway bridge infrastructure',
                'status' => 'planning',
                'priority' => 'high',
                'start_date' => '2024-06-01',
                'end_date' => '2024-11-15',
                'budget' => 8500000.00,
                'actual_cost' => 0.00,
                'progress_percentage' => 0,
                'location' => 'Interstate 95 Corridor',
                'client_name' => 'State Department of Transportation',
                'project_manager' => 'David Rodriguez',
                'user_id' => $user->id,
            ],
            [
                'name' => 'Shopping Mall Expansion',
                'code' => 'SME-2024-004',
                'description' => 'Adding new wing with 50 retail spaces and food court',
                'status' => 'completed',
                'priority' => 'medium',
                'start_date' => '2023-08-01',
                'end_date' => '2024-02-28',
                'budget' => 12000000.00,
                'actual_cost' => 11800000.00,
                'progress_percentage' => 100,
                'location' => 'Suburban Shopping Center',
                'client_name' => 'Retail Ventures Inc',
                'project_manager' => 'Lisa Thompson',
                'user_id' => $user->id,
            ],
            [
                'name' => 'Industrial Warehouse Complex',
                'code' => 'IWC-2024-005',
                'description' => 'Large-scale warehouse and distribution center',
                'status' => 'on_hold',
                'priority' => 'low',
                'start_date' => '2024-04-15',
                'end_date' => '2024-10-31',
                'budget' => 6500000.00,
                'actual_cost' => 1200000.00,
                'progress_percentage' => 15,
                'location' => 'Industrial Park Zone',
                'client_name' => 'LogiCorp Distribution',
                'project_manager' => 'Robert Kim',
                'user_id' => $user->id,
            ],
        ];

        foreach ($projects as $projectData) {
            Project::create($projectData);
        }
    }
}