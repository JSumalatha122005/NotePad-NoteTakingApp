import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import noteRoutes from './routes/note.route.js'
const app = express()
dotenv.config()
const port = process.env.PORT || 4002
//DB CONNECTION
try{
 mongoose.connect(process.env.MONGO_URL)
    console.log("DB connected successfully")
}
catch(err){
    console.log("DB connection failed", err)
}

// Routing middleware
 app.use(express.json())
 app.use(cors())
 app.use("/api/v1/noteapp", noteRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
