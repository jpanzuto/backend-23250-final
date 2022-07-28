import { Router } from "express";
import * as webController from "../controllers/webController.js";
import compression from "compression";
import { auth } from "../middlewares/jwt.js";

const webRouter = Router();
webRouter.use(compression());

webRouter.get("/", auth, webController.homeGet);
webRouter.get("/info", auth, compression(), webController.infoGet);
webRouter.get("/productosaleatorios", webController.productosAleatoriosGet);
webRouter.get("/*", webController.url_invalida);

export default webRouter;
