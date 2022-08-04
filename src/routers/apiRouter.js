import { Router, json } from "express";
import personasRouter from "./personasRouter.js";
import productosRouter from "./productosRouter.js";
import carritosRouter from "./carritosRouter.js";
import authRouter from "./authRouter.js";

const apiRouter = Router();

apiRouter.use(json());

apiRouter.use("/personas", personasRouter);
apiRouter.use("/productos", productosRouter);
apiRouter.use("/carritos", carritosRouter);
apiRouter.use("/auth", authRouter);

export default apiRouter;
