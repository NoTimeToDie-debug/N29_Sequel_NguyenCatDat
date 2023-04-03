const express = require('express');
const { getFood, createFood, updateFood, getLikeResUser, countLikeRes, createLikeRes, removeLikeRes } = require('../controllers/foodController');
const foodRouter = express.Router();

foodRouter.get("/get-food",getFood);
foodRouter.get("/get-like-res-user",getLikeResUser);
foodRouter.get("/count-like-res",countLikeRes);

foodRouter.post("/create-food",createFood);
foodRouter.post("/create-like-res",createLikeRes);

foodRouter.put("/update-food/:food_id",updateFood);
foodRouter.put("/remove-like-res/:user_id/:res_id",removeLikeRes);

module.exports = foodRouter;