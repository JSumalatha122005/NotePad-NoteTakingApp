import React,{useContext,useState} from 'react'
import { NoteContext } from '../context/NoteContext'

function Notecard({ note }) {
    // console.log(note)
    const {deleteNote,updateNote}=useContext(NoteContext)
    const [isEditing,setIsEditing]=useState(false)
    const[editData,setEditData]=useState({
        title:note.title,
        content:note.content
    })
    
    const handleUpdate = async () => {
        if (!note._id) {
            console.error("Note ID is missing:", note);
            alert("Error: Note ID not found. Refresh the page.");
            return;
        }
        try {
            await updateNote(note._id, editData)
            setIsEditing(false)
        } catch (error) {
            console.error("Update failed:", error);
            alert("Failed to update note: " + error.response?.data?.message || error.message);
        }
    }
  return (
    // <div className='bg-gray-800 p-4 rounded-lg shadow-lg'>
    //   <h3 className='font-bold text-lg mb-2'>{note.title}</h3>
    //   <p className='text-gray-300'>{note.content}</p>
    // </div>
    <div className='bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col justify-between h-full'>
      {isEditing ? (
        <>
        <input
          type="text"
          className="border rounded-lg p-2 w-full mb-3 focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          value={editData.title}
          onChange={(e) => setEditData({ ...editData, title: e.target.value })}
        />
        <textarea
          className="border rounded-lg p-2 w-full mb-3 focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          rows="3"
          value={editData.content}
          onChange={(e) => setEditData({ ...editData, content: e.target.value })}
        />
        <div className="flex gap-2">
            <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >Save</button>
            <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
            >Cancel</button>
        </div>
        </>
      ):(
        <>
        {/*View Mode*/}
        <h2 className="text-xl font-semibold text-white-900 dark:text-gray-100">
            {note.title}</h2> 
            <p className="text-gray-300 dark:text-gray-300 mt-2 flex-1">
                {note.content}</p>
                {/*Footer:data + actions*/}
                <div className="mt-4 flex items-center justify-between text-sm text-white-500 dark:text-white-400">
                    <span>
                        {new Date(note.createdAt).toLocaleDateString("en-US",{
                            day:"numeric",
                            month:"short",
                            year:"numeric",
                        })}
                    </span>
                    <div className="flex gap-2">
                        <button
                        onClick={() => setIsEditing(true)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg transition"
                        >Edit</button>
                        <button
                        onClick={() => deleteNote(note._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
                        >Delete</button>
                    </div>
                </div>
                </>
      )}
</div>
    )}
export default Notecard