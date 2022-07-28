import jwt from "jsonwebtoken";

const PRIVATE_KEY = "clavedesol";

export function generateAuthToken(username) {
  const token = jwt.sign({ username }, PRIVATE_KEY, { expiresIn: "180s" });
  return token;
}

export function auth(req, res, next) {
  const authHeader =
    req.headers["authorization"] || req.headers["Authorization"] || "";
  if (!authHeader) {
    return res.status(401).json({
      error: "se requiere autenticacion para acceder a este recurso",
      detalle: "no se encontró token de autenticación",
    });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      error: "se requiere autenticacion para acceder a este recurso",
      detalle: "formato de token invalido!",
    });
  }

  try {
    const objetoOriginal = jwt.verify(token, PRIVATE_KEY);
    req.user = objetoOriginal;
  } catch (ex) {
    return res.status(403).json({
      error: "token invalido",
      detalle: "nivel de acceso insuficiente para el recurso solicitado",
    });
  }

  next();
}
