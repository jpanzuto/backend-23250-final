import { generateAuthToken } from "../middlewares/jwt.js";
import bcrypt from "bcrypt-nodejs";
import { registrarPersona } from "../services/personasService.js";
import { autenticar } from "../services/personasService.js";
import logger from "../logger.js";

export async function postSignup(req, res) {
  try {
    console.log(req.body);
    const user = await registrarPersona(
      req.body.username,
      bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null),
      req.body.firstname,
      req.body.lastname,
      req.body.phone,
      req.body.imageprofile
    );
    const access_token = generateAuthToken(req.body.username);
    res.json({ access_token });
  } catch (error) {
    logger.warn("error en SignUp" + error);
    res.status(401).json({
      error: "error de registracion",
      detalle: "error de registracion",
    });
  }
}

export async function getSignup(req, res, next) {
  try {
    res.status(200).render("signup");
  } catch (error) {
    next(error);
  }
}

export async function postLogin(req, res) {
  try {
    await autenticar(req.body.username, req.body.password);
    const access_token = generateAuthToken(req.body.username);
    const username = req.body.username;
    res.json({ username, access_token });
  } catch (error) {
    logger.warn("error de autenticación en Login");
    res.status(401).json({
      error: "error de autenticación",
      detalle: "error de autenticación",
    });
  }
}

export function getLogin(req, res, next) {
  try {
    res.status(200).render("login");
  } catch (error) {
    next(error);
  }
}
