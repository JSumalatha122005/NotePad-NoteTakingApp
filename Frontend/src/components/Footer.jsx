import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
   <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 border-t border-gray-700">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    
    {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"> */}
      <div className="mb-4">
      {/* Brand */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-md p-2">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M5 3a2 2 0 012-2h6a2 2 0 012 2v11a2 2 0 01-2 2H7a2 2 0 01-2-2V3z" />
              <path
                d="M2 6a2 2 0 012-2h4v14H4a2 2 0 01-2-2V6z"
                opacity="0.3"
              />
            </svg>
          </div>

          <h3 className="text-lg font-semibold text-white tracking-wide">
            NotePad
          </h3>
        </div>

        <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
          Simple, secure, and smart note-taking for everyday ideas.
        </p>
      </div>

          {/* Product Links */}
          {/* <div>
            <h4 className='text-white font-semibold mb-4'>Product</h4>
            <ul className='space-y-2'>
              <li><a href='#' className='hover:text-white transition'>Features</a></li>
              <li><a href='#' className='hover:text-white transition'>Pricing</a></li>
              <li><a href='#' className='hover:text-white transition'>Security</a></li>
              <li><a href='#' className='hover:text-white transition'>Updates</a></li>
            </ul>
          </div> */}

          {/* Resources */}
          {/* <div>
            <h4 className='text-white font-semibold mb-4'>Resources</h4>
            <ul className='space-y-2'>
              <li><a href='#' className='hover:text-white transition'>Documentation</a></li>
              <li><a href='#' className='hover:text-white transition'>Help Center</a></li>
              <li><a href='#' className='hover:text-white transition'>Blog</a></li>
              <li><a href='#' className='hover:text-white transition'>Community</a></li>
            </ul>
          </div> */}

          {/* Connect */}
          {/* <div>
            <h4 className='text-white font-semibold mb-4'>Connect</h4>
            <div className='flex gap-4'>
              <a href='#' className='bg-gray-700 hover:bg-blue-600 p-2 rounded transition'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7' />
                </svg>
              </a>
              <a href='#' className='bg-gray-700 hover:bg-blue-700 p-2 rounded transition'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z' />
                </svg>
              </a>
              <a href='#' className='bg-gray-700 hover:bg-red-600 p-2 rounded transition'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z' />
                </svg>
              </a>
            </div>
          </div>
        */}
        </div>

        {/* Divider */}
        <div className='border-t border-gray-700 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-sm text-gray-400'>
              &copy; {currentYear} NotePad. All rights reserved.
            </p>
            <div className='flex gap-6 text-sm'>
              <a href='#' className='hover:text-white transition'>Privacy Policy</a>
              <a href='#' className='hover:text-white transition'>Terms of Service</a>
              <a href='#' className='hover:text-white transition'>Cookie Settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer