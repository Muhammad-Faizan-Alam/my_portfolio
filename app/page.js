import React from 'react'
import ThemeToggle from './components/ThemeToggle'

const page = () => {
  return (
    <div className='w-[100%] bg-amber-400 dark:bg-amber-900 text-black dark:text-white h-screen flex items-center justify-center transition-all duration-300'>
      <ThemeToggle />
      page
    </div>
  )
}

export default page