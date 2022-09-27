const restaurants = require('express').Router()
const db = require('../models')
const { Restaurant } = db
const { Op } = require('sequelize')

// FIND ALL
restaurants.get('/', async (req, res) => {
    try {
        const foundRestaurants = await Restaurant.findAll()
        res.status(200).json(foundRestaurants)
    } catch (error) {
        res.status(500).json(error)
    }
})

