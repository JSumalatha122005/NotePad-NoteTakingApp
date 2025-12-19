import express from "express"
import { createNote, getNotes, updateNote,deleteNote } from "../controllers/note.controller.js"
const router=express.Router()

//Create a new note
router.post("/create-note",createNote)
//Get notes
router.get('/get-notes',getNotes)
//update note
router.put('/update-note/:id',updateNote)
//delete note
router.delete('/delete-note/:id',deleteNote)
export default router