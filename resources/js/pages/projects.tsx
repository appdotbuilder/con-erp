import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { type SharedData } from '@/types';

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
    location: string;
}

interface ProjectsData {
    data: Project[];
    links: Array<{
        url: string | null;
        label: string;
        active: boolean;
    }>;
    current_page: number;
    last_page: number;
}

interface Props extends SharedData {
    projects: ProjectsData;
    [key: string]: unknown;
}

export default function Projects({ projects }: Props) {
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

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'critical': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
            case 'high': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
            case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
            case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
        }
    };

    return (
        <>
            <Head title="Project Management" />
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <header className="bg-white shadow-sm dark:bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <Link href="/" className="text-blue-600 hover:text-blue-700 mb-2 inline-block">
                                    ← Back to Dashboard
                                </Link>
                                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                                    📋 Project Management
                                </h1>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                    Monitor and manage all construction projects with Gantt charts, progress tracking, and resource allocation
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
                                <div className="text-3xl mb-2">📊</div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">Gantt Charts</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    Visual project timelines and dependencies
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                            <div className="text-center">
                                <div className="text-3xl mb-2">📈</div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">S-Curve Analysis</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    Progress tracking and performance curves
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                            <div className="text-center">
                                <div className="text-3xl mb-2">⚡</div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">EVA Monitoring</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    Earned Value Analysis for cost control
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                            <div className="text-center">
                                <div className="text-3xl mb-2">🛡️</div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">Risk Management</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    Identify and mitigate project risks
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Projects Table */}
                    <div className="rounded-lg bg-white shadow dark:bg-gray-800">
                        <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-700">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                All Projects
                            </h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                            Project
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                            Priority
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                            Progress
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                            Budget
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                            Timeline
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                                    {projects.data.map((project) => (
                                        <tr key={project.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div>
                                                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                        {project.name}
                                                    </div>
                                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                                        {project.code} • {project.client_name}
                                                    </div>
                                                    <div className="text-xs text-gray-400 dark:text-gray-500">
                                                        PM: {project.project_manager}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(project.status)}`}>
                                                    {project.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${getPriorityColor(project.priority)}`}>
                                                    {project.priority}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="mr-2 h-4 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                                                        <div 
                                                            className="h-4 rounded-full bg-blue-600" 
                                                            style={{ width: `${project.progress_percentage}%` }}
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                                                        {project.progress_percentage}%
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900 dark:text-white">
                                                    Budget: ${project.budget}
                                                </div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                                    Actual: ${project.actual_cost}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900 dark:text-white">
                                                    {project.start_date}
                                                </div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                                    to {project.end_date}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Module Features */}
                    <div className="mt-12 rounded-lg bg-gradient-to-r from-blue-600 to-green-600 p-8 text-white">
                        <h2 className="mb-6 text-2xl font-bold">🔧 Advanced Project Management Features</h2>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <div>
                                <h3 className="font-semibold mb-2">📋 Task Management</h3>
                                <p className="text-sm opacity-90">
                                    Break down projects into manageable tasks with dependencies and resource allocation
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">💰 Cost Control</h3>
                                <p className="text-sm opacity-90">
                                    Real-time budget tracking with variance analysis and forecasting
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">📊 Progress Tracking</h3>
                                <p className="text-sm opacity-90">
                                    Visual progress indicators with milestone tracking and reporting
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">⚠️ Risk Assessment</h3>
                                <p className="text-sm opacity-90">
                                    Identify potential risks and implement mitigation strategies
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">🔄 Change Management</h3>
                                <p className="text-sm opacity-90">
                                    Track and approve project changes with impact analysis
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">📈 Performance Analytics</h3>
                                <p className="text-sm opacity-90">
                                    Comprehensive reporting with KPIs and performance metrics
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}