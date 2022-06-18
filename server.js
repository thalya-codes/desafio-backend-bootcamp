import express from "express"
import  sequelize from"./config/database.config.js"
import cors from "cors"
import categoriesRoutes from "./routes/categories.routes.js";
import productsRoutes from "./routes/products.routes.js"

sequelize.sync().then(() => console.log("db is ready"));

const app = express();

app.use(express.json());
app.use(categoriesRoutes);
app.use(productsRoutes);
app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));



const port = process.env.PORT || 3000;

app.listen(port, () => console.log("server is running"));