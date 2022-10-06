const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    }
})

module.exports=mongoose.model('Menu',menuSchema)