import React, { useState } from 'react'
import { NoteContext } from '../context/NoteContext'
import { useNavigate } from 'react-router-dom'

function Noteform() {
    const {createNote}=React.useContext(NoteContext)
    const navigate=useNavigate()
    const [note,setNote]=useState({
        title:"",
        content:""
    })
    const [isLoading,setIsLoading]=useState(false)
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(!note.title.trim() || !note.content.trim()) {
            alert("Please fill in both title and content")
            return
        }
        try{
            setIsLoading(true)
            await createNote(note)
            setNote({title:"",content:""})
            alert("Note created successfully!")
            navigate('/')
        }catch(error){
            console.error("Error creating note:", error)
            alert("Failed to create note")
        }finally{
            setIsLoading(false)
        }
    }
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-10 pb-5'>
        <div className='max-w-2xl mx-auto px-2'>
            <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-4 border border-gray-700'>
                <div className='mb-2'>
                    <h2 className='text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-1'>Create a New Note</h2>
                    <p className='text-gray-400'>Capture your thoughts and ideas in a beautiful note</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-2">
                    <div>
                        <label className='text-gray-300 font-semibold mb-1 block'>Title</label>
                        <input
                        type="text"
                        placeholder="Enter a catchy title..."
                        className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        value={note.title}
                        onChange={(e)=>setNote({...note,title:e.target.value})}
                        maxLength="100"
                        />
                        <p className='text-xs text-gray-500 mt-1'>{note.title.length}/100</p>
                    </div>
                    <div>
                        <label className='text-gray-300 font-semibold mb-1 block'>Content</label>
                        <textarea
                        placeholder="Write your thoughts, ideas, or anything on your mind..."
                        className="w-full px-2 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                        rows="8"
                        value={note.content}
                        onChange={(e)=>setNote({...note,content:e.target.value})}
                        />
                    </div>
                    <div className='flex gap-2'>
                        <button
                        type="submit"
                        disabled={isLoading}
                        className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg font-bold hover:from-blue-600 hover:to-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                        >
                            {isLoading ? "Creating..." : "Create Note"}
                        </button>
                        <button
                        type="button"
                        onClick={()=>navigate('/')}
                        className="flex-1 bg-gray-700 text-white py-2 rounded-lg font-bold hover:bg-gray-600 transition shadow-lg"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Noteform