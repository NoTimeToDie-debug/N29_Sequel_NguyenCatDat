// yarn init => tạo file package.json

// yarn add express

// setup server bằng express
const express = require('express');
const app = express();
app.use(express.json()); // cho phép BE req.body đọc được mã json

// yarn add cors
const cors = require('cors');
app.use(cors()); // cho phép tất cả FE truy cập vào API của BE

// tạo server localhost với port 8080 => localhost:8080
app.listen(8080);

// yarn add nodemon => khi update (save code) tự động restart server

// tạo API => Method, URL (Path)

const rootRouter = require('./routes/rootRoute');
app.use("/api",rootRouter)