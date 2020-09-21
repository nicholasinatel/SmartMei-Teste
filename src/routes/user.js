
const log = require('debug')('api:routes:client')
const logError = log.extend('error')

const path = require('path') 
const express = require('express')
const router = express.Router()

router.get('/', async function (req, res) {
    
    res.status(200).send(JSON.stringify("Hello World!"))
})

module.exports = router