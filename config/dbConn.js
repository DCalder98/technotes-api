const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://SuperUser:password123123@cluster0.jxlukg7.mongodb.net/test?retryWrites=true&w=majority')
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB
