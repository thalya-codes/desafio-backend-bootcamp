import express from 'express'
import cors from 'cors'
import  sequelize from"./config/database.config.js"
import Categories from './models/Categories.model.js'

let app = express()
app.use(express.json())

app.use((req, res, next) => {
    //console.log("Acessou o Middleware!");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"); 
  
    app.use(cors());
    next();
});

sequelize.sync().then(() => console.log("db is ready"));

app.get("/",(req,res) =>  res.send("Tudo okay"));


app.get('/categories', async  (req, res)  => {
    const categories = await Categories.findAll();
    return res.json(categories);
})
    

app.post('/categories', async  (req, res)  => {
    await Categories.create(req.body);
    return res.json({"message":"categories is inserted"});
})

const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log("server is running")
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