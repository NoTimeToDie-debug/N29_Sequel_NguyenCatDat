const {Op, where} = require('sequelize');
const initModels = require('../models/init-models');
const sequelize = require('../models/index');
const food = require('../models/food');
const user = require('../models/user');
const like_res = require('../models/like_res');
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

const updateFood = async (req , res) => {
    try {
        let { food_id } = req.params;
        const {food_name , image , price , desc , type_id} = req.body;
        let modelUpdate = {
            food_name,
            image,            
            price,
            desc,
            type_id
        }
        await model.food.update(modelUpdate, {
            where: {
                food_id
            }
        });
        let data = await model.food.findAll();
        res.status(200).send(JSON.stringify(data,null,4));
    } catch (error) {
        res.status(500).send('lỗi BE')
    }
}

//lấy danh sách like theo nhà hàng và user
const getLikeResUser = async (req, res) => {
    try {
        let data = await model.like_res.findAll({
            include: ["re","user"]

        });
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send("lỗi BE");
    }
    
}

//like nhà hàng
const createLikeRes = async (req, res) => {
    try {
        const {user_id , res_id , date_like } = req.body;
        let newLike = {
            user_id,	
            res_id,	
            date_like
        }

        let data = await model.like_res.create(newLike);
        res.status(200).send(data);
        
    } catch (error) {
        console.log(error);
    }
}

//unlike nhà hàng
const removeLikeRes = async (req, res) => {
    try {
        let {user_id,res_id} = req.params;
        let existData = model.like_res.findAll({
            where:{
                user_id,
                res_id
            }
        })
        if (existData) {
            let data = await model.like_res.destroy({
                where:{
                    user_id,
                    res_id
                }
            });
            res.status(200).send(data);
        } else {
            res.send("dữ liệu ko tồn tại")
        }
    } catch (error) {
        console.log(error);
    }
}


const countLikeRes = async (req, res) => {
    
        let data = await model.restaurant.findAndCountAll({
            // where: {
            //     res_name: {
            //         [Op.like]: '%kfc%'
            //     }
            // },
            include: ["like_res"]
        })
        res.status(200).send(data);
}

module.exports = {
    getFood,
    createFood,
    updateFood,
    getLikeResUser,
    countLikeRes,
    createLikeRes,
    removeLikeRes
}