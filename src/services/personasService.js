import { crearPersona } from "../models/personaModel.js";
import daoPersonas from "../databases/personas/daoPersonas.js";

export async function registrarPersona(
  username,
  password,
  name,
  lastname,
  phone,
  url
) {
  const persona = await crearPersona(
    username,
    password,
    name,
    lastname,
    phone,
    url
  );
  await daoPersonas.guardar(persona);
  return persona;
}

export async function listarPersonas() {
  return await daoPersonas.personasListarTodas();
}

export async function buscarPersonaPorId(IdPersona) {
  return await daoPersonas.personasPorID(IdPersona);
}
export async function autenticar(username, password) {
  return await daoPersonas.autenticarLogueo(username, password);
}
export async function buscarPersonaPorUsuername(UsernamePersona) {
  return await daoPersonas.personasPorUsername(UsernamePersona);
}
