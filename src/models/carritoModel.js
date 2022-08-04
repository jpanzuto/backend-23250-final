function crearId() {
  return `${Date.now()}`;
}

export function crearCarrito(datos, userName) {
  if (!userName) throw new Error('falta el campo "userName"');
  if (!datos.idProducto) throw new Error('falta el campo "idProducto"');
  if (!datos.cantidad) throw new Error('falta el campo "cantidad"');
  if (!datos.precio) throw new Error('falta el campo "precio"');

  return {
    id: crearId(),
    userName: userName,
    idProducto: datos.idProducto,
    cantidad: datos.precio,
    precio: datos.precio,
  };
}
