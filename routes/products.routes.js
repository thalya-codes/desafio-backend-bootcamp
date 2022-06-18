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
import { corsOptions } from "./categories.routes.js";

const productsRoutes = Router();

productsRoutes.post("/products",cors(corsOptions),uploads.single("image"),create);
0
productsRoutes.get("/products",cors(corsOptions),getAll);

productsRoutes.get("/products/:id",cors(corsOptions),getOne);

productsRoutes.put("/products/:id",cors(corsOptions),update);

productsRoutes.delete("/products/:id",cors(corsOptions),deleteProduct);

export default productsRoutes;