import React, { useContext } from 'react'
import { NoteContext } from '../context/NoteContext'
import Notecard from '../components/Notecard'
import { Link } from 'react-router-dom'

function Home() {
    const{notes,loading}=useContext(NoteContext)
    console.log(notes)
    if(loading){
      return (
        <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800'>
          <div className='text-center'>
            <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4'></div>
            <p className='text-lg text-gray-400'>Loading your notes...</p>
          </div>
        </div>
      )
    }
    if(notes.length===0){
      return (
        <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
          <div className='text-center max-w-md'>
            <div className='mb-6'>
              <svg className='w-20 h-20 mx-auto text-gray-600 mb-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
              </svg>
            </div>
            <h2 className='text-3xl font-bold text-white mb-2'>No Notes Yet</h2>
            <p className='text-gray-400 mb-8'>Start creating notes and organize your thoughts. Your first note awaits!</p>
            <Link to='/create' className='inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:from-blue-600 hover:to-purple-700 transition shadow-lg'>
              Create Your First Note
            </Link>
          </div>
        </div>
      )
    }
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='mb-8'>
          <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2'>My Notes</h1>
          <p className='text-gray-400'>You have <span className='text-blue-400 font-semibold'>{notes.length}</span> note{notes.length !== 1 ? 's' : ''}</p>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {notes.map((note, index) => (
            <Notecard key={note._id || index} note={note}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home