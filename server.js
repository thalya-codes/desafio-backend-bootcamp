import express from 'express'
import cors from 'cors'
import  sequelize from"./config/database.config.js"
import Categories from './models/Categories.model'
import { json } from 'sequelize/types'

var app = express()
sequelize.sync().then(() => console.log("db is ready"));

app.use(express.json())
app.use((req, res, next) => {
    //console.log("Acessou o Middleware!");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.get('/categories', async  (req, res, next)  => {
    await Categories.create(req.body);
    return res.json({"message":"categories is inserted"});
})
    

app.post('/categories', async  (req, res, next)  => {
    if(req.body.category_id) {
        await Products.create(req.body);
        return res.json({"message":"products is inserted"});
        
    } else {
        return res.json({"message": "o campo category_id é obrigatório"});
    }

})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

/*

import express from "express"
import  sequelize from"./config/database.config.js"
import cors from "cors"
import categoriesRoutes from "./routes/categories.routes.js";
import productsRoutes from "./routes/products.routes.js"
import { create, getAll } from"./controllers/Categories.controller.js"

sequelize.sync().then(() => console.log("db is ready"));

const app = express();

app.use(express.json());
app.use(categoriesRoutes);
app.use(productsRoutes);

app.use((_, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    app.use(cors);
    next();

})

app.post("/categories-test",create);
app.get("/categories-test",getAll);


const port = process.env.PORT || 3000;

app.listen(port, () => console.log("server is running"));
*/