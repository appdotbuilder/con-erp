<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::with('user')
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->through(function ($project) {
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
                    'location' => $project->location,
                ];
            });

        return Inertia::render('projects', [
            'projects' => $projects,
        ]);
    }
}