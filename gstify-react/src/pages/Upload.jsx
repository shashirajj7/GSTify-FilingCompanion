import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

const Upload = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);

    const simulateUpload = (file) => {
        setIsUploading(true);
        setUploadProgress(0);

        // Read file and store in localStorage
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                localStorage.setItem('uploadedInvoiceImage', reader.result);
                localStorage.setItem('uploadedInvoiceName', file.name);
            };
            reader.readAsDataURL(file);
        }

        const interval = setInterval(() => {
            setUploadProgress(prev => {
                const next = prev + Math.floor(Math.random() * 15) + 5;
                if (next >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        navigate('/validation');
                    }, 500);
                    return 100;
                }
                return next;
            });
        }, 200);
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            simulateUpload(e.target.files[0]);
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
            simulateUpload(e.dataTransfer.files[0]);
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display antialiased overflow-hidden">
            <div className="flex h-screen w-full bg-slate-50 dark:bg-slate-900 overflow-hidden">
                <Sidebar />
                <main className="flex-1 flex flex-col h-full bg-slate-50 dark:bg-[#0A1017] overflow-hidden relative">
                    <Header />
                    <div className="flex-1 overflow-y-auto w-full p-4 md:p-8 lg:px-12 flex flex-col justify-center items-center">
                        <div className="w-full max-w-2xl bg-white dark:bg-[#1A2632] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-8 md:p-12">

                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">Upload Invoices</h2>
                                <p className="text-slate-500 text-sm">Upload standard GST formats for AI extraction and validation.</p>
                            </div>

                            {!isUploading ? (
                                <div
                                    className={`relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed transition-all group cursor-pointer h-72 ${isDragging ? 'border-primary bg-blue-50/50 dark:bg-blue-900/20 scale-[1.02]' : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 hover:border-primary hover:bg-blue-50/30 dark:hover:bg-slate-800/80'}`}
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
                                    <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                        <span className="material-symbols-outlined text-primary text-4xl">cloud_upload</span>
                                    </div>
                                    <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-2">Drag & Drop files here</h3>
                                    <p className="text-slate-500 text-sm mb-6 text-center">
                                        <span className="font-semibold text-slate-700 dark:text-slate-300">Supported Formats:</span> PDF, JPG, PNG (Max 5MB)
                                    </p>
                                    <button onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }} className="px-6 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-bold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
                                        Browse Files
                                    </button>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-72 border-2 border-transparent">
                                    <div className="relative w-24 h-24 mb-8">
                                        <svg className="w-full h-full animate-spin text-slate-200 dark:text-slate-700" viewBox="0 0 100 100">
                                            <circle className="stroke-current stroke-[8]" cx="50" cy="50" r="40" fill="none" />
                                        </svg>
                                        <svg className="w-full h-full absolute top-0 left-0 text-primary transition-all duration-300" viewBox="0 0 100 100">
                                            <circle
                                                className="stroke-current stroke-[8] origin-center -rotate-90 transition-all duration-300"
                                                cx="50"
                                                cy="50"
                                                r="40"
                                                fill="none"
                                                strokeDasharray="251.2"
                                                strokeDashoffset={251.2 - (251.2 * uploadProgress) / 100}
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-xl font-bold text-slate-900 dark:text-white">{uploadProgress}%</span>
                                        </div>
                                    </div>
                                    <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-2 animate-pulse">Processing Documents...</h3>
                                    <p className="text-slate-500 text-sm">AI Engine is extracting GST details</p>
                                </div>
                            )}

                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Upload;
