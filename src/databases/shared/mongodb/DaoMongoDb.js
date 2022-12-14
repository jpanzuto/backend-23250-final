import Dao from "../Dao.js";
import bcrypt from "bcrypt-nodejs";
export default class DaoMongoDb extends Dao {
  constructor(db, nombre) {
    super(db, nombre);
  }

  async guardar(document) {
    await this.collection.insertOne(document);
  }

  // FUNCIONES PARA PERSONAS Y AUTH
  async personasListarTodas() {
    return this.collection.find().project({ _id: 0 }).toArray();
  }
  async personasPorID(ID) {
    return this.collection.findOne({ id: ID });
  }
  async personasPorUsername(USERNAME) {
    return this.collection.findOne({ username: USERNAME.toLowerCase() });
  }
  async autenticarLogueo(username, password) {
    let usuario;
    try {
      usuario = await this.collection.findOne({
        username: username.toLowerCase(),
      });
    } catch (error) {
      throw new Error("error de autenticacion 1");
    }
    if (!bcrypt.compareSync(password, usuario.password)) {
      throw new Error("error de autenticacion 2");
    }
    return usuario;
  }
  // FUNCIONES PARA PRODUCTOS
  async productosListarTodas() {
    return this.collection.find().project({ _id: 0 }).toArray();
  }
  async productosPorID(ID) {
    return this.collection.findOne({ id: ID });
  }

  // FUNCIONES PARA CARRITO
  async cantidadEnStok(idProduct, amount) {
    let stock;
    try {
      stock = await this.collection.findOne({ id: idProduct });
    } catch (error) {
      throw new Error("error en stock");
    }
    if (stock.stock < amount) {
      amount = stock.stock;
    }
    return amount;
  }
}
