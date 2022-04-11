const express = require("express")
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.get('/',(req,res)=>{
    const usuario = {nombre: "Yeferson", apellido:"Rubio"}
    res.json(usuario)
})
app.post('/adduser',(req,res)=>{
    const usuario = req.body
    usuario.nombre = usuario.nombre
    usuario.telefono = "809-223-5612"
    res.json(usuario)
})
app.listen(3000,()=>{
    console.log("Ya se creo el server")
})

