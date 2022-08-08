import { registrarCarrito, validarStock } from "../services/carritosService.js";

export async function postCarrito(req, res, next) {
  const idUser = new Date();
  //idUser = idUserPorToken(token)
  try {
    req.body.amount = await validarStock(req.body.idProduct, req.body.amount);
    const registrado = await registrarCarrito(req.body, idUser);
    res.status(201).json(registrado);
  } catch (error) {
    next(error);
  }
}
/*
export async function getCarritosPorID(req, res, next) {
  try {
    let IdCarritoBuscado = await buscarCarritoPorID(
      req.params.IdCarrito.toString()
    );
    IdCarritoBuscado != null
      ? res.status(200).json(IdCarritoBuscado)
      : res.status(400).json({ error: "ID no encontrado" });
  } catch (error) {
    next(error);
  }
  }
*/
