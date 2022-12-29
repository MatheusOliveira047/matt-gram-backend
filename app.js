const express = require('express')
const path = require('path')
const cors = require("cors")

const app = express()

require('dotenv').config()

//banco de dados 
const db = require('./src/database/db')
db()

// CONFIG JSON E FORM DATA RESPONSE
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.listen(process.env.PORT)