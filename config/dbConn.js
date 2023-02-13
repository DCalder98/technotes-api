const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://user:password123456@cluster0.jxlukg7.mongodb.net/?retryWrites=true&w=majority')
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB
