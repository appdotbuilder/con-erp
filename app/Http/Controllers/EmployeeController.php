<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use Inertia\Inertia;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $employees = Employee::orderBy('first_name')
            ->paginate(10)
            ->through(function ($employee) {
                return [
                    'id' => $employee->id,
                    'employee_id' => $employee->employee_id,
                    'full_name' => $employee->full_name,
                    'email' => $employee->email,
                    'phone' => $employee->phone,
                    'position' => $employee->position,
                    'department' => $employee->department,
                    'hourly_rate' => number_format((float)$employee->hourly_rate, 2),
                    'hire_date' => $employee->hire_date->format('M d, Y'),
                    'status' => $employee->status,
                ];
            });

        return Inertia::render('employees', [
            'employees' => $employees,
        ]);
    }
}