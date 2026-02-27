import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

const Invoices = () => {
    const navigate = useNavigate();
    const fileInputRef = React.useRef(null);
    const [isDragging, setIsDragging] = React.useState(false);

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            console.log("Files selected:", e.target.files);
            navigate('/validation');
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            console.log("Files dropped:", e.dataTransfer.files);
            navigate('/validation');
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display antialiased overflow-hidden">
            <div className="flex h-screen w-full bg-white dark:bg-slate-900 overflow-hidden">

                {/* Persistent Sidebar */}
                <Sidebar />

                {/* Main Content Area */}
                <main className="flex-1 flex flex-col h-full bg-slate-50 dark:bg-[#0A1017] overflow-hidden relative">
                    <Header />

                    <div className="flex-1 overflow-y-auto w-full p-4 md:p-8 lg:px-12">
                        <div className="max-w-6xl mx-auto flex flex-col gap-8">

                            {/* Header Section */}
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                                <div className="flex flex-col gap-1">
                                    <h2 className="text-slate-900 dark:text-white text-3xl font-extrabold tracking-tight">Invoice Management</h2>
                                    <p className="text-secondary text-sm md:text-base">Upload and track your GST invoices efficiently.</p>
                                </div>
                                <div className="flex gap-3">
                                    <Link to="/fraud-detection" className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">download</span>
                                        <span>Export Report</span>
                                    </Link>
                                    <button onClick={() => fileInputRef.current?.click()} className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-blue-600 transition-colors shadow-sm shadow-blue-200 dark:shadow-none">
                                        <span className="material-symbols-outlined text-[18px]">add</span>
                                        <span>New Invoice</span>
                                    </button>
                                </div>
                            </div>

                            {/* Upload Area */}
                            <div className="w-full">
                                <div
                                    className={`relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed ${isDragging ? 'border-primary bg-blue-50/50 dark:bg-blue-900/20' : 'border-primary/30 bg-white dark:bg-slate-900'} p-10 transition-all group cursor-pointer hover:border-primary hover:bg-blue-50/30 dark:hover:bg-slate-800/50`}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                    onClick={() => fileInputRef.current?.click()}
                                >
                                    <input
                                        type="file"
                                        multiple
                                        className="hidden"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        accept=".jpg,.jpeg,.png,.pdf"
                                    />
                                    <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-primary text-3xl">cloud_upload</span>
                                    </div>
                                    <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-1">Drag &amp; Drop Invoices Here</h3>
                                    <p className="text-secondary text-sm mb-6 text-center max-w-sm">Supports JPG, PNG, PDF. Max file size 5MB per file.</p>
                                    <button onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }} className="flex items-center justify-center rounded-lg h-9 px-6 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                        Browse Files
                                    </button>
                                </div>
                            </div>

                            {/* Recent Uploads Section */}
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-slate-900 dark:text-white text-xl font-bold">Recent Uploads</h3>
                                    <Link className="text-primary text-sm font-bold hover:underline flex items-center gap-1" to="/validation">
                                        View All
                                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                                    </Link>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {/* Card 1: Processing */}
                                    <div className="bg-white dark:bg-slate-900 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col gap-4 cursor-pointer hover:border-primary transition-all hover:-translate-y-1 hover:shadow-md" onClick={() => navigate('/validation')}>
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-500">
                                                    <span className="material-symbols-outlined">picture_as_pdf</span>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-slate-900 dark:text-white truncate max-w-[120px]">INV-2023-009.pdf</p>
                                                    <p className="text-xs text-secondary">1.2 MB</p>
                                                </div>
                                            </div>
                                            <span className="px-2 py-1 rounded-full bg-yellow-50 text-yellow-700 border border-yellow-100 text-[10px] font-bold uppercase tracking-wide">Processing</span>
                                        </div>
                                        <div className="w-full bg-slate-100 rounded-full h-1.5 dark:bg-slate-700">
                                            <div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: '45%' }}></div>
                                        </div>
                                        <div className="flex justify-between items-center pt-2 border-t border-slate-50 dark:border-slate-800 mt-auto">
                                            <span className="text-xs text-secondary">Uploading... 45%</span>
                                            <button className="text-slate-400 hover:text-red-500 transition-colors">
                                                <span className="material-symbols-outlined text-[18px]">close</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Card 2: Validated */}
                                    <div className="bg-white dark:bg-slate-900 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col gap-4 cursor-pointer hover:border-primary transition-all hover:-translate-y-1 hover:shadow-md" onClick={() => navigate('/validation')}>
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                                                    <span className="material-symbols-outlined">image</span>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-slate-900 dark:text-white">Reliance Jio Infocomm</p>
                                                    <p className="text-xs text-secondary">Oct 24, 2023 • ₹4,500</p>
                                                </div>
                                            </div>
                                            <div className="relative group">
                                                <button className="text-slate-400 hover:text-primary">
                                                    <span className="material-symbols-outlined text-[20px]">more_vert</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="h-24 w-full rounded-lg bg-slate-50 dark:bg-slate-800 overflow-hidden border border-slate-100 dark:border-slate-700 relative" data-alt="Preview of invoice document showing header and total amount">
                                            <img alt="Invoice Preview" className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJBC7a3xoFg1bXLzWJBfL1h46iI_dsu70QvhidGxMUpnLPb8K1ajobeGFKZ4Lzl2E17bipFgGLjNtP4LBTtDELTGPQld7WNpUNoVVuH_97zQHqWeZjsBMPUpulm4WPMcXjY3SRd26AdzOtM-Lhc4ja5xcmZns5dlBIxTCEfMfeyKJ7vEoKpLIwPvuKudgIA1956U1C73MBXBwcTgE81G3HwatCHDICrYixb0x5BZYAuLF0hEojwnbUMAL88h9EY4pYsT_hQwxulfM" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-2">
                                                <span className="text-white text-xs font-medium">Page 1 of 1</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center pt-2 mt-auto">
                                            <span className="px-2 py-1 rounded-full bg-green-50 text-green-700 border border-green-100 text-[10px] font-bold uppercase tracking-wide flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Validated
                                            </span>
                                            <button onClick={() => navigate('/validation')} className="flex items-center gap-1 text-xs font-bold text-primary hover:text-blue-700">
                                                View Details
                                                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Card 3: Action Required */}
                                    <div className="bg-white dark:bg-slate-900 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col gap-4 cursor-pointer hover:border-primary transition-all hover:-translate-y-1 hover:shadow-md" onClick={() => navigate('/validation')}>
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500">
                                                    <span className="material-symbols-outlined">warning</span>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-slate-900 dark:text-white">Tata Consultancy</p>
                                                    <p className="text-xs text-secondary">Oct 22, 2023 • ₹12,800</p>
                                                </div>
                                            </div>
                                            <button className="text-slate-400 hover:text-primary">
                                                <span className="material-symbols-outlined text-[20px]">more_vert</span>
                                            </button>
                                        </div>
                                        <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-800/30">
                                            <div className="flex gap-2">
                                                <span className="material-symbols-outlined text-red-500 text-[18px]">error</span>
                                                <p className="text-xs text-red-700 dark:text-red-300 font-medium leading-relaxed">GSTIN mismatch detected. Please review the supplier details manually.</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center pt-2 mt-auto">
                                            <span className="px-2 py-1 rounded-full bg-red-50 text-red-700 border border-red-100 text-[10px] font-bold uppercase tracking-wide flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Action Required
                                            </span>
                                            <button onClick={() => navigate('/validation')} className="flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-primary">
                                                Fix Issue
                                                <span className="material-symbols-outlined text-[14px]">edit</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Stats / Footer Area */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8 mt-4">
                                <div className="bg-primary/5 rounded-xl p-4 flex items-center gap-4 border border-primary/10">
                                    <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">data_usage</span>
                                    </div>
                                    <div>
                                        <p className="text-secondary text-xs font-medium uppercase tracking-wide">Monthly Usage</p>
                                        <p className="text-slate-900 dark:text-white text-lg font-extrabold">124 / 500 <span className="text-xs font-normal text-secondary">Invoices</span></p>
                                    </div>
                                </div>
                                <div className="bg-green-50 rounded-xl p-4 flex items-center gap-4 border border-green-100 dark:bg-green-900/10 dark:border-green-800/20">
                                    <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-green-600">
                                        <span className="material-symbols-outlined">savings</span>
                                    </div>
                                    <div>
                                        <p className="text-secondary text-xs font-medium uppercase tracking-wide">Tax Saved</p>
                                        <p className="text-slate-900 dark:text-white text-lg font-extrabold">₹42,500 <span className="text-xs font-normal text-secondary">This month</span></p>
                                    </div>
                                </div>
                                <div className="bg-orange-50 rounded-xl p-4 flex items-center gap-4 border border-orange-100 dark:bg-orange-900/10 dark:border-orange-800/20">
                                    <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-orange-500">
                                        <span className="material-symbols-outlined">schedule</span>
                                    </div>
                                    <div>
                                        <p className="text-secondary text-xs font-medium uppercase tracking-wide">Pending GSTR-1</p>
                                        <p className="text-slate-900 dark:text-white text-lg font-extrabold">4 Days <span className="text-xs font-normal text-secondary">Remaining</span></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Invoices;
