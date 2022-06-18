import { Router } from "express";
import {
    create,
    getAll,
    getOne,
    update,
    deleteProduct
} from"../controllers/Products.controller.js"
import uploads from "../config/multer.config.js";


const productsRoutes = Router();

productsRoutes.post("/products",uploads.single("image"),create);
0
productsRoutes.get("/products",getAll);

productsRoutes.get("/products/:id",getOne);

productsRoutes.put("/products/:id",update);

productsRoutes.delete("/products/:id", deleteProduct) 

export default productsRoutes;