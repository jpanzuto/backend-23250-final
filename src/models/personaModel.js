import { buscarPersonaPorUsuername } from "../services/personasService.js";

function crearId() {
  return `${Date.now()}`;
}

export async function crearPersona(username, password) {
  if (await buscarPersonaPorUsuername(username.toLowerCase()))
    throw new Error("Error en el usuario");
  if (!username) throw new Error("falta el campo usuario");
  if (!password) throw new Error("falta el campo contraseña");

  return {
    id: crearId(),
    username: username.toLowerCase(),
    password: password,
  };
}

/*
-id
-name (nombre)
-lastname (apellido)
-email (usuario para login)
-password (contraseña para login)
-phone (número telefónico)
-url de la foto de perfil
(guardada con multer, servida con express.static)
 */
