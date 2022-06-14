import { Router } from "express";
import {
    create,
    getAll,
    getOne,
    update,
    deleteCategory
} from"../controllers/Categories.controller.js"

const categoriesRoutes = Router();

categoriesRoutes.post("/categories",create);

categoriesRoutes.get("/categories", getAll);

categoriesRoutes.get("/categories/:id", getOne);

categoriesRoutes.put("/categories/:id", update);

categoriesRoutes.delete("/categories/:id", deleteCategory);

export default categoriesRoutes;