import { leerAnunciosDB, guardarAnunciosDB } from "./localStorage.js";

const anuncios = [];

// leo/escribo en localstorage
if (!leerAnunciosDB(anuncios)) {
    if (guardarAnunciosDB(anuncios)) {
        console.log("anuncios guardados en localstorage");
    }
} else {
    guardarAnunciosDB(anuncios);
}

// ---------------- Crear Anuncios Cards ---------------- //

function crearTarjeta(titulo, descripcion, animal, precio, raza, fecha_nacimiento, vacuna ) {
    const newCard = document.createElement("div");
    
    const _titulo = document.createElement("h3");
    _titulo.textContent = "Titulo: " + titulo;
    
    const _descripcion = document.createElement("p");
    _descripcion.textContent = "Descripcion: " + descripcion;
    
    const _precio = document.createElement("p");
    _precio.textContent = "Precio: $" + precio;

    const _animal = document.createElement("p");
    _animal.textContent = "Animal: " + animal;
    
    const _imgRaza = document.createElement("img");
    _imgRaza.setAttribute("src", "./img/raza.png");
    _imgRaza.setAttribute("height", "25px");
    
    const _raza = document.createElement("p");
    _raza.textContent = "Raza: " + raza;
    
    const _imgNacimiento = document.createElement("img");
    _imgNacimiento.setAttribute("src", "./img/fecha_nacimiento.png");
    _imgNacimiento.setAttribute("height", "25px");

    const _fecha_nacimiento = document.createElement("p");
    _fecha_nacimiento.textContent = "Fecha Nacimiento: " + fecha_nacimiento;

    const _imgVacuna = document.createElement("img");
    _imgVacuna.setAttribute("src", "./img/vacuna.png");
    _imgVacuna.setAttribute("height", "25px");

    const _vacuna = document.createElement("p");
    _vacuna.textContent = "Vacuna: " + vacuna;
    
    newCard.appendChild(_titulo);
    newCard.appendChild(_descripcion);
    newCard.appendChild(_animal);
    newCard.appendChild(_precio);
    newCard.appendChild(_imgRaza);
    newCard.appendChild(_raza);
    newCard.appendChild(_imgNacimiento);
    newCard.appendChild(_fecha_nacimiento);
    newCard.appendChild(_imgVacuna);
    newCard.appendChild(_vacuna);
    newCard.classList.add("card");    

    return newCard;
}

const $cards = document.querySelector("#cards");

anuncios.forEach((elemento) => {
    
    const $nuevaTarjeta = crearTarjeta(
        elemento.titulo,
        elemento.descripcion,
        elemento.animal,
        elemento.precio,
        elemento.raza,
        elemento.fecha_nacimiento,
        elemento.vacuna);
    $cards.append($nuevaTarjeta);

});