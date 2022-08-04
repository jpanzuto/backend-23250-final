import { crearCarrito } from "../models/carritoModel.js";
import daoCarritos from "../databases/carritos/daoCarritos.js";

export async function registrarCarrito(datos, userName) {
  const carrito = crearCarrito(datos, userName);
  await daoCarritos.guardar(carrito);
  return carrito;
}
/*
export async function listarCarritoPorUsername() {
  return await daoCarritos.carritosPorUsername();
}

export async function buscarCarritoPorID(IdCarrito) {
  return await daoCarritos.carritosPorID(IdCarrito);
}
*/
