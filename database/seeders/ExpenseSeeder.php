<?php

namespace Database\Seeders;

use App\Models\Expense;
use App\Models\Project;
use Illuminate\Database\Seeder;

class ExpenseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $projects = Project::all();
        
        if ($projects->isEmpty()) {
            return;
        }

        $expenses = [
            [
                'project_id' => $projects->first()->id,
                'category' => 'Materials',
                'description' => 'Steel beams for structural framework',
                'amount' => 125000.00,
                'expense_date' => '2024-01-15',
                'vendor' => 'Steel Solutions LLC',
                'receipt_number' => 'SS-2024-001',
                'status' => 'paid',
            ],
            [
                'project_id' => $projects->first()->id,
                'category' => 'Labor',
                'description' => 'Construction crew wages - Week 12',
                'amount' => 85000.00,
                'expense_date' => '2024-03-22',
                'vendor' => 'ConstructCorp',
                'receipt_number' => 'CC-W12-2024',
                'status' => 'paid',
            ],
            [
                'project_id' => $projects->get(1)->id ?? $projects->first()->id,
                'category' => 'Equipment',
                'description' => 'Crane rental - Monthly',
                'amount' => 45000.00,
                'expense_date' => '2024-03-01',
                'vendor' => 'Heavy Equipment Rentals',
                'receipt_number' => 'HER-MAR-2024',
                'status' => 'approved',
            ],
            [
                'project_id' => $projects->get(1)->id ?? $projects->first()->id,
                'category' => 'Materials',
                'description' => 'Concrete delivery for foundation',
                'amount' => 32000.00,
                'expense_date' => '2024-03-10',
                'vendor' => 'ReadyMix Concrete Co',
                'receipt_number' => 'RMC-2024-078',
                'status' => 'paid',
            ],
            [
                'project_id' => $projects->get(2)->id ?? $projects->first()->id,
                'category' => 'Permits',
                'description' => 'Building permits and inspections',
                'amount' => 15000.00,
                'expense_date' => '2024-02-05',
                'vendor' => 'City Planning Department',
                'receipt_number' => 'CPD-2024-456',
                'status' => 'paid',
            ],
            [
                'project_id' => $projects->get(3)->id ?? $projects->first()->id,
                'category' => 'Utilities',
                'description' => 'Temporary power connection',
                'amount' => 8500.00,
                'expense_date' => '2024-01-28',
                'vendor' => 'Metro Electric Company',
                'receipt_number' => 'MEC-TEMP-2024',
                'status' => 'paid',
            ],
            [
                'project_id' => $projects->first()->id,
                'category' => 'Professional Services',
                'description' => 'Engineering consultation fees',
                'amount' => 18000.00,
                'expense_date' => '2024-03-15',
                'vendor' => 'Structural Engineers Inc',
                'receipt_number' => 'SEI-2024-Q1',
                'status' => 'pending',
            ],
            [
                'project_id' => $projects->get(1)->id ?? $projects->first()->id,
                'category' => 'Safety',
                'description' => 'Safety equipment and training',
                'amount' => 12000.00,
                'expense_date' => '2024-03-20',
                'vendor' => 'SafetyFirst Equipment',
                'receipt_number' => 'SFE-2024-033',
                'status' => 'approved',
            ],
        ];

        foreach ($expenses as $expenseData) {
            Expense::create($expenseData);
        }
    }
}