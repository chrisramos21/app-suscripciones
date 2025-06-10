import Swal from "sweetalert2";

export function alertaRedireccion(redireccion, mensaje, ruta) {
  let timerInterval;
  Swal.fire({
    title: mensaje,
    html: "Será redireccionado en <b></b> milisegundos.",
    timer: 1500,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    // Solo redirige si el alert terminó normalmente (no fue cancelado)
    if (result.dismiss === Swal.DismissReason.timer) {
      redireccion(ruta);
    }
  });
}

export function alertaGeneral(titulo, mensaje, icono) {
  Swal.fire({
    icon: icono,
    title: titulo,
    text: mensaje,
  });
}

export function alertaConfirmar(id, apiSuscripciones, getSubs) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(apiSuscripciones + "/" + id,  {
      method: "DELETE"
    }).then(() => {
      getSubs()
    })
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  });
}
export function generarToken() {
  let token =
    "token_" +
    Math.random().toString(36).substring(2) +
    "-" +
    Math.random().toString(36).substring(2);
  return token;
}
