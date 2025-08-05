<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\Contract;
use App\Models\Material;
use App\Models\Task;
use App\Models\Expense;
use App\Models\Employee;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class ConstructionERPController extends Controller
{
    /**
     * Display the Construction ERP dashboard.
     */
    public function index()
    {
        // Get dashboard metrics
        $totalProjects = Project::count();
        $activeProjects = Project::where('status', 'active')->count();
        $completedProjects = Project::where('status', 'completed')->count();
        $totalBudget = (float)Project::sum('budget');
        $totalActualCost = (float)Project::sum('actual_cost');
        
        // Get recent projects
        $recentProjects = Project::with('user')
            ->latest()
            ->take(5)
            ->get()
            ->map(function ($project) {
                return [
                    'id' => $project->id,
                    'name' => $project->name,
                    'code' => $project->code,
                    'status' => $project->status,
                    'priority' => $project->priority,
                    'progress_percentage' => $project->progress_percentage,
                    'budget' => number_format((float)$project->budget, 2),
                    'actual_cost' => number_format((float)$project->actual_cost, 2),
                    'client_name' => $project->client_name,
                    'project_manager' => $project->project_manager,
                    'start_date' => $project->start_date->format('M d, Y'),
                    'end_date' => $project->end_date->format('M d, Y'),
                ];
            });

        // Get project status distribution
        $projectStatus = [
            'planning' => Project::where('status', 'planning')->count(),
            'active' => Project::where('status', 'active')->count(),
            'on_hold' => Project::where('status', 'on_hold')->count(),
            'completed' => Project::where('status', 'completed')->count(),
            'cancelled' => Project::where('status', 'cancelled')->count(),
        ];

        // Get low stock materials
        $lowStockMaterials = Material::lowStock()
            ->take(5)
            ->get()
            ->map(function ($material) {
                return [
                    'id' => $material->id,
                    'name' => $material->name,
                    'code' => $material->code,
                    'current_stock' => $material->current_stock,
                    'minimum_stock' => $material->minimum_stock,
                    'unit_of_measure' => $material->unit_of_measure,
                    'category' => $material->category,
                ];
            });

        // Get recent expenses
        $recentExpenses = Expense::with('project')
            ->latest()
            ->take(5)
            ->get()
            ->map(function ($expense) {
                return [
                    'id' => $expense->id,
                    'project_name' => $expense->project->name,
                    'category' => $expense->category,
                    'description' => $expense->description,
                    'amount' => number_format((float)$expense->amount, 2),
                    'vendor' => $expense->vendor,
                    'status' => $expense->status,
                    'expense_date' => $expense->expense_date->format('M d, Y'),
                ];
            });

        // Get active employees
        $activeEmployees = Employee::active()->count();
        $totalEmployees = Employee::count();

        // Get pending tasks
        $pendingTasks = Task::where('status', 'not_started')
            ->orWhere('status', 'in_progress')
            ->count();

        return Inertia::render('construction-erp-dashboard', [
            'metrics' => [
                'total_projects' => $totalProjects,
                'active_projects' => $activeProjects,
                'completed_projects' => $completedProjects,
                'total_budget' => number_format($totalBudget, 2),
                'total_actual_cost' => number_format($totalActualCost, 2),
                'active_employees' => $activeEmployees,
                'total_employees' => $totalEmployees,
                'pending_tasks' => $pendingTasks,
                'low_stock_count' => $lowStockMaterials->count(),
            ],
            'recent_projects' => $recentProjects,
            'project_status' => $projectStatus,
            'low_stock_materials' => $lowStockMaterials,
            'recent_expenses' => $recentExpenses,
        ]);
    }


}