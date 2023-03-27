const express = require('express');
const foodRoute = require('./foodRoute');
const rootRouter = express.Router();


rootRouter.use("/food",foodRoute)

module.exports = rootRouter;