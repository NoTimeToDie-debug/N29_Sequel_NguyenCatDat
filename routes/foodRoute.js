const express = require('express');
const { getFood, createFood } = require('../controllers/foodController');
const foodRouter = express.Router();

foodRouter.get("/get-food",getFood);

foodRouter.post("/create-food",createFood);

module.exports = foodRouter;