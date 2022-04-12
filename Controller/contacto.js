const mongoose = require("mongoose")
const Contacto = require('../Model/Contacto')



const getContactos = (req,res)=>{
    Contacto.find((err,contacto)=>{
        err && res.send(500).send(err.message)
        res.status(200).json(contacto)
    })
}

const postContacto = (req,res)=>{
    let contacto = new Contacto({
        nombre:req.body.nombre,
        apellido:req.body.apellido,
        telefono:req.body.telefono
    })
    if(!contacto || !contacto.nombre ||!contacto.telefono) 
    {
        return res.status(400).json({
            error: "Debe ingresar un nombre y un telefono"
        })
    }
    contacto.save((err,cont)=>{
        err && res.status(500).send(err.message);
        res.status(200).json(cont)
    })
}

module.exports = {getContactos, postContacto}