import app from "./server.js"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import userRoute from './api/user/user.route.js'
dotenv.config()
const port = process.env.PORT || 5000
const dbURI = process.env.DB_URI
mongoose.connect(dbURI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true, 
}) 
.then(() => console.log("MongoDB connected")) 
.catch((err) => console.log(err));
app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })
app.use('/user',userRoute)
app.use("*", (req,res) => res.status(404).json({error:"not found"}))

