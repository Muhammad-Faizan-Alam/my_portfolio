import React from 'react'
import ThemeToggle from './components/ThemeToggle'
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import { sections } from './components/store';
import Arrow from './ui/Arrow';
import Link from 'next/link';
import Footer from './components/Footer';
import Home from './components/Home';

const page = () => {
  return (
    <div className='lg:ml-[20vw] w-[100%] max-w-screen transition-all duration-300'>
      {/* Home */}
      <Home/>


      <div className='md:p-12 p-6'>
        {/* Other Sections */}
      {
        sections.map((sec, index) => {
          const { name, prev, next } = sec;
          return (
            <div
              key={index}
              id={name}
              className="group relative md:border-2 border-blue-700 dark:border-emerald-700 rounded-4xl hover:md:shadow-2xl hover:shadow-blue-700/80 dark:hover:shadow-emerald-700 w-full md:p-6 mb-20 transition-all duration-1000">
              {/* top options */}
              <div
                className="absolute xl:w-[20%] w-[30%] xl:left-[70%] left-[60%] -top-6 p-2 bg-gray-300 rounded-xl border-2 border-transparent opacity-0 pointer-events-none transition-all duration-1000 md:group-hover:opacity-100 md:group-hover:pointer-events-auto flex flex-wrap justify-between items-center">
                <ThemeToggle />

                <Link href={prev} className="text-blue-950 dark:text-emerald-700 -rotate-90" title='previous section'><Arrow/></Link>
                <Link href={next} className="text-blue-950 dark:text-emerald-700 rotate-90" title='next section'><Arrow/></Link>
              </div>
              {/* main content */}
              {/* <h2 className="text-3xl font-bold text-blue-950/80 dark:text-emerald-700">{name}</h2> */}
              {name === 'About' && (<About />)}
              {/* {name === 'Reviews' && (<Reviews />)} */}
              {name === 'Projects' && (<Projects />)}
              {name === 'Resume' && (<Resume />)}
              {name === 'Services' && (<Services />)}
              {name === 'Contact' && (<Contact />)}
            </div>
          )
        })
      }
      </div>
      <Footer/>
    </div>
  )
}

export default page