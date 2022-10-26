// Para obtener una variable del localstorage usamos:
// let variable = localStorage.getItem("nombreVariable");
// retorna null si no existe o el valor como string

// Para agregar una variable en el localStorage usamos:
// localStorage.setItem("nombreVariable", "valor"); // valor es string

// Para eliminar una variable del localStorage usamos:
// localStorage.removeItem("nombreVariable");

// Para limpiar todo el localStorage usamos:
// localStorage.clear();

// const anuncios = [];
// const $formulario = document.forms[0];

export function leerAnunciosDB(anuncios) {
  if (localStorage.getItem("anuncios")) {    
    JSON.parse(localStorage.getItem("anuncios")).forEach((element) => {
      anuncios.push(element);
    });
    return true;
  } else {
    return false;
  }
}

export function guardarAnunciosDB( anuncios ){  
  localStorage.setItem("anuncios", JSON.stringify(anuncios));
  return true;
}

// export function guardarAnuncioDB(anuncio, anuncios) {
//   //anuncios.push(anuncio);
//   localStorage.setItem("anuncios", JSON.stringify(anuncios));
// }



// if (localStorage.getItem("anuncios")) {
//   JSON.parse(localStorage.getItem("anuncios")).forEach((element) => {
//     anuncios.push(element);
//   });
// } else {
//   localStorage.setItem("anuncios", JSON.stringify(anuncios));
// }


// window.addEventListener("load", () => {

//   $formulario.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log("submit");
//     const { titulo, transaccion, descripcion, precio, banios, autos, dormitorios } = e.target;
//     const nuevoAnuncio = new Anuncio(setId(data), titulo.value, transaccion.value, descripcion.value, precio.value, banios.value, autos.value, dormitorios.value);
//     if (nuevoAnuncio) {
//       anuncios.push(nuevoAnuncio);
//       localStorage.setItem("anuncios", JSON.stringify(anuncios));
//     }
//   });
// });

// window.addEventListener("load", () => {
//   document.getElementById("btnGuardar").addEventListener("click", () => {
//     let anuncio = document.getElementsByName("anuncio")[0].value;

//     if (anuncio) {
//       anuncios.push(anuncio);

//       localStorage.setItem("anuncios",JSON.stringify(anuncios));
//     }
//   });
// });