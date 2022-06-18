import { Router } from "express";
import {
    create,
    getAll,
    getOne,
    update,
    deleteProduct
} from"../controllers/Products.controller.js"
import uploads from "../config/multer.config.js";
import cors from "cors";


const productsRoutes = Router();

productsRoutes.post("/products",cors(),uploads.single("image"),create);
0
productsRoutes.get("/products",cors(),getAll);

productsRoutes.get("/products/:id",cors(),getOne);

productsRoutes.put("/products/:id",cors(),update);

productsRoutes.delete("/products/:id",cors(),deleteProduct) 

export default productsRoutes;