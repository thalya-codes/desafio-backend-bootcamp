import { Router } from "express";
import {
    create,
    getAll,
    getOne,
    update,
    deleteCategory
} from"../controllers/Categories.controller.js"

import cors from "cors";

export let corsOptions = {
    origin: "https://bootcamp-code-like-a-girl.herokuapp.com/",
    optionsSuccessStatus: 200
};
   


const categoriesRoutes = Router();

categoriesRoutes.get("/",cors(corsOptions),(req,res) =>  res.send("Tudo okay"));

categoriesRoutes.post("/categories",cors(corsOptions),create);

categoriesRoutes.get("/categories",cors(corsOptions), getAll);

categoriesRoutes.get("/categories/:id",cors(corsOptions), getOne);

categoriesRoutes.put("/categories/:id",cors(corsOptions), update);

categoriesRoutes.delete("/categories/:id",cors(corsOptions),deleteCategory);

export default categoriesRoutes;