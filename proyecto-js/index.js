//import {app} from "./src/app"

//app ();

// ------------------------------ Usuario y carrito de compras ---------------------------







// ------------------------------ Usuario y carrito de compras ---------------------------

// ------------ Barra para buscar prendas dentro de la pagina ----------------------------
const buscador = document.querySelector("#buscador")

buscador.onchange = () => {
    console.log(buscador.value);
}

const lupa = document.querySelector(".lupa")

lupa.onclick = () => {
    console.log("Click para buscar");
}


const eliminarProductos = document.querySelector ("#boton1")

boton1.onclick = () => {
    console.log("Eliminar Producto");
}

const agregarCarrito = document.querySelector ("#boton2")

boton2.onclick = () => {
    console.log("Agregar a carrito");
}


// ------------ Barra para buscar prendas dentro de la pagina ----------------------------


// ------------ Botones de controlador de stock ------------------------------------------

let botonSumar = document.querySelectorAll(".botonSumar ");
let botonRestar = document.querySelector("#botonRestar");
let contador = document.querySelector("#contador");

let numeroContador = 0;

contador.innerText = numeroContador;

botonSumar.onclick  = () => {
    numeroContador++;
    contador.innerText = numeroContador;
}

botonRestar.onclick = () =>{
    numeroContador--;
    contador.innerText = numeroContador;
}


// ------------ Botones de controlador de stock ------------------------------------------

// ------------------ Formulario para añadir prendas--------------------------------------

let novedades = document.querySelector("#novedades")
let nombrePrenda = document.querySelector("#nombrePrenda")
let secInput = document.querySelector("#secInput")
let listaProductos = document.querySelector("#listaProductos")

nombrePrenda.onchange = () => {
    console.log(nombrePrenda.value);
}

secInput.onchange = () => {
    console.log(secInput.value);
}

let prendas = [];

const agregarRopa = () => {
    listaProductos.innerText = "";
    prendas.forEach (prenda => {
        let div = document.createElement ("div");
        div.className = "contenedor-2"
        div.innerText = `${prenda.nombrePrenda} ${prenda.secInput}`;
        listaProductos.appendChild(div);
    })
}


novedades.onsubmit = (event) => {
    event.preventDefault()
    console.log("Prenda agregada");
    if (nombrePrenda.value === "" || secInput.value === "") {
       return alert("Complete todos los campos") 
    }

    let prenda = {
        Prenda : nombrePrenda.value,
        Seccion : secInput.value
    }
    console.log(prenda);
    prendas.push (prendas);
    console.log(prendas);
    novedades.reset();
    agregarRopa();
    
}

// ------------------ Formulario para añadir prendas--------------------------------------



// Traer informacion

let products = [];

fetch ("/data/productos.json")
    .then (resp => resp.json)
    .then (data => {
        products = [...data];
        console.log(products);
    })



