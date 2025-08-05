import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { type SharedData } from '@/types';

interface Metrics {
    total_projects: number;
    active_projects: number;
    completed_projects: number;
    total_budget: string;
    total_actual_cost: string;
    active_employees: number;
    total_employees: number;
    pending_tasks: number;
    low_stock_count: number;
}

interface Project {
    id: number;
    name: string;
    code: string;
    status: string;
    priority: string;
    progress_percentage: number;
    budget: string;
    actual_cost: string;
    client_name: string;
    project_manager: string;
    start_date: string;
    end_date: string;
}

interface Material {
    id: number;
    name: string;
    code: string;
    current_stock: number;
    minimum_stock: number;
    unit_of_measure: string;
    category: string;
}

interface Expense {
    id: number;
    project_name: string;
    category: string;
    description: string;
    amount: string;
    vendor: string;
    status: string;
    expense_date: string;
}

interface Props extends SharedData {
    metrics: Metrics;
    recent_projects: Project[];
    project_status: Record<string, number>;
    low_stock_materials: Material[];
    recent_expenses: Expense[];
    [key: string]: unknown;
}

export default function ConstructionERPDashboard({ 
    metrics, 
    recent_projects, 
    project_status, 
    low_stock_materials, 
    recent_expenses 
}: Props) {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
            case 'completed': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
            case 'on_hold': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
            case 'planning': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
            case 'cancelled': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
        }
    };



    return (
        <>
            <Head title="Construction ERP Dashboard" />
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                {/* Header */}
                <header className="bg-white shadow-sm dark:bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                                    🏗️ Construction ERP Dashboard
                                </h1>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                    Comprehensive project management and monitoring system
                                </p>
                            </div>
                            <nav className="flex space-x-4">
                                <Link
                                    href="/projects"
                                    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                                >
                                    Projects
                                </Link>
                                <Link
                                    href="/materials"
                                    className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                                >
                                    Materials
                                </Link>
                                <Link
                                    href="/employees"
                                    className="rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
                                >
                                    HR
                                </Link>
                            </nav>
                        </div>
                    </div>
                </header>

                <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    {/* Metrics Grid */}
                    <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <div className="text-2xl">🏗️</div>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Projects</p>
                                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{metrics.total_projects}</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <div className="text-2xl">⚡</div>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Projects</p>
                                    <p className="text-2xl font-bold text-green-600">{metrics.active_projects}</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <div className="text-2xl">💰</div>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Budget</p>
                                    <p className="text-2xl font-bold text-blue-600">${metrics.total_budget}</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <div className="text-2xl">👥</div>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Employees</p>
                                    <p className="text-2xl font-bold text-purple-600">{metrics.active_employees}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {/* Recent Projects */}
                        <div className="rounded-lg bg-white shadow dark:bg-gray-800">
                            <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-700">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    📋 Recent Projects
                                </h2>
                            </div>
                            <div className="p-6">
                                <div className="space-y-4">
                                    {recent_projects.map((project) => (
                                        <div key={project.id} className="border-l-4 border-blue-500 pl-4">
                                            <div className="flex items-center justify-between">
                                                <h3 className="font-medium text-gray-900 dark:text-white">
                                                    {project.name}
                                                </h3>
                                                <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(project.status)}`}>
                                                    {project.status}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {project.client_name} • {project.progress_percentage}% Complete
                                            </p>
                                            <div className="mt-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                                                <div 
                                                    className="h-2 rounded-full bg-blue-600" 
                                                    style={{ width: `${project.progress_percentage}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Project Status Overview */}
                        <div className="rounded-lg bg-white shadow dark:bg-gray-800">
                            <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-700">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    📊 Project Status Overview
                                </h2>
                            </div>
                            <div className="p-6">
                                <div className="space-y-4">
                                    {Object.entries(project_status).map(([status, count]) => (
                                        <div key={status} className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(status)}`}>
                                                    {status.replace('_', ' ')}
                                                </span>
                                            </div>
                                            <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                                {count}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Low Stock Materials */}
                        <div className="rounded-lg bg-white shadow dark:bg-gray-800">
                            <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-700">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    ⚠️ Low Stock Materials
                                </h2>
                            </div>
                            <div className="p-6">
                                {low_stock_materials.length > 0 ? (
                                    <div className="space-y-4">
                                        {low_stock_materials.map((material) => (
                                            <div key={material.id} className="border-l-4 border-red-500 pl-4">
                                                <h3 className="font-medium text-gray-900 dark:text-white">
                                                    {material.name}
                                                </h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    Current: {material.current_stock} {material.unit_of_measure} • 
                                                    Minimum: {material.minimum_stock} {material.unit_of_measure}
                                                </p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                                    Category: {material.category}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-center text-gray-500 dark:text-gray-400">
                                        All materials are well stocked! 🎉
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Recent Expenses */}
                        <div className="rounded-lg bg-white shadow dark:bg-gray-800">
                            <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-700">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    💸 Recent Expenses
                                </h2>
                            </div>
                            <div className="p-6">
                                <div className="space-y-4">
                                    {recent_expenses.map((expense) => (
                                        <div key={expense.id} className="border-l-4 border-yellow-500 pl-4">
                                            <div className="flex items-center justify-between">
                                                <h3 className="font-medium text-gray-900 dark:text-white">
                                                    {expense.description}
                                                </h3>
                                                <span className="font-bold text-gray-900 dark:text-white">
                                                    ${expense.amount}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {expense.project_name} • {expense.category}
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                {expense.vendor} • {expense.expense_date}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Key Features Section */}
                    <div className="mt-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                        <h2 className="mb-6 text-2xl font-bold">🚀 System Capabilities</h2>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            <div className="text-center">
                                <div className="text-4xl mb-2">📈</div>
                                <h3 className="font-semibold mb-2">Project Analytics</h3>
                                <p className="text-sm opacity-90">
                                    Gantt charts, S-Curves, EVA analysis, and real-time progress tracking
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-2">🔗</div>
                                <h3 className="font-semibold mb-2">Integrated Workflows</h3>
                                <p className="text-sm opacity-90">
                                    Seamless data flow between procurement, finance, and project management
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-2">🤖</div>
                                <h3 className="font-semibold mb-2">Future Ready</h3>
                                <p className="text-sm opacity-90">
                                    Designed for IoT/Drone data, BIM integration, and external system connectivity
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}