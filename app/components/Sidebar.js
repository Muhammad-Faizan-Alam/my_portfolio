import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { links, socialLinks } from './store';

const Sidebar = () => {
    return (
        <div>
            <div className='h-[97.5vh] w-[20vw] md:block hidden m-2 rounded-lg p-2 bg-blue-950 dark:bg-gray-950 text-white'>
                <div className='h-full w-full flex flex-col items-center justify-center gap-5'
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 2px, transparent 2px, transparent 18px)",
                        // backgroundColor: "#172554" // fallback for bg-blue-950
                    }}>

                    <Image
                        width={100}
                        height={100}
                        src="globe.svg"
                        alt='logo' />

                    <h1 className='text-3xl font-bold'>Faizan</h1>

                    <div className='flex flex-wrap gap-5'>
                        {
                            socialLinks.map((link, index) => {
                                const { name, href, icon } = link;
                                return (
                                    <a
                                        key={index}
                                        href={href}
                                        aria-label={name}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        // Add rel for security best practice
                                        dangerouslySetInnerHTML={{ __html: icon }}
                                        className='rounded-full border p-2 bg-blue-900 hover:bg-blue-950/20 dark:bg-gray-700 dark:hover:bg-gray-800/20'
                                    />
                                )
                            })
                        }
                    </div>

                    <div className='w-[80%] mt-auto dark:text-gray-400'>
                        {
                            links.map((link, index) => {
                                const { name, href, icon } = link;
                                return (
                                    <Link key={index} href={href} className='flex flex-wrap gap-5 mb-5 text-xl font-semibold items-center' >
                                        <span
                                        rel='noopener noreferrer'
                                        // Add rel for security best practice
                                        dangerouslySetInnerHTML={{ __html: icon }}></span>
                                        {name}
                                    </Link>
                                )
                            })
                        }
                    </div>

                    <footer className='mt-auto pt-8 text-xs dark:text-blue-200 opacity-80'>
                        &copy; All Rights Reserved
                        <Link className='text-blue-500 font-bold'
                        href="/"> faizan</Link>
                    </footer>
                </div>
            </div>
            <div className='md:hidden block'>
                Sidebar
            </div>
        </div>
    )
}

export default Sidebar