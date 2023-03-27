const {Op} = require('sequelize');
const initModels = require('../models/init-models');
const sequelize = require('../models/index');
const food = require('../models/food');
const model = initModels(sequelize);


const getFood = async (req,res) => {
    try {
        let data = await model.food.findAll({
            where:{
                food_name:{
                    [Op.like]: '%a%'
                }
            }
        });
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send("lỗi BE");
    }
}

const createFood = async (req,res) => {
    try {
        const {food_name , image , price , desc , type_id} = req.body;
        let newModel = {
            food_name,
            image,
            price,
            desc,
            type_id
        }
        let data = await model.food.create(newModel);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send("lỗi BE");
    }
}

module.exports = {
    getFood,
    createFood
}