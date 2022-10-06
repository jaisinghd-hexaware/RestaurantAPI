const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://jaidhande3:h71ljYdJs7XRDFtA@restaurant.0jem6fw.mongodb.net/?retryWrites=true&w=majority",(req, res) => {
    console.log('Database Connected')
})

const menuRouter=require('./routes/menu')
app.use('/menu', menuRouter)

const menuRouter1=require('./routes/home')
app.use('/home', menuRouter1)

app.listen(9000, () => {
    console.log('Server started on 9000')
})