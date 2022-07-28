function crearId() {
  return `${Date.now()}`;
}

export function crearProducto(datos) {
  if (!datos.nombre) throw new Error('falta el campo "nombre"');
  if (!datos.descripcion) datos.descripcion = "S/D";
  if (!datos.precio) throw new Error('falta el campo "precio"');
  if (!datos.stock) throw new Error('falta el campo "stock"');
  if (!datos.image) datos.image = "S/D";

  return {
    id: crearId(),
    nombre: datos.nombre,
    descripcion: datos.descripcion,
    precio: datos.precio,
    stock: datos.stock,
    image: datos.image,
  };
}
