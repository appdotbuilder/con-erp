import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { type SharedData } from '@/types';

interface Material {
    id: number;
    name: string;
    code: string;
    category: string;
    current_stock: number;
    minimum_stock: number;
    unit_of_measure: string;
    unit_cost: string;
    supplier: string;
    stock_status: string;
}

interface MaterialsData {
    data: Material[];
    links: Array<{
        url: string | null;
        label: string;
        active: boolean;
    }>;
    current_page: number;
    last_page: number;
}

interface Props extends SharedData {
    materials: MaterialsData;
    [key: string]: unknown;
}

export default function Materials({ materials }: Props) {
    const getStockStatusColor = (status: string) => {
        switch (status) {
            case 'low': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
            case 'normal': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
        }
    };

    const getCategoryIcon = (category: string) => {
        switch (category.toLowerCase()) {
            case 'concrete': return '🏗️';
            case 'steel': return '🔩';
            case 'wood': return '🪵';
            case 'electrical': return '⚡';
            case 'plumbing': return '🚰';
            case 'paint': return '🎨';
            case 'tools': return '🔨';
            default: return '📦';
        }
    };

    return (
        <>
            <Head title="Materials & Inventory" />
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <header className="bg-white shadow-sm dark:bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <Link href="/" className="text-blue-600 hover:text-blue-700 mb-2 inline-block">
                                    ← Back to Dashboard
                                </Link>
                                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                                    📦 Materials & Inventory Management
                                </h1>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                    Track materials, manage inventory levels, and optimize procurement with real-time stock monitoring
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
                                <h3 className="font-semibold text-gray-900 dark:text-white">Stock Tracking</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    Real-time inventory levels and alerts
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                            <div className="text-center">
                                <div className="text-3xl mb-2">🛒</div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">Procurement</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    Automated purchase orders and supplier management
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                            <div className="text-center">
                                <div className="text-3xl mb-2">📋</div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">Asset Tracking</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    Equipment and tool management system
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                            <div className="text-center">
                                <div className="text-3xl mb-2">⚡</div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">Supply Chain</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    Integrated supplier and logistics management
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Materials Inventory Table */}
                    <div className="rounded-lg bg-white shadow dark:bg-gray-800">
                        <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-700">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Materials Inventory
                            </h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                            Material
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                            Category
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                            Stock Level
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                            Unit Cost
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                            Supplier
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                                    {materials.data.map((material) => (
                                        <tr key={material.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="text-2xl mr-3">{getCategoryIcon(material.category)}</div>
                                                    <div>
                                                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                            {material.name}
                                                        </div>
                                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                                            Code: {material.code}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900 dark:text-white">
                                                    {material.category}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="mr-4">
                                                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                            {material.current_stock} {material.unit_of_measure}
                                                        </div>
                                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                                            Min: {material.minimum_stock} {material.unit_of_measure}
                                                        </div>
                                                    </div>
                                                    <div className="w-16 h-2 bg-gray-200 rounded-full dark:bg-gray-700">
                                                        <div 
                                                            className={`h-2 rounded-full ${
                                                                material.stock_status === 'low' ? 'bg-red-600' : 'bg-green-600'
                                                            }`}
                                                            style={{ 
                                                                width: `${Math.min(100, (material.current_stock / Math.max(material.minimum_stock * 2, 1)) * 100)}%` 
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                    ${material.unit_cost}
                                                </div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                                    per {material.unit_of_measure}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900 dark:text-white">
                                                    {material.supplier || 'Not assigned'}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${getStockStatusColor(material.stock_status)}`}>
                                                    {material.stock_status === 'low' ? '⚠️ Low Stock' : '✅ Normal'}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Supply Chain Features */}
                    <div className="mt-12 rounded-lg bg-gradient-to-r from-green-600 to-blue-600 p-8 text-white">
                        <h2 className="mb-6 text-2xl font-bold">🚛 Advanced Supply Chain Management</h2>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <div>
                                <h3 className="font-semibold mb-2">📈 Demand Forecasting</h3>
                                <p className="text-sm opacity-90">
                                    AI-powered demand prediction based on project schedules and historical data
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">🤝 Vendor Management</h3>
                                <p className="text-sm opacity-90">
                                    Comprehensive supplier database with performance tracking and ratings
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">📋 Purchase Orders</h3>
                                <p className="text-sm opacity-90">
                                    Automated PO generation with approval workflows and delivery tracking
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">📊 Cost Optimization</h3>
                                <p className="text-sm opacity-90">
                                    Price comparison tools and bulk purchase recommendations
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">🔄 Just-in-Time Delivery</h3>
                                <p className="text-sm opacity-90">
                                    Synchronized material delivery with project timelines
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">📱 Mobile Scanning</h3>
                                <p className="text-sm opacity-90">
                                    QR code and barcode scanning for real-time inventory updates
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                            <div className="flex items-center">
                                <div className="text-2xl mr-3">📦</div>
                                <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Materials</p>
                                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{materials.data.length}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                            <div className="flex items-center">
                                <div className="text-2xl mr-3">⚠️</div>
                                <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Low Stock Items</p>
                                    <p className="text-2xl font-bold text-red-600">
                                        {materials.data.filter(m => m.stock_status === 'low').length}
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                            <div className="flex items-center">
                                <div className="text-2xl mr-3">🏷️</div>
                                <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Categories</p>
                                    <p className="text-2xl font-bold text-blue-600">
                                        {[...new Set(materials.data.map(m => m.category))].length}
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                            <div className="flex items-center">
                                <div className="text-2xl mr-3">💰</div>
                                <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg Unit Cost</p>
                                    <p className="text-2xl font-bold text-green-600">
                                        ${materials.data.length > 0 ? 
                                            (materials.data.reduce((sum, m) => sum + parseFloat(m.unit_cost), 0) / materials.data.length).toFixed(2) 
                                            : '0.00'
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}