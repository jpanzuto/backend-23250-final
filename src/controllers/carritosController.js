import { registrarCarrito } from "../services/carritosService.js";

export async function postCarrito(req, res, next) {
  var userName = "S/D";

  try {
    const registrado = await registrarCarrito(req.body, userName);
    res.status(201).json(registrado);
  } catch (error) {
    next(error);
  }
}
/*
export async function getCarritos(req, res, next) {
  try {
    res.status(200).json(await listarCarritos());
  } catch (error) {
    next(error);
  }
}

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
