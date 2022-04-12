const contactocontroller = require('../Controller/contacto')
const express = require('express')

const router = express.Router()

router.get("/contactos",contactocontroller.getContactos)
router.post("/contactos",contactocontroller.postContacto)

module.exports = router