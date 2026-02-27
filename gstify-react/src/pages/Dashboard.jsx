import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

const Dashboard = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [greeting, setGreeting] = useState('Welcome back, Admin 👋');

    useEffect(() => {
        const userName = localStorage.getItem('userName') || 'Admin';
        const loginType = localStorage.getItem('loginType') || 'login';

        if (loginType === 'signup') {
            setGreeting(`Welcome, ${userName} 👋`);
        } else {
            setGreeting(`Welcome back, ${userName} 👋`);
        }
    }, []);

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onloadend = () => {
                localStorage.setItem('uploadedInvoiceImage', reader.result);
                localStorage.setItem('uploadedInvoiceName', file.name);
                navigate('/validation');
            };

            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display antialiased overflow-hidden">
            <div className="flex h-screen w-full bg-white dark:bg-slate-900 overflow-hidden">

                {/* Persistent Sidebar */}
                <Sidebar />

                {/* Main Content Area */}
                <main className="flex-1 flex flex-col h-full bg-slate-50 dark:bg-[#0A1017] overflow-hidden relative">

                    {/* Header containing search and profile dropdown */}
                    <Header />

                    <div className="flex-1 overflow-y-auto w-full p-6 lg:p-10">
                        <div className="max-w-7xl mx-auto flex flex-col gap-6">

                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
                                <div className="flex flex-col gap-1">
                                    <h2 className="text-slate-900 dark:text-white text-3xl font-extrabold tracking-tight">{greeting}</h2>
                                    <p className="text-secondary text-sm md:text-base">Here is what's happening with your GST compliance today.</p>
                                </div>
                                <div className="flex gap-3">
                                    <input
                                        type="file"
                                        multiple
                                        className="hidden"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        accept=".jpg,.jpeg,.png,.pdf"
                                    />
                                    <button onClick={() => fileInputRef.current?.click()} className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-blue-600 transition-colors shadow-sm shadow-blue-200 dark:shadow-none">
                                        <span className="material-symbols-outlined text-[18px]">add</span>
                                        <span>New Invoice</span>
                                    </button>
                                </div>
                            </div>

                            {/* 4 Stat Cards Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                                {/* Stat 1 */}
                                <div className="bg-gradient-to-br from-white to-slate-50 dark:from-[#1A2632] dark:to-[#121A23] rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 dark:hover:border-blue-800/50">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="material-symbols-outlined text-blue-500 bg-blue-50 dark:bg-blue-900/40 p-2 rounded-lg text-[20px]">receipt_long</span>
                                        <span className="text-[14px] font-bold text-slate-500 dark:text-slate-400">Total Invoices</span>
                                    </div>
                                    <div className="flex items-end justify-between mt-auto">
                                        <h3 className="text-[40px] font-extrabold text-slate-900 dark:text-white leading-none">127</h3>
                                        <span className="flex items-center text-[14px] font-bold text-green-600 mb-1">
                                            <span className="material-symbols-outlined text-[16px]">arrow_upward</span> 12%
                                        </span>
                                    </div>
                                </div>
                                {/* Stat 2 */}
                                <div className="bg-gradient-to-br from-white to-slate-50 dark:from-[#1A2632] dark:to-[#121A23] rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/5 hover:border-green-200 dark:hover:border-green-800/50">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="material-symbols-outlined text-green-500 bg-green-50 dark:bg-green-900/40 p-2 rounded-lg text-[20px]">check_circle</span>
                                        <span className="text-[14px] font-bold text-slate-500 dark:text-slate-400">Compliance Score</span>
                                    </div>
                                    <div className="flex items-end justify-between mt-auto">
                                        <h3 className="text-[40px] font-extrabold text-slate-900 dark:text-white leading-none">92%</h3>
                                        <span className="flex items-center text-[14px] font-bold text-green-600 mb-1">
                                            <span className="material-symbols-outlined text-[16px]">arrow_upward</span> 8%
                                        </span>
                                    </div>
                                </div>
                                {/* Stat 3 */}
                                <div className="bg-gradient-to-br from-white to-slate-50 dark:from-[#1A2632] dark:to-[#121A23] rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-red-900/5 hover:border-red-200 dark:hover:border-red-800/50">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="material-symbols-outlined text-red-500 bg-red-50 dark:bg-red-900/40 p-2 rounded-lg text-[20px]">warning</span>
                                        <span className="text-[14px] font-bold text-slate-500 dark:text-slate-400">Risk Alerts</span>
                                    </div>
                                    <div className="flex items-end justify-between mt-auto">
                                        <h3 className="text-[40px] font-extrabold text-slate-900 dark:text-white leading-none">3</h3>
                                        <span className="flex items-center text-[14px] font-bold text-red-500 mb-1">
                                            <span className="material-symbols-outlined text-[16px]">arrow_upward</span> 2
                                        </span>
                                    </div>
                                </div>
                                {/* Stat 4 */}
                                <div className="bg-gradient-to-br from-white to-slate-50 dark:from-[#1A2632] dark:to-[#121A23] rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/5 hover:border-purple-200 dark:hover:border-purple-800/50">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="material-symbols-outlined text-purple-500 bg-purple-50 dark:bg-purple-900/40 p-2 rounded-lg text-[20px]">drive_folder_upload</span>
                                        <span className="text-[14px] font-bold text-slate-500 dark:text-slate-400">Ready for Export</span>
                                    </div>
                                    <div className="flex items-end justify-between mt-auto">
                                        <h3 className="text-[40px] font-extrabold text-slate-900 dark:text-white leading-none">84</h3>
                                        <span className="flex items-center text-[14px] font-bold text-green-600 mb-1">
                                            <span className="material-symbols-outlined text-[16px]">arrow_upward</span> 4%
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Middle Section: Chart and Activity */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-96">
                                {/* Left Table Box */}
                                <div className="bg-white dark:bg-[#1A2632] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 lg:col-span-2 flex flex-col overflow-hidden h-[420px]">
                                    <div className="flex justify-between items-center mb-4 shrink-0">
                                        <div>
                                            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Recent Invoices</h3>
                                            <p className="text-xs text-slate-500">Live feed of processed documents</p>
                                        </div>
                                        <Link to="/invoices" className="text-xs text-primary font-bold hover:underline">View All</Link>
                                    </div>

                                    <div className="flex-1 overflow-y-auto overflow-x-auto -mx-6 px-6 relative">
                                        <table className="w-full text-left border-collapse min-w-[700px]">
                                            <thead className="sticky top-0 bg-white/90 dark:bg-[#1A2632]/90 backdrop-blur-sm z-10">
                                                <tr className="border-b border-slate-200 dark:border-slate-700 text-xs text-slate-500 uppercase tracking-widest bg-slate-50 dark:bg-slate-800/50">
                                                    <th className="py-3 px-4 font-bold rounded-tl-lg">Invoice No</th>
                                                    <th className="py-3 px-4 font-bold">Seller GSTIN</th>
                                                    <th className="py-3 px-4 font-bold">Tax Type</th>
                                                    <th className="py-3 px-4 font-bold">Total</th>
                                                    <th className="py-3 px-4 font-bold">Status</th>
                                                    <th className="py-3 px-4 font-bold text-center rounded-tr-lg">Risk</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-sm border-t border-slate-200 dark:border-slate-700">
                                                <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-blue-50/50 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                                                    <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">INV-2023-001</td>
                                                    <td className="py-3.5 px-4 font-mono text-xs text-slate-600 dark:text-slate-400">27AAPCU3890G1Z2</td>
                                                    <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">IGST</td>
                                                    <td className="py-3.5 px-4 font-medium text-slate-900 dark:text-white">₹12,450.00</td>
                                                    <td className="py-3.5 px-4">
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800 shadow-sm"><span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span> Compliant</span>
                                                    </td>
                                                    <td className="py-3.5 px-4 text-center">
                                                        <span className="text-green-500 font-bold bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded text-xs">Low</span>
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-blue-50/50 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                                                    <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">INV-2023-082</td>
                                                    <td className="py-3.5 px-4 font-mono text-xs text-slate-600 dark:text-slate-400">09AAACR3845Q1ZN</td>
                                                    <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">CGST/SGST</td>
                                                    <td className="py-3.5 px-4 font-medium text-slate-900 dark:text-white">₹8,920.50</td>
                                                    <td className="py-3.5 px-4">
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800 shadow-sm"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]"></span> Needs Review</span>
                                                    </td>
                                                    <td className="py-3.5 px-4 text-center">
                                                        <span className="text-amber-500 font-bold bg-amber-50 dark:bg-amber-900/20 px-2 py-0.5 rounded text-xs">Med</span>
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-blue-50/50 dark:hover:bg-slate-800 transition-colors cursor-pointer group bg-red-50/30 dark:bg-red-900/10">
                                                    <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">INV-2023-114</td>
                                                    <td className="py-3.5 px-4 font-mono text-xs text-slate-600 dark:text-slate-400">33BBDPR7845Q2ZQ</td>
                                                    <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">IGST</td>
                                                    <td className="py-3.5 px-4 font-medium text-slate-900 dark:text-white">₹105,600.00</td>
                                                    <td className="py-3.5 px-4">
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border border-red-200 dark:border-red-800 shadow-sm"><span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span> High Risk</span>
                                                    </td>
                                                    <td className="py-3.5 px-4 text-center">
                                                        <span className="text-red-500 font-bold bg-red-50 dark:bg-red-900/20 px-2 py-0.5 rounded text-xs animate-pulse">High</span>
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-blue-50/50 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                                                    <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">INV-2023-115</td>
                                                    <td className="py-3.5 px-4 font-mono text-xs text-slate-600 dark:text-slate-400">07AADCS6588C1Z8</td>
                                                    <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">CGST/SGST</td>
                                                    <td className="py-3.5 px-4 font-medium text-slate-900 dark:text-white">₹3,400.00</td>
                                                    <td className="py-3.5 px-4">
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800 shadow-sm"><span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span> Compliant</span>
                                                    </td>
                                                    <td className="py-3.5 px-4 text-center">
                                                        <span className="text-green-500 font-bold bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded text-xs">Low</span>
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-blue-50/50 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                                                    <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">INV-2023-118</td>
                                                    <td className="py-3.5 px-4 font-mono text-xs text-slate-600 dark:text-slate-400">24AACCL5436B1Z5</td>
                                                    <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">IGST</td>
                                                    <td className="py-3.5 px-4 font-medium text-slate-900 dark:text-white">₹45,200.00</td>
                                                    <td className="py-3.5 px-4">
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800 shadow-sm"><span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span> Compliant</span>
                                                    </td>
                                                    <td className="py-3.5 px-4 text-center">
                                                        <span className="text-green-500 font-bold bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded text-xs">Low</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Right Activity Box */}
                                <div className="bg-white dark:bg-[#1A2632] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-0 flex flex-col">
                                    <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                                        <h3 className="font-bold">Recent Activity</h3>
                                        <Link to="/invoices" className="text-xs text-primary font-bold hover:underline">View All</Link>
                                    </div>
                                    <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">

                                        {/* Activity item */}
                                        <div className="flex gap-4 items-start">
                                            <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-[16px]">check</span>
                                            </div>
                                            <div>
                                                <p className="text-sm text-slate-900 dark:text-white font-medium">Auto-validated <span className="font-bold">24 invoices</span> from Reliance Jio.</p>
                                                <p className="text-xs text-slate-400 mt-1">10 minutes ago</p>
                                            </div>
                                        </div>

                                        {/* Activity item */}
                                        <div className="flex gap-4 items-start">
                                            <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-[16px]">error</span>
                                            </div>
                                            <div>
                                                <p className="text-sm text-slate-900 dark:text-white font-medium">Flagged <span className="font-bold">INV-9281</span> for HSN code mismatch.</p>
                                                <p className="text-xs text-slate-400 mt-1">2 hours ago</p>
                                            </div>
                                        </div>

                                        {/* Activity item */}
                                        <div className="flex gap-4 items-start">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-[16px]">cloud_upload</span>
                                            </div>
                                            <div>
                                                <p className="text-sm text-slate-900 dark:text-white font-medium">Batch upload of 150 PDFs completed.</p>
                                                <p className="text-xs text-slate-400 mt-1">Yesterday at 4:32 PM</p>
                                            </div>
                                        </div>

                                        {/* Activity item */}
                                        <div className="flex gap-4 items-start">
                                            <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
                                            </div>
                                            <div>
                                                <p className="text-sm text-slate-900 dark:text-white font-medium">GSTR-1 Draft CSV generated for September.</p>
                                                <p className="text-xs text-slate-400 mt-1">Oct 5 at 9:00 AM</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="mt-4 text-center border-t border-slate-200 dark:border-slate-800 pt-6 pb-2">
                                <p className="text-xs text-slate-500 dark:text-slate-500">
                                    &copy; 2026 GSTify.AI. <Link to="/contact" className="text-primary hover:underline ml-2">Help &amp; Support</Link>
                                </p>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
