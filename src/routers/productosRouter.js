import { Router } from "express";
import * as productosController from "../controllers/productosController.js";
import uploadFile from "../middlewares/uploads.js";

const productosRouter = Router();

productosRouter.post("/", uploadFile, productosController.postProductos);
productosRouter.get("/", productosController.getProductos);
productosRouter.get("/:IdProducto", productosController.getProductosPorID);

export default productosRouter;
