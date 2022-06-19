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

app.use(cors({
    origin: '*',
    methods: ['GET','HEAD','PUT','PATCH','POST','DELETE']
}))

app.post("/categories-test", (re,res) => {
    return res.json(re.body)
});


const port = process.env.PORT || 3000;

app.listen(port, () => console.log("server is running"));