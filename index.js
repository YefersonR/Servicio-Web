const express = require("express")

const app = express()

app.get('/',(req,res)=>{
        res.send("hola mundo")
})
app.post('/')
app.listen(3000,()=>{
    console.log("Ya se creo el server")
})

