import Image from 'next/image'
import React from 'react'
import Arrow from '../ui/Arrow'

const About = () => {
  return (
    <div>
      <p className='mt-5'>
        I'm a 22-year-old Computer Science undergraduate (6th semester) with a passion for technology and innovation.
        Over the years, I've gained experience working with various programming languages and frameworks.
        I enjoy building meaningful projects, especially in the field of web development.
      </p>
      <div className='flex flex-wrap items-center justify-between mt-5'>
        <div className='w-[30%]'>
          <Image
          width={200} height={200}
          src='/globe.svg' alt='profile' />
        </div>
        

        {/* content */}
        <div className='w-[70%]'>
          <h3 className='text-2xl font-bold text-blue-950/80 dark:text-emerald-700 mb-4'>Full Stack Web Developer.</h3>
          <div className='flex flex-wrap gap-4 mb-2 text-xl'>
            {/* name */}
            <div className='flex flex-wrap items-center gap-2'>
              <Arrow />
              <h4 className='font-bold'>Full Name: </h4>
              <p>Muhammad Faizan Alam</p>
            </div>
            {/* age */}
            <div className='flex flex-wrap items-center gap-2'>
              <Arrow />
              <h4 className='font-bold'>Age: </h4>
              <p>22</p>
            </div>
            {/* location */}
            <div className='flex flex-wrap items-center gap-2'>
              <Arrow />
              <h4 className='font-bold'>Location: </h4>
              <p>Faisalabad, Pakistan, Asia</p>
            </div>
            {/* Phone */}
            <div className='flex flex-wrap items-center gap-2'>
              <Arrow />
              <h4 className='font-bold'>Phone: </h4>
              <p className='font-mono'>+923184757136</p>
            </div>
            {/* Email */}
            <div className='flex flex-wrap items-center gap-2'>
              <Arrow />
              <h4 className='font-bold'>Email: </h4>
              <p>alifaizanch3101@gmail.com</p>
            </div>
            {/* Freelance */}
            <div className='flex flex-wrap items-center gap-2'>
              <Arrow />
              <h4 className='font-bold'>Freelance: </h4>
              <p>Available</p>
            </div>
            {/* Job */}
            <div className='flex flex-wrap items-center gap-2'>
              <Arrow />
              <h4 className='font-bold'>Job: </h4>
              <p>Open to work (remote, hybrid & onsite)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About