const mongoose = require('mongoose')

const connectToDatabase = async ()=>{
    
    try {
        mongoose.set("strictQuery", true);
        const db = await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonode.lbu7zd7.mongodb.net/matt-gram?retryWrites=true&w=majority`)
        console.log('connect to database')

        return db 
    } catch (error) {
        console.log(error)
    }
}

connectToDatabase()

module.exports = connectToDatabase