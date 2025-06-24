import React from 'react'

const TextBox = ({content}) => {
  return (
    <span className='bg-blue-100 text-blue-700 dark:bg-emerald-950 dark:text-white rounded-lg px-3 m-1 font-sans'>
        {content}
    </span>
  )
}

export default TextBox