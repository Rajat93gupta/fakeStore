import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
    
  return (
    <div className='w-full bg-red-400 p-2 mt-auto'>
        <h1 className='text-center'>@copyRight {year}</h1>

      
    </div>
  )
}

export default Footer
