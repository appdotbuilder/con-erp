<?php

namespace Database\Seeders;

use App\Models\Employee;
use Illuminate\Database\Seeder;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $employees = [
            [
                'employee_id' => 'EMP-001',
                'first_name' => 'Sarah',
                'last_name' => 'Johnson',
                'email' => 'sarah.johnson@construction-erp.com',
                'phone' => '(555) 123-4567',
                'position' => 'Project Manager',
                'department' => 'Management',
                'hourly_rate' => 65.00,
                'hire_date' => '2022-03-15',
                'status' => 'active',
                'skills' => 'Project Management, Risk Assessment, Team Leadership',
            ],
            [
                'employee_id' => 'EMP-002',
                'first_name' => 'Michael',
                'last_name' => 'Chen',
                'email' => 'michael.chen@construction-erp.com',
                'phone' => '(555) 234-5678',
                'position' => 'Senior Engineer',
                'department' => 'Engineering',
                'hourly_rate' => 55.00,
                'hire_date' => '2021-08-22',
                'status' => 'active',
                'skills' => 'Structural Design, CAD, Quality Control',
            ],
            [
                'employee_id' => 'EMP-003',
                'first_name' => 'David',
                'last_name' => 'Rodriguez',
                'email' => 'david.rodriguez@construction-erp.com',
                'phone' => '(555) 345-6789',
                'position' => 'Site Supervisor',
                'department' => 'Construction',
                'hourly_rate' => 45.00,
                'hire_date' => '2020-11-10',
                'status' => 'active',
                'skills' => 'Site Management, Safety Compliance, Team Coordination',
            ],
            [
                'employee_id' => 'EMP-004',
                'first_name' => 'Lisa',
                'last_name' => 'Thompson',
                'email' => 'lisa.thompson@construction-erp.com',
                'phone' => '(555) 456-7890',
                'position' => 'Financial Analyst',
                'department' => 'Finance',
                'hourly_rate' => 48.00,
                'hire_date' => '2022-01-20',
                'status' => 'active',
                'skills' => 'Cost Analysis, Budget Planning, Financial Reporting',
            ],
            [
                'employee_id' => 'EMP-005',
                'first_name' => 'Robert',
                'last_name' => 'Kim',
                'email' => 'robert.kim@construction-erp.com',
                'phone' => '(555) 567-8901',
                'position' => 'Equipment Operator',
                'department' => 'Construction',
                'hourly_rate' => 35.00,
                'hire_date' => '2019-05-14',
                'status' => 'active',
                'skills' => 'Heavy Machinery, Excavation, Equipment Maintenance',
            ],
            [
                'employee_id' => 'EMP-006',
                'first_name' => 'Emily',
                'last_name' => 'Davis',
                'email' => 'emily.davis@construction-erp.com',
                'phone' => '(555) 678-9012',
                'position' => 'Safety Officer',
                'department' => 'Safety',
                'hourly_rate' => 42.00,
                'hire_date' => '2021-09-30',
                'status' => 'active',
                'skills' => 'OSHA Compliance, Risk Assessment, Training Development',
            ],
            [
                'employee_id' => 'EMP-007',
                'first_name' => 'James',
                'last_name' => 'Wilson',
                'email' => 'james.wilson@construction-erp.com',
                'phone' => '(555) 789-0123',
                'position' => 'Electrician',
                'department' => 'Construction',
                'hourly_rate' => 38.00,
                'hire_date' => '2020-07-12',
                'status' => 'active',
                'skills' => 'Electrical Installation, Code Compliance, Troubleshooting',
            ],
            [
                'employee_id' => 'EMP-008',
                'first_name' => 'Maria',
                'last_name' => 'Garcia',
                'email' => 'maria.garcia@construction-erp.com',
                'phone' => '(555) 890-1234',
                'position' => 'HR Coordinator',
                'department' => 'HR',
                'hourly_rate' => 32.00,
                'hire_date' => '2022-02-28',
                'status' => 'active',
                'skills' => 'Recruitment, Employee Relations, Payroll Processing',
            ],
            [
                'employee_id' => 'EMP-009',
                'first_name' => 'Thomas',
                'last_name' => 'Brown',
                'email' => 'thomas.brown@construction-erp.com',
                'phone' => '(555) 901-2345',
                'position' => 'Quality Inspector',
                'department' => 'Quality',
                'hourly_rate' => 40.00,
                'hire_date' => '2021-04-18',
                'status' => 'active',
                'skills' => 'Quality Assurance, Testing Procedures, Documentation',
            ],
            [
                'employee_id' => 'EMP-010',
                'first_name' => 'Jennifer',
                'last_name' => 'Lee',
                'email' => 'jennifer.lee@construction-erp.com',
                'phone' => '(555) 012-3456',
                'position' => 'Architect',
                'department' => 'Engineering',
                'hourly_rate' => 58.00,
                'hire_date' => '2020-12-03',
                'status' => 'active',
                'skills' => 'Architectural Design, Building Codes, 3D Modeling',
            ],
        ];

        foreach ($employees as $employeeData) {
            Employee::create($employeeData);
        }
    }
}