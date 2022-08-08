import { buscarPersonaPorUsuername } from "../services/personasService.js";
import { v4 as generateId } from "uuid";

function isValidEmail(username) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(username);
}

export async function crearPersona(
  username,
  password,
  name,
  lastname,
  phone,
  url
) {
  if (await buscarPersonaPorUsuername(username.toLowerCase()))
    throw new Error("Error en el usuario");
  if (!username) throw new Error("falta el campo usuario");
  if (!isValidEmail(username)) throw new Error("Error en el Username");
  if (!password) throw new Error("falta el campo contraseña");
  if (!name) throw new Error("falta el campo name");
  if (!lastname) throw new Error("falta el campo lastname");
  if (!phone) throw new Error("falta el campo phone");
  if (!url) throw new Error("falta el campo fileName");

  return {
    id: generateId(),
    name: name.toLowerCase(),
    lastname: lastname.toLowerCase(),
    username: username.toLowerCase(),
    password: password,
    phone: phone,
    url: url,
  };
}
