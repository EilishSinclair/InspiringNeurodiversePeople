const path = require('path')
const cors = require('cors')
const express = require('express')

const server = express()

const DFRoutes = require('./routes/DFoundation')
const DFYouthRoutes = require('./routes/DFYouth')

server.use(express.json())
server.use(cors({ origin: 'http://localhost:8080' }))
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/DFoundation', DFRoutes)
server.use('/api/DFYouth', DFYouthRoutes)

module.exports = server
