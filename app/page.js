import React from 'react'
import ThemeToggle from './components/ThemeToggle'
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';

const page = () => {
  const sections = [
    // { name: 'Home', prev: 'none', next: 'About' },
    { name: 'About', prev: 'Home', next: 'Projects' },
    { name: 'Projects', prev: 'About', next: 'Experience' },
    { name: 'Experience', prev: 'Projects', next: 'Services' },
    { name: 'Services', prev: 'Experience', next: 'Contact' },
    { name: 'Contact', prev: 'Services', next: 'None' },
  ]
  return (
    <div className='md:ml-[20vw] md:w-[75vw] max-w-screen p-12 transition-all duration-300'>
      {/* Home */}
      <></>

      {/* Other Sections */}
      {
        sections.map((sec, index) => {
          const { name, prev, next } = sec;
          return (
            <div
              key={index}
              id={name}
              className="group relative md:border border-emerald-700 md:hover:border-2 hover:border-emerald-700 rounded-4xl hover:md:shadow-2xl hover:shadow-emerald-700 w-full md:p-6 mb-20 transition-all duration-1000"
            >
              {/* top options */}
              <div
                className="absolute w-[20%] left-[70%] -top-6 p-2 bg-white rounded-xl border-2 border-transparent opacity-0 pointer-events-none transition-all duration-1000 group-hover:opacity-100 group-hover:pointer-events-auto">
                <ThemeToggle />
              </div>
              <h2 className="text-3xl font-bold text-blue-950/80 dark:text-emerald-700">{name}</h2>
              {/* main content */}
              {name === 'About' && (<About />)}
              {name === 'Projects' && (<Projects />)}
              {name === 'Experience' && (<Experience />)}
              {name === 'Services' && (<Services />)}
              {name === 'Contact' && (<Contact />)}
            </div>
          )
        })
      }
    </div>
  )
}

export default page