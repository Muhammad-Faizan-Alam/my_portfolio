import Image from 'next/image'
import React from 'react'
import Arrow from '../ui/Arrow'

const About = () => {
  return (
    <section className="relative py-8 px-2 sm:px-6 md:px-10">
      <div className="backdrop-blur-md p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 transition-all duration-700">
        {/* Profile Image */}
        <div className="flex-shrink-0 flex justify-center items-center w-full md:w-auto">
          <div className="relative group">
            <Image
              width={180}
              height={180}
              src='/globe.svg'
              alt='profile'
              className="rounded-full border-4 border-blue-200 dark:border-emerald-700 shadow-xl transition-transform duration-500 group-hover:scale-105 bg-white"
            />
            <span className="absolute bottom-2 right-2 bg-gradient-to-tr from-blue-600 to-emerald-400 dark:from-emerald-600 dark:to-blue-700 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              Full Stack
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 w-full">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-950/90 dark:text-emerald-400 mb-3 tracking-tight">
            Full Stack Web Developer & Computer Scientist
          </h3>
          <p className="mb-6 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a <span className="font-bold text-blue-700 dark:text-emerald-400">22-year-old Computer Science undergraduate</span> (6th semester) with a passion for technology and innovation.<br className="hidden sm:inline" />
            Experienced in building modern, scalable web applications using <span className="font-semibold text-blue-700 dark:text-emerald-400">React, Next.js, Node.js</span> and more.<br className="hidden md:inline" />
            I love turning ideas into reality and thrive in collaborative, fast-paced environments.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base sm:text-lg">
            {/* Age */}
            <div className="flex items-center gap-2">
              <Arrow />
              <span className="font-bold">Age:</span>
              <span>22</span>
            </div>
            {/* Degree */}
            <div className="flex items-center gap-2">
              <Arrow />
              <span className="font-bold">Degree:</span>
              <span>BSCS</span>
            </div>
            {/* Location */}
            <div className="flex items-center gap-2">
              <Arrow />
              <span className="font-bold">Location:</span>
              <span>Faisalabad, Pakistan, Asia</span>
            </div>
            {/* Email */}
            <div className="flex items-center gap-2">
              <Arrow />
              <span className="font-bold">Email:</span>
              <a href="mailto:alifaizanch3101@gmail.com" className="underline hover:text-blue-700 dark:hover:text-emerald-400 transition">alifaizanch3101@gmail.com</a>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-2">
              <Arrow />
              <span className="font-bold">Phone:</span>
              <a href="tel:+923184757136" className="font-mono underline hover:text-blue-700 dark:hover:text-emerald-400 transition">+923184757136</a>
            </div>
            {/* Freelance */}
            <div className="flex items-center gap-2">
              <Arrow />
              <span className="font-bold">Freelance:</span>
              <span className="text-green-600 dark:text-emerald-400 font-semibold">Available</span>
            </div>
            {/* Job */}
            <div className="flex items-center gap-2 col-span-1 sm:col-span-2">
              <Arrow />
              <span className="font-bold">Job:</span>
              <span>Open to work <span className="text-xs text-gray-500">(remote, hybrid & onsite)</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About