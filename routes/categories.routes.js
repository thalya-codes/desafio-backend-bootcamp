import { Router } from "express";
import {
    create,
    getAll,
    getOne,
    update,
    deleteCategory
} from"../controllers/Categories.controller.js"
import cors from "cors";

const categoriesRoutes = Router();

categoriesRoutes.get("/",cors(),(req,res) =>  res.send("Tudo okay"));

categoriesRoutes.post("/categories",cors(),create);

categoriesRoutes.get("/categories",cors(),getAll);

categoriesRoutes.get("/categories/:id",cors(),getOne);

categoriesRoutes.put("/categories/:id",cors(),update);

categoriesRoutes.delete("/categories/:id",cors(),deleteCategory);

export default categoriesRoutes;