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

// FIND A SPECIFIC restaurant
restaurants.get('/:id', async (req, res) => {
    try {
        const foundRestaurant = await Restaurant.findOne({
            where: { restaurant_id: req.params.id }
        })
        res.status(200).json(foundRestaurant)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A restaurant (Do we need this?)
restaurants.post('/', async (req, res) => {
    try {
        const newRestaurant = await Restaurant.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new restaurant',
            data: newRestaurant
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// UPDATE A restaurant (Do we need this?)
restaurants.put('/:id', async (req, res) => {
    try {
        const updatedRestaurant = await Restaurant.update(req.body, {
            where: {
                restaurant_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedRestaurant} restaurant(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// DELETE A restaurant
restaurants.delete('/:id', async (req, res) => {
    try {
        const deletedRestaurant = await Restaurant.destroy({
            where: {
                restaurant_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedRestaurant} restaurant(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})



// EXPORT
module.exports = restaurants