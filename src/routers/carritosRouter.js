import { Router } from "express";
import * as carritosController from "../controllers/carritosController.js";

const carritosRouter = Router();

carritosRouter.post("/", carritosController.postCarrito);

export default carritosRouter;
