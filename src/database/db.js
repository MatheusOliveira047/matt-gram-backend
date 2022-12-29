const mongoose = require('mongoose')

const connectToDatabase = async ()=>{
    mongoose.set("strictQuery", true);
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonode.lbu7zd7.mongodb.net/matt-gram?retryWrites=true&w=majority`,(error)=>{
        if(error){
            return console.log('ocorreu um error ao se conectar com o banco de dados', error)
        }

        return console.log('connect to database')
    })
}

module.exports = connectToDatabase