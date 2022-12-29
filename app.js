require('dotenv').config()

const express = require('express')
const path = require('path')
const cors = require("cors")

const app = express()

// CORS
app.use(cors({credentials:true, origin:"http://localhost:3000"}))

// uploados img
app.use("/uploads",express.static(path.join(__dirname,"/uploads")))

// routes
const router = require('./src/routers/router')
app.use(router)

// CONFIG JSON E FORM DATA RESPONSE
app.use(express.json())
app.use(express.urlencoded({extended:false}))


//banco de dados 
const db = require('./src/database/db')
db()

//servidor
const port = process.env.PORT
app.listen(port,()=>{
  console.log('connect server')
})