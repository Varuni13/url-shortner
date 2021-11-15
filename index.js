const express = require('express')
require('dotenv').config()
let mongoose = require('mongoose')
const poll = require("./src/routes/poll.route")
var cors = require('cors')
const bodyparser = require('body-parser')

const app = express()
// Body-parser middleware
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(cors())

try {
   mongoose.connect(process.env.MONGO_CONNECTION_STRING)
  .then((data)=>{
    console.log("--- Database connected succesfully --- ")
  })
} catch (error) {
  console.log("--- Error connecting to MongoDB ---",error)
}

app.use("/",poll)
app.listen(process.env.PORT,()=>{
    console.log("--- Server started at port ",process.env.PORT," ---")
})
