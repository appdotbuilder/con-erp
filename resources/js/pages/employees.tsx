import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { type SharedData } from '@/types';

interface Employee {
    id: number;
    employee_id: string;
    full_name: string;
    email: string;
    phone: string;
    position: string;
    department: string;
    hourly_rate: string;
    hire_date: string;
    status: string;
}

interface EmployeesData {
    data: Employee[];
    links: Array<{
        url: string | null;
        label: string;
        active: boolean;
    }>;
    current_page: number;
    last_page: number;
}

interface Props extends SharedData {
    employees: EmployeesData;
    [key: string]: unknown;
}

export default function Employees({ employees }: Props) {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
            case 'inactive': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
            case 'terminated': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
        }
    };

    const getDepartmentIcon = (department: string) => {
        switch (department.toLowerCase()) {
            case 'engineering': return '🔧';
            case 'construction': return '🏗️';
            case 'management': return '👔';
            case 'finance': return '💰';
            case 'hr': return '👥';
            case 'safety': return '🦺';
            case 'quality': return '✅';
            default: return '👤';
        }
    };

    const departmentStats = employees.data.reduce((acc, emp) => {
        acc[emp.department] = (acc[emp.department] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const activeEmployees = employees.data.filter(emp => emp.status === 'active').length;
    const avgHourlyRate = employees.data.length > 0 ? 
        employees.data.reduce((sum, emp) => sum + parseFloat(emp.hourly_rate), 0) / employees.data.length : 0;

    return (
        <>
            <Head title="Human Resources & Payroll" />
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <header className="bg-white shadow-sm dark:bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <Link href="/" className="text-blue-600 hover:text-blue-700 mb-2 inline-block">
                                    ← Back to Dashboard
                                </Link>
                                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                                    👥 Human Resources & Payroll
                                </h1>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                    Manage workforce, track attendance, process payroll, and monitor performance across all construction teams
                                </p>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    {/* Feature Overview */}
                    <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                            <div className="text-center">
                                <div className="text-3xl mb-2">⏰</div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">Time Tracking</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    Digital timesheets and attendance monitoring
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                            <div className="text-center">
                                <div className="text-3xl mb-2">💰</div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">Payroll Processing</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    Automated payroll with tax calculations
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                            <div className="text-center">
                                <div className="text-3xl mb-2">📊</div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">Performance</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    Performance reviews and skill assessments
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                            <div className="text-center">
                                <div className="text-3xl mb-2">🎓</div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">Training</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    Safety training and certification tracking
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                            <div className="flex items-center">
                                <div className="text-2xl mr-3">👥</div>
                                <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Employees</p>
                                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{employees.data.length}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                            <div className="flex items-center">
                                <div className="text-2xl mr-3">✅</div>
                                <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Staff</p>
                                    <p className="text-2xl font-bold text-green-600">{activeEmployees}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                            <div className="flex items-center">
                                <div className="text-2xl mr-3">🏢</div>
                                <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Departments</p>
                                    <p className="text-2xl font-bold text-blue-600">{Object.keys(departmentStats).length}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                            <div className="flex items-center">
                                <div className="text-2xl mr-3">💵</div>
                                <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg Hourly Rate</p>
                                    <p className="text-2xl font-bold text-purple-600">${avgHourlyRate.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Employees Table */}
                    <div className="rounded-lg bg-white shadow dark:bg-gray-800">
                        <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-700">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Employee Directory
                            </h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                            Employee
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                            Department
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                            Position
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                            Contact
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                            Pay Rate
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                                    {employees.data.map((employee) => (
                                        <tr key={employee.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 flex-shrink-0">
                                                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center dark:bg-blue-900">
                                                            <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
                                                                {employee.full_name.split(' ').map(n => n[0]).join('')}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                            {employee.full_name}
                                                        </div>
                                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                                            ID: {employee.employee_id}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <span className="text-lg mr-2">{getDepartmentIcon(employee.department)}</span>
                                                    <div className="text-sm text-gray-900 dark:text-white">
                                                        {employee.department}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900 dark:text-white">
                                                    {employee.position}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900 dark:text-white">
                                                    {employee.email}
                                                </div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                                    {employee.phone || 'No phone'}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                    ${employee.hourly_rate}/hr
                                                </div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                                    Since {employee.hire_date}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(employee.status)}`}>
                                                    {employee.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Department Breakdown */}
                    <div className="mt-8 rounded-lg bg-white shadow dark:bg-gray-800">
                        <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-700">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Department Distribution
                            </h2>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {Object.entries(departmentStats).map(([department, count]) => (
                                    <div key={department} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                                        <div className="flex items-center">
                                            <span className="text-2xl mr-3">{getDepartmentIcon(department)}</span>
                                            <span className="font-medium text-gray-900 dark:text-white">
                                                {department}
                                            </span>
                                        </div>
                                        <span className="text-2xl font-bold text-blue-600">
                                            {count}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* HR Features */}
                    <div className="mt-12 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white">
                        <h2 className="mb-6 text-2xl font-bold">💼 Advanced HR Management Features</h2>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <div>
                                <h3 className="font-semibold mb-2">🕐 Time & Attendance</h3>
                                <p className="text-sm opacity-90">
                                    Digital punch cards, overtime tracking, and automated timesheet generation
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">💰 Payroll Management</h3>
                                <p className="text-sm opacity-90">
                                    Automated salary calculations with tax deductions and benefit management
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">📈 Performance Reviews</h3>
                                <p className="text-sm opacity-90">
                                    360-degree feedback systems and goal tracking for continuous improvement
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">🎓 Training Programs</h3>
                                <p className="text-sm opacity-90">
                                    Safety certifications, skill development, and compliance training tracking
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">📋 Document Management</h3>
                                <p className="text-sm opacity-90">
                                    Digital employee records, contracts, and compliance documentation
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibir mb-2">📊 Analytics & Reporting</h3>
                                <p className="text-sm opacity-90">
                                    Workforce analytics, turnover reports, and productivity metrics
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}