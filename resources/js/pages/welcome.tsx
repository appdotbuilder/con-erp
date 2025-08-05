import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Construction ERP - Comprehensive Project Management">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
                {/* Header */}
                <header className="relative overflow-hidden bg-white shadow-sm dark:bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <nav className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <div className="text-3xl">🏗️</div>
                                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    Construction ERP
                                </h1>
                            </div>
                            <div className="flex items-center space-x-4">
                                {auth.user ? (
                                    <Link
                                        href="/"
                                        className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    >
                                        Go to Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                        >
                                            Get Started
                                        </Link>
                                    </>
                                )}
                            </div>
                        </nav>
                    </div>
                </header>

                {/* Hero Section */}
                <main className="relative">
                    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
                                🏗️ Construction ERP
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
                                Comprehensive web-based Construction ERP system for evaluating, analyzing, monitoring, 
                                and planning construction projects with high accuracy and precision.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                {auth.user ? (
                                    <Link
                                        href="/"
                                        className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                    >
                                        Access Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                        >
                                            Start Free Trial
                                        </Link>
                                        <Link
                                            href={route('login')}
                                            className="text-lg font-semibold leading-6 text-gray-900 dark:text-white"
                                        >
                                            Login <span aria-hidden="true">→</span>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Core Modules Section */}
                    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                🚀 Core Modules & Features
                            </h2>
                            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                                Integrated modules for seamless construction project management
                            </p>
                        </div>
                        
                        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {/* Project Management */}
                            <div className="relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700">
                                <div className="text-4xl mb-4">📋</div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Project Management
                                </h3>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                    Gantt charts, S-Curve analysis, EVA monitoring, risk assessment, and change management
                                </p>
                                <ul className="mt-4 space-y-1 text-sm text-gray-500 dark:text-gray-400">
                                    <li>• Visual project timelines</li>
                                    <li>• Progress tracking</li>
                                    <li>• Risk management</li>
                                    <li>• Change control</li>
                                </ul>
                            </div>

                            {/* Contract & Tender */}
                            <div className="relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700">
                                <div className="text-4xl mb-4">📄</div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Contract & Tender Management
                                </h3>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                    Complete contract lifecycle management with automated workflows
                                </p>
                                <ul className="mt-4 space-y-1 text-sm text-gray-500 dark:text-gray-400">
                                    <li>• Contract administration</li>
                                    <li>• Tender processing</li>
                                    <li>• Vendor management</li>
                                    <li>• Compliance tracking</li>
                                </ul>
                            </div>

                            {/* Estimation & Budgeting */}
                            <div className="relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700">
                                <div className="text-4xl mb-4">💰</div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Estimation & Budgeting
                                </h3>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                    Accurate cost estimation with real-time budget monitoring
                                </p>
                                <ul className="mt-4 space-y-1 text-sm text-gray-500 dark:text-gray-400">
                                    <li>• Cost estimation tools</li>
                                    <li>• Budget variance analysis</li>
                                    <li>• Cash flow forecasting</li>
                                    <li>• ROI calculations</li>
                                </ul>
                            </div>

                            {/* Procurement & Supply Chain */}
                            <div className="relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700">
                                <div className="text-4xl mb-4">🚛</div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Procurement & Supply Chain
                                </h3>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                    Streamlined procurement with supplier management and logistics
                                </p>
                                <ul className="mt-4 space-y-1 text-sm text-gray-500 dark:text-gray-400">
                                    <li>• Purchase order automation</li>
                                    <li>• Supplier performance</li>
                                    <li>• Delivery tracking</li>
                                    <li>• Cost optimization</li>
                                </ul>
                            </div>

                            {/* Inventory & Asset */}
                            <div className="relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700">
                                <div className="text-4xl mb-4">📦</div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Inventory & Asset Management
                                </h3>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                    Real-time inventory tracking with automated stock management
                                </p>
                                <ul className="mt-4 space-y-1 text-sm text-gray-500 dark:text-gray-400">
                                    <li>• Stock level monitoring</li>
                                    <li>• Asset lifecycle tracking</li>
                                    <li>• Maintenance scheduling</li>
                                    <li>• Barcode/QR scanning</li>
                                </ul>
                            </div>

                            {/* HR & Payroll */}
                            <div className="relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700">
                                <div className="text-4xl mb-4">👥</div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Human Resource & Payroll
                                </h3>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                    Complete workforce management with automated payroll processing
                                </p>
                                <ul className="mt-4 space-y-1 text-sm text-gray-500 dark:text-gray-400">
                                    <li>• Time & attendance</li>
                                    <li>• Payroll automation</li>
                                    <li>• Performance reviews</li>
                                    <li>• Safety training</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Advanced Features */}
                    <div className="bg-blue-600 py-16">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold tracking-tight text-white">
                                    🔮 Future-Ready Integration
                                </h2>
                                <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
                                    Designed for seamless integration with cutting-edge technologies
                                </p>
                            </div>
                            
                            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                                <div className="text-center">
                                    <div className="text-4xl mb-4">🚁</div>
                                    <h3 className="text-lg font-semibold text-white">IoT & Drone Data</h3>
                                    <p className="mt-2 text-sm text-blue-100">
                                        Real-time site monitoring with aerial surveys
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl mb-4">🏗️</div>
                                    <h3 className="text-lg font-semibold text-white">BIM Integration</h3>
                                    <p className="mt-2 text-sm text-blue-100">
                                        Building Information Modeling compatibility
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl mb-4">🔗</div>
                                    <h3 className="text-lg font-semibold text-white">External Systems</h3>
                                    <p className="mt-2 text-sm text-blue-100">
                                        Financial & design system integrations
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl mb-4">📊</div>
                                    <h3 className="text-lg font-semibold text-white">Real-Time Analytics</h3>
                                    <p className="mt-2 text-sm text-blue-100">
                                        Live dashboards and reporting
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="bg-gray-50 py-16 dark:bg-gray-800">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Ready to Transform Your Construction Management? 🚀
                                </h2>
                                <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                                    Join leading construction companies using our comprehensive ERP solution
                                </p>
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    {!auth.user && (
                                        <>
                                            <Link
                                                href={route('register')}
                                                className="rounded-md bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                            >
                                                Start Your Free Trial
                                            </Link>
                                            <Link
                                                href={route('login')}
                                                className="rounded-md border border-gray-300 bg-white px-8 py-3 text-lg font-semibold text-gray-900 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                                            >
                                                Login to Dashboard
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="bg-white dark:bg-gray-900">
                    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Built with ❤️ for the construction industry • 
                                <a 
                                    href="https://app.build" 
                                    target="_blank" 
                                    className="font-medium text-blue-600 hover:underline dark:text-blue-400 ml-1"
                                >
                                    Powered by app.build
                                </a>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}