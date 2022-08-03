import { crearProducto } from "../models/productoModel.js";
import daoProductos from "../databases/productos/daoProductos.js";

export async function registrarProducto(datos, imageProduct) {
  const producto = crearProducto(datos, imageProduct);
  await daoProductos.guardar(producto);
  return producto;
}

export async function listarProductos() {
  return await daoProductos.productosListarTodas();
}

export async function buscarProductoPorID(IdProducto) {
  return await daoProductos.productosPorID(IdProducto);
}
