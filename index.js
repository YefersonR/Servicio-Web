const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Contacto = require('./Api/contacto')
const app = express()


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use('/',Contacto)

mongoose.connect(
    "mongodb://localhost/27017",
    {useNewUrlParser: true},
    (err,res)=>{
        err && console.log("Error")
        app.listen(3001,()=>{
            console.log("Server esta corriendo en el puerto ",3001)
        })
    }
)

