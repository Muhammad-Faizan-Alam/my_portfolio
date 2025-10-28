'use client';
import Image from 'next/image'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { links, socialLinks } from './store';
import clsx from 'clsx';

const Sidebar = () => {
    // Mobile sidebar state
    const [open, setOpen] = useState(false);
    const [activeId, setActiveId] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const sectionIds = links
            .map(link => link.href.startsWith('#') ? link.href.replace('#', '') : null)
            .filter(Boolean);

        const handleScroll = () => {
            let current = '';
            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120 && rect.bottom > 120) {
                        current = id;
                        break;
                    }
                }
            }
            setActiveId(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className=''>
            {/* Desktop Sidebar */}
            <div className='h-screen w-[20vw] lg:block hidden p-3 bg-blue-950 dark:bg-gray-950 text-white fixed'>
                <div className='h-full w-full flex flex-col items-center justify-center gap-5'
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 2px, transparent 2px, transparent 18px)",
                    }}>
                    <Image
                        width={100}
                        height={100}
                        src="/profile.jpeg"
                        alt='logo'
                        className='rounded-full border-4 border-blue-200 dark:border-gray-500 shadow-xl transition-transform duration-500 group-hover:scale-105 bg-white'
                    />
                    <h1 className='text-3xl font-bold'>Faizan</h1>
                    <div className='flex flex-wrap gap-5'>
                        {socialLinks.map((link, index) => {
                            const { name, href, icon } = link;
                            return (
                                <a
                                    key={index}
                                    href={href}
                                    aria-label={name}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    dangerouslySetInnerHTML={{ __html: icon }}
                                    className='rounded-full border p-2 bg-blue-900 hover:bg-blue-950/20 dark:bg-gray-700 dark:hover:bg-gray-800/20'
                                />
                            )
                        })}
                    </div>
                    <div className='w-[80%] md:w-[100%] mt-auto dark:text-gray-400'>
                        {links.map((link, index) => {
                            const { name, href, icon } = link;
                            // For hash links, compare with activeId
                            const isActive = href.startsWith('#') && activeId === href.replace('#', '');
                            return (
                                <Link
                                    key={index}
                                    href={href}
                                    className={clsx(
                                        'flex flex-wrap gap-5 mb-5 text-xl font-semibold items-center transition-all duration-300',
                                        isActive
                                            ? 'text-blue-400 dark:text-gray-500 font-bold'
                                            : 'text-white hover:text-blue-400 dark:hover:text-gray-500'
                                    )} >
                                    <span
                                        dangerouslySetInnerHTML={{ __html: icon }}></span>
                                    {name}
                                </Link>
                            )
                        })}
                    </div>
                    <footer className='mt-auto lg:block md:hidden pt-8 text-xs dark:text-blue-200 opacity-80'>
                        &copy; All Rights Reserved
                        <Link className='text-blue-500 font-bold'
                            href="/"> faizan</Link>
                    </footer>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div className="lg:hidden fixed top-4 left-4 z-50">
                <button
                    className="w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-900 text-white flex items-center justify-center shadow-lg"
                    onClick={handleOpen}
                    aria-label="Open Menu"
                >
                    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                {open && (
                    <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
                        <div className="w-64 h-full bg-white dark:bg-blue-950 text-blue-950 dark:text-white shadow-2xl flex flex-col p-6 relative">
                            <button
                                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center"
                                onClick={handleClose}
                                aria-label="Close Menu"
                            >
                                <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M6 6l12 12M6 18L18 6" />
                                </svg>
                            </button>
                            <div className="flex flex-col items-center gap-4 mt-8">
                                <Image
                                    width={60}
                                    height={60}
                                    src="/profile.jpeg"
                                    alt='logo'
                                    className="rounded-full border-2 border-blue-200 dark:border-blue-900 shadow-lg"
                                />
                                <h1 className="text-xl font-extrabold tracking-tight">
                                    Faizan
                                </h1>
                                <div className="flex flex-wrap gap-3 mb-2">
                                    {socialLinks.map((link, index) => {
                                        const { name, href, icon } = link;
                                        return (
                                            <a
                                                key={index}
                                                href={href}
                                                aria-label={name}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                dangerouslySetInnerHTML={{ __html: icon }}
                                                className="rounded-full border border-blue-200 dark:border-blue-800 p-2 bg-blue-100/60 dark:bg-blue-900/60 hover:bg-blue-200 dark:hover:bg-blue-800 transition"
                                            />
                                        )
                                    })}
                                </div>
                                <div className="w-full flex flex-col gap-2">
                                    {links.map((link, index) => {
                                        const { name, href, icon } = link;
                                        return (
                                            <Link
                                                key={index}
                                                href={href}
                                                className="flex items-center gap-3 px-3 py-2 rounded-xl text-base font-semibold hover:bg-blue-100 dark:hover:bg-blue-900 transition"
                                            >
                                                <span
                                                    dangerouslySetInnerHTML={{ __html: icon }}
                                                    className="inline-block"
                                                />
                                                {name}
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;