import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-lg sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link to='/' className='flex items-center gap-2 hover:opacity-80 transition'>
            <div className='bg-white rounded-lg p-2 shadow-md'>
              <svg className='w-6 h-6 text-purple-600' fill='currentColor' viewBox='0 0 20 20'>
                <path d='M5 3a2 2 0 012-2h6a2 2 0 012 2v11a2 2 0 01-2 2H7a2 2 0 01-2-2V3z' />
                <path d='M2 6a2 2 0 012-2h4v14H4a2 2 0 01-2-2V6z' opacity='0.3' />
              </svg>
            </div>
            <span className='text-2xl font-bold text-white hidden sm:inline'>NotePad</span>
          </Link>

          {/* Nav Links */}
          <div className='hidden md:flex gap-8 items-center'>
            <Link to='/' className='text-white hover:text-gray-100 font-medium transition duration-300'>
              My Notes
            </Link>
            {/* <Link to='/create' className='text-white hover:text-gray-100 font-medium transition duration-300'>
            Create Note LINK
            </Link> */}
          </div>

          {/* Create Button */}
          <Link to='/create' className='bg-white text-purple-600 px-6 py-2 rounded-lg font-bold hover:bg-gray-100 shadow-md transition duration-300 flex items-center gap-2'>
            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
              <path d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z' />
            </svg>
            <span className='hidden sm:inline'>New Note</span>
            <span className='sm:hidden'>+</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar