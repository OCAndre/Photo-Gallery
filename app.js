// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const { Sequelize } = require('sequelize')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.SERVER_PORT
const app = express()
Sequelize.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
  () => { console.log('connected to postgresql: ', process.env.DB_URI) }
)

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(methodOverride('_method'))

// ROUTES
app.get('/', (req, res) => {
  res.send('<h1>Welcome to knockoff Yelp</h1>')
})
  
// Login
app.get('/login', (req, res) => {
    res.send()
})

// Restaurants
app.get('/localrestaurants', (req, res) => {
    res.send()
})

//Topten
app.get('/topten', (req, res) => {
    res.send()
})

// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})

// LISTEN
app.listen(SERVER_PORT, () => {
  console.log('Live on port', SERVER_PORT);
})
