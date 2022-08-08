export function crearCarrito(datos, idUser) {
  if (!idUser) throw new Error('falta el campo "idUser"');
  if (!datos.idProduct) throw new Error('falta el campo "idProducto"');
  if (!datos.amount) throw new Error('falta el campo "cantidad"');

  return {
    id: idUser,
    idProduct: datos.idProduct,
    amount: datos.amount,
  };
}
