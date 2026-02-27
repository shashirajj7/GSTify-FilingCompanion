import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Landing = () => {
    return (
        <div className="bg-white text-gray-800 font-sans antialiased overflow-x-hidden min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                        <div className="absolute top-0 right-0 -mr-20 lg:-mr-40 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -z-10 text-primary"></div>
                        <div className="absolute top-40 left-0 -ml-20 w-[300px] h-[300px] bg-blue-50/30 rounded-full blur-2xl -z-10 text-primary"></div>

                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                            <div className="max-w-2xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary text-sm font-semibold mb-6">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                    </span>
                                    AI-Powered GST Automation
                                </div>
                                <h1 className="mb-6">
                                    Automate GST Invoice Processing <br className="hidden lg:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500">with AI</span>
                                </h1>
                                <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                                    AI-powered invoice extraction, GST validation, fraud detection and GSTR-1 draft generation — built for Indian MSMEs.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
                                    <Link to="/dashboard" className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 text-[16px] font-semibold text-white bg-primary rounded-lg hover:bg-blue-700 transition-all hover:shadow-[0_4px_20px_rgba(19,127,236,0.4)] shadow-lg shadow-blue-500/30 gap-2">
                                        Try Demo
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </Link>
                                    <Link to="/dashboard" className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 text-[16px] font-semibold text-slate-700 bg-white border-2 border-slate-200 rounded-lg hover:border-primary hover:text-primary hover:bg-blue-50/20 transition-all gap-2">
                                        <span className="material-symbols-outlined text-primary">play_circle</span>
                                        Watch Workflow
                                    </Link>
                                </div>
                            </div>

                            <div className="relative lg:ml-10">
                                {/* Browser Mockup Illustration */}
                                <div className="relative rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden transform hover:-translate-y-2 transition-transform duration-500">
                                    <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                        <div className="ml-4 bg-white rounded-md px-3 py-1 flex-1 text-xs text-gray-400 font-mono text-center shadow-sm">
                                            app.gstify.ai/dashboard
                                        </div>
                                    </div>
                                    <div className="p-6 bg-gray-50/50">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="w-32 h-6 bg-gray-200 rounded animate-pulse"></div>
                                            <div className="w-24 h-8 bg-blue-100 rounded-lg animate-pulse"></div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4 mb-6">
                                            <div className="h-24 bg-white border border-gray-100 shadow-sm rounded-xl p-4 flex flex-col justify-between">
                                                <div className="w-8 h-8 rounded-full bg-green-100 mb-2"></div>
                                                <div className="w-16 h-4 bg-gray-200 rounded"></div>
                                            </div>
                                            <div className="h-24 bg-white border border-gray-100 shadow-sm rounded-xl p-4 flex flex-col justify-between">
                                                <div className="w-8 h-8 rounded-full bg-blue-100 mb-2"></div>
                                                <div className="w-20 h-4 bg-gray-200 rounded"></div>
                                            </div>
                                            <div className="h-24 bg-white border border-gray-100 shadow-sm rounded-xl p-4 flex flex-col justify-between">
                                                <div className="w-8 h-8 rounded-full bg-orange-100 mb-2"></div>
                                                <div className="w-14 h-4 bg-gray-200 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-4 h-40 flex flex-col gap-3">
                                            <div className="w-full h-8 bg-gray-50 rounded"></div>
                                            <div className="w-full h-8 bg-gray-50 rounded"></div>
                                            <div className="w-full h-8 bg-gray-50 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trust Indicators Section */}
                <section className="py-12 bg-white border-y border-slate-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                            <div className="flex items-center gap-2 text-slate-500 font-semibold"><span className="material-symbols-outlined text-green-500">verified</span> GSTN Compatible</div>
                            <div className="flex items-center gap-2 text-slate-500 font-semibold"><span className="material-symbols-outlined text-primary">apartment</span> Built for Indian MSMEs</div>
                            <div className="flex items-center gap-2 text-slate-500 font-semibold"><span className="material-symbols-outlined text-purple-500">memory</span> AI-Powered</div>
                            <div className="flex items-center gap-2 text-slate-500 font-semibold"><span className="material-symbols-outlined text-blue-400">cloud_done</span> Secure Cloud Processing</div>
                        </div>
                    </div>
                </section>

                {/* Problem Section */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-t_navy mb-4">
                                Why Manual Entry is <span className="text-red-500">Holding You Back</span>
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Traditional accounting processes are slow, expensive, and a compliance nightmare waiting to happen.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 hover:border-slate-200 transition-all duration-300 transform hover:-translate-y-1">
                                <h2 className="text-[48px] font-black text-primary mb-2">80%</h2>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Manual Entry Default</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    80% of Indian MSMEs still manually enter invoices into their accounting software, severely limiting their bandwidth.
                                </p>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-red-900/5 hover:border-slate-200 transition-all duration-300 transform hover:-translate-y-1">
                                <h2 className="text-[48px] font-black text-red-500 mb-2">30%</h2>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Filing Error Rate</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Manual typing results in a ~30% error rate in critical fields such as GSTINs and HSN codes, causing notice disputes.
                                </p>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-amber-900/5 hover:border-slate-200 transition-all duration-300 transform hover:-translate-y-1">
                                <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined text-amber-500 text-[32px]">timer</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Wasted Reconciliation</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Accountants waste valuable hours matching GSTR-1 vs GSTR-2B data instead of focusing on tax strategy.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section id="how-it-works" className="py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-2xl mx-auto mb-20">
                            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">How it Works</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-t_navy">Simplify Your Workflow in 4 Steps</h2>
                        </div>
                        <div className="relative">
                            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-200 -translate-y-12 z-0"></div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
                                {/* Step 1 */}
                                <div className="text-center group">
                                    <div className="mx-auto w-24 h-24 rounded-full bg-blue-50 border-4 border-white shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-primary text-4xl">cloud_upload</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-t_navy mb-2">1. Upload</h3>
                                    <p className="text-gray-600 leading-relaxed">Drag & drop your PDFs, images, or scanned documents securely.</p>
                                </div>
                                {/* Step 2 */}
                                <div className="text-center group">
                                    <div className="mx-auto w-24 h-24 rounded-full bg-purple-50 border-4 border-white shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-purple-600 text-4xl">memory</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-t_navy mb-2">2. Extract</h3>
                                    <p className="text-gray-600 leading-relaxed">Our OCR & AI instantly extracts relevant fields with high precision.</p>
                                </div>
                                {/* Step 3 */}
                                <div className="text-center group">
                                    <div className="mx-auto w-24 h-24 rounded-full bg-green-50 border-4 border-white shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-green-600 text-4xl">verified</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-t_navy mb-2">3. Validate</h3>
                                    <p className="text-gray-600 leading-relaxed">Cross-check against GSTN and identify tax mismatch anomalies.</p>
                                </div>
                                {/* Step 4 */}
                                <div className="text-center group">
                                    <div className="mx-auto w-24 h-24 rounded-full bg-orange-50 border-4 border-white shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-orange-600 text-4xl">download</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-t_navy mb-2">4. Export</h3>
                                    <p className="text-gray-600 leading-relaxed">Review flagged issues and export government-ready formats.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-24 bg-t_navy text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center max-w-2xl mx-auto mb-20">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Modern Teams</h2>
                            <p className="text-gray-400 text-lg">Built with enterprise-grade security and accuracy in mind.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Feature 1 */}
                            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                                    <span className="material-symbols-outlined">document_scanner</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Smart OCR Extraction</h3>
                                <p className="text-gray-400 leading-relaxed">Extracts text even from poor quality scans or handwritten invoices.</p>
                            </div>
                            {/* Feature 2 */}
                            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-6 text-green-400">
                                    <span className="material-symbols-outlined">verified</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Live GSTIN Validation</h3>
                                <p className="text-gray-400 leading-relaxed">Cross-checks supplier details directly with the official GST portal.</p>
                            </div>
                            {/* Feature 3 */}
                            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
                                    <span className="material-symbols-outlined">analytics</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Anomaly Detection</h3>
                                <p className="text-gray-400 leading-relaxed">Flags duplicate invoices and mismatched tax amounts automatically.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-20 bg-primary relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                            Start automating your GST workflow today.
                        </h2>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <Link to="/dashboard" className="px-8 py-4 bg-white text-primary text-lg font-bold rounded-xl hover:bg-slate-50 transition-all shadow-xl shadow-blue-900/20 hover:-translate-y-1">
                                Get Started for Free
                            </Link>
                            <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-white/30 text-white text-lg font-bold rounded-xl hover:bg-white/10 transition-all">
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div >
    );
};

export default Landing;
