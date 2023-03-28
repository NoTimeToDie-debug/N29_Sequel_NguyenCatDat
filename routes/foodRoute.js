const express = require('express');
const { getFood, createFood, updateFood } = require('../controllers/foodController');
const foodRouter = express.Router();

foodRouter.get("/get-food",getFood);

foodRouter.post("/create-food",createFood);

foodRouter.put("/update-food/:food_id",updateFood);

module.exports = foodRouter;