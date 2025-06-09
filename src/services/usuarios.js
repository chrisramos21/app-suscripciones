
//1. URL del servicio que quiero consumir
const usuarioAPI = "https://api-prueba-uno.onrender.com/usuarios";

export async function obtenerUsuarios() {
  const respustaAPI = await fetch(usuarioAPI);
  return respustaAPI.json();
}

export async function crearUsuario(usuario) {
  const respustaAPI = await fetch(usuarioAPI, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  });
  return respustaAPI.json();
}