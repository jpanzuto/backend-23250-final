import { v4 as generateId } from "uuid";

export function crearProducto(datos, imageProduct) {
  if (!datos.name) throw new Error('falta el campo "name"');
  if (!datos.description) datos.description = "S/D";
  if (!datos.price) throw new Error('falta el campo "price"');
  if (!datos.stock) throw new Error('falta el campo "stock"');

  return {
    id: generateId(),
    name: datos.name,
    description: datos.description,
    price: Number(datos.price),
    stock: Number(datos.stock),
    image: imageProduct,
  };
}
