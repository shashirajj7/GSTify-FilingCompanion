import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isDark, setIsDark] = useState(() => {
        // Initialize state based on the document class to keep it consistent
        return document.documentElement.classList.contains('dark');
    });

    // Update state if theme changes elsewhere (e.g. initial load logic)
    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    setIsDark(document.documentElement.classList.contains('dark'));
                }
            });
        });
        observer.observe(document.documentElement, { attributes: true });
        return () => observer.disconnect();
    }, []);

    const toggleTheme = () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setIsDark(true);
        }
    };

    return (
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link to="/" className="flex items-center gap-2 cursor-pointer">
                        <img src="/logo.png" alt="GSTify.AI Logo" className="w-9 h-9 object-contain drop-shadow-sm" />
                        <span className="font-bold text-xl tracking-tight text-t_navy">GSTify.AI</span>
                    </Link>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="/#features" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Features</a>
                        <a href="/#how-it-works" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">How it Works</a>
                        <Link to="/pricing" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Pricing</Link>
                        <Link to="/contact" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Contact</Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            aria-label="Toggle Theme"
                        >
                            <span className="material-symbols-outlined text-[20px]">
                                {isDark ? 'light_mode' : 'dark_mode'}
                            </span>
                        </button>
                        <Link to="/login" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-t_navy dark:hover:text-white hidden sm:block">Log in</Link>
                        <Link to="/dashboard" className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-primary rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
                            Try Demo
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
