const express    = require('express')
const mongoose   = require('mongoose')
const cors       = require('cors')
const requireDir = require('require-dir')
const app        = express()

app.use(express.json()) // permite receber a app receber json 
app.use(cors())
mongoose.connect()
requireDir('./src/models')

// o use recebe todo tipo de verbo http
app.use('/api', require('./src/routes'))

app.listen(3000, () => {
	console.log('Server is running')
})
