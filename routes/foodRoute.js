const express = require('express');
const { getFood, createFood, updateFood, getLikeResUser, countLikeRes, createLikeRes, removeLikeRes, createRateRes, getRateResUser, userOrder } = require('../controllers/foodController');
const foodRouter = express.Router();

foodRouter.get("/get-food",getFood);
foodRouter.get("/get-like-res-user",getLikeResUser);
foodRouter.get("/count-like-res",countLikeRes);
foodRouter.get("/get-rate-res-user",getRateResUser);

foodRouter.post("/create-food",createFood);
foodRouter.post("/create-like-res",createLikeRes);
foodRouter.post("/create-rate-res",createRateRes);
foodRouter.post("/create-order",userOrder);

foodRouter.put("/update-food/:food_id",updateFood);
foodRouter.put("/remove-like-res/:user_id/:res_id",removeLikeRes);

module.exports = foodRouter;