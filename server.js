// DEPENDENCIES
const express = require('express')
// DEPENDENCIES
const mongoose = require('mongoose')
const methodOverride = require('method-override')


// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()



//middleWare
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
// DEPENDENCIES
// MIDDLEWARE
app.use(methodOverride('_method'))

// MONGOOSE CONNECT
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(res => console.log("connected at:", process.env.MONGO_URI))
  .catch(err => console.log(err))
 


// NEW


// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads!')
})

const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})


  