const express    = require('express')
const mongoose   = require('mongoose')
const cors       = require('cors')
const requireDir = require('require-dir')
const app        = express()

app.use(express.json()) // permite receber a app receber json
app.use(cors())
mongoose.connect('mongodb+srv://Shiroe:4638554885@cluster0.bkdyf.mongodb.net/nodeApi?retryWrites=true&w=majority',{
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
})
requireDir('./src/models')

// o use recebe todo tipo de verbo http
app.use('/api', require('./routes'))

app.listen(3000, () => {
	console.log('Server is running')
})
