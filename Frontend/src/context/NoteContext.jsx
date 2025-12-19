//to handle global state for notes like if I want to share notes data across multiple components without prop drilling
import { createContext, useEffect, useState } from "react";
import BACKEND_URL from "../api/url";
//here the getNotes, createNote, updateNote, deleteNote functions will interact with backend API using axios to perform CRUD operations on notes and never use in frontend anywhere.
export const NoteContext = createContext();

//use this NoteProvider we use in application route.
export const NoteProvider = ({children}) => {
const [notes, setNotes] = useState([]);// here the title and content of notes will be stored in array
const [loading,setLoading] = useState(true);
//fetch all notes
const getNotes = async () => {
    setLoading(true);//this explains if data not shown on screen it keeps loading
    try{
        const response = await BACKEND_URL.get("/get-notes");//use get-note API from backend which we mentioned in route.js
        // Handle both direct array and wrapped response
        const notesData = Array.isArray(response.data) ? response.data : response.data.data || [];
        setNotes(notesData);
    }catch(error){
        console.error("Error fetching notes:", error);
        setNotes([]); // Set empty array on error
    }finally{
        setLoading(false);
    }
}

useEffect(() => {
    getNotes();
}, []);

//create a note
const createNote = async (note) => {
    const res=await BACKEND_URL.post("/create-note", note);
    setNotes([res.data,...notes]);//append new note to existing notes array
}

//update a note needs Id and updatednote
const updateNote = async (id,updateNote) => {
    const res=await BACKEND_URL.put(`/update-note/${id}`, updateNote);
    setNotes(notes.map((note) => (note._id === id ? res.data : note)));
}

//delete a note
const deleteNote = async (id) => {
    try {
        await BACKEND_URL.delete(`/delete-note/${id}`);
        setNotes(notes.filter((note) => note._id !== id));
    } catch (error) {
        console.error("Error deleting note:", error);
        alert("Failed to delete note");
    }
}
return (
    <NoteContext.Provider value={{notes,loading,createNote, updateNote, deleteNote}}>
        {children}
    </NoteContext.Provider>
)
}