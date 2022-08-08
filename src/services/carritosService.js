import { crearCarrito } from "../models/carritoModel.js";
import daoCarritos from "../databases/carritos/daoCarritos.js";
import daoProductos from "../databases/productos/daoProductos.js";

export async function registrarCarrito(datos, userName) {
  const carrito = crearCarrito(datos, userName);
  await daoCarritos.guardar(carrito);
  return carrito;
}

export async function validarStock(idProduct, amount) {
  return await daoProductos.cantidadEnStok(idProduct, amount);
}
/*
export async function buscarCarritoPorID(IdCarrito) {
  return await daoCarritos.carritosPorID(IdCarrito);
}
*/
