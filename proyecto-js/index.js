//import {app} from "./src/app"

//app ();

// ------------ Barra para buscar prendas dentro de la pagina ----------------------------
const buscador = document.querySelector("#buscador")

buscador.onchange = () => {
    console.log(buscador.value);
}

const lupa = document.querySelector(".lupa")

lupa.onclick = () => {
    console.log("Click para buscar");
}

const agregarPrenda = document.querySelector("#boton1")

boton1.onclick = () =>{
   console.log("Agregar producto");
}

const eliminarProductos = document.querySelector ("#boton2")

boton2.onclick = () => {
    console.log("Eliminar Producto");
}

const agregarCarrito = document.querySelector ("#boton3")

boton3.onclick = () => {
    console.log("Agregar a carrito");
}

// ------------------ Formulario para añadir prendas---------------

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
        let li = document.createElement ("li");
        li.innerText = `${prenda.nombre} ${prenda.seccion}`;
        listaProductos.appendChild(li);
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
    prendas.push (prenda);
    console.log(prendas);
    novedades.reset();
    agregarRopa();
    
}




// QUE QUIERO HACER
// CONTROLADOR DE STOCK QUE PUEDA AGREGAR PRODUCTOS
// BUSCADOR DE PRODUCTOS
// CARRITO QUE GUARDE UN PERFIL SEGUN EL NOMBRE QUE SE INGRESE 

