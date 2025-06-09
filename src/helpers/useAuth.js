import { useState, useEffect } from "react";

const apiUsuario = "https://api-prueba-uno.onrender.com/usuarios";

export function useAuth() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch(apiUsuario)
      .then((res) => res.json())
      .then((data) => setUsuarios(data));
  }, []);

  const login = (usuario, contrasena) => {
    const encontrado = usuarios.find(
      (u) => u.usuario === usuario && u.contrasena === contrasena
    );
    return encontrado || null;
  };

  const register = async (nuevoUsuario) => {
    const existe = usuarios.some(
      (u) => u.usuario === nuevoUsuario.usuario || u.correo === nuevoUsuario.correo
    );
    if (existe) {
      return { error: true, mensaje: "Ya existe el usuario" };
    }
    await fetch(apiUsuario, {
      method: "POST",
      body: JSON.stringify(nuevoUsuario),
      headers: { "Content-Type": "application/json" },
    });
    return { error: false, mensaje: "Registrado exitosamente" };
  };

  return { login, register };
}