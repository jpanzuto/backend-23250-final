import { buscarPersonaPorUsuername } from "../services/personasService.js";

function crearId() {
  return `${Date.now()}`;
}
function isValidEmail(username) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(username);
}

export async function crearPersona(
  username,
  password,
  firstname,
  lastname,
  phone,
  imageprofile
) {
  if (await buscarPersonaPorUsuername(username.toLowerCase()))
    throw new Error("Error en el usuario");
  if (!username) throw new Error("falta el campo usuario");
  if (!isValidEmail(username)) throw new Error("Error en el Username");
  if (!password) throw new Error("falta el campo contraseña");
  if (!firstname) throw new Error("falta el campo firstname");
  if (!lastname) throw new Error("falta el campo lastname");
  if (!phone) throw new Error("falta el campo phone");
  if (!imageprofile) imageprofile = "S/D";

  return {
    id: crearId(),
    firstname: firstname.toLowerCase(),
    lastname: lastname.toLowerCase(),
    username: username.toLowerCase(), //pasar a email
    password: password,
    phone: phone,
    imageprofile: imageprofile, // (guardada con multer, servida con express.static)
  };
}
