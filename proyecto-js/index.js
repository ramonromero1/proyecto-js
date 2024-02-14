import Toastify from 'toastify-js'
import"toastify-js/src/toastify.css";



// ------------ Botones de controlador de stock ------------------------------------------

document.querySelectorAll(".producto").forEach(producto => {
    
    let botonSumar = producto.querySelector(".botonSumar");
    let botonRestar = producto.querySelector(".botonRestar");
    let contador = producto.querySelector(".contador");

    let numeroContador = 0;

    contador.innerText = numeroContador;

    botonSumar.onclick = () => {
        Toastify ({
            text:"Has agregado una prenda",
            position : 'left',
            backgroundColor: `green`,
        }) .showToast();
        numeroContador++;
        contador.innerText = numeroContador;
    }

    botonRestar.onclick = () => {
        Toastify({
            text: "Has eliminado una prenda",
            position: 'letf',
            backgroundColor: `red`,
            gravity: `bottom`
        }) .showToast()
        numeroContador--;
        contador.innerText = numeroContador;
    }
});

// ----------------- Boton Eliminar ------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    var botonEliminar = document.querySelectorAll(".boton1");

    botonEliminar.forEach(function(boton) {
    boton.addEventListener("click", function() {
    this.closest(".contenedor-2").remove();
    Toastify({
        text: "Has eliminado un producto",
        gravity:`bottom`
    }) .showToast()
      });
    });
  });

// ----------- Boton Eliminar ------------------------------------------------------------

// ------------ Botones de controlador de stock ------------------------------------------

// ------------------ Formulario para añadir prendas--------------------------------------
let novedades = document.querySelector("#novedades");

let nombrePrenda = document.querySelector("#nombrePrenda");
let secInput = document.querySelector("#secInput");
let listaProductos = document.querySelector("#listaProductos");

let prendas = [];

    const agregarRopa = () => {
        listaProductos.innerHTML = ""; 
            prendas.forEach(prenda => {
                let div = document.createElement("div");
                div.className = "contenedor-2";
                div.innerText = `${prenda.Prenda} ${prenda.Seccion}`;
                listaProductos.appendChild(div);


                Toastify({
                    text: "Has agregado una prenda nueva",
                }) .showToast()
            });
        }

        novedades.onsubmit = (event) => {
            event.preventDefault();

            if (nombrePrenda.value === "" || secInput.value === "") {
                Toastify ({
                    text: "Complete todos los campos",
                    backgroundColor: `red`
                }) .showToast()
                return;
            }

            let prenda = {
                Prenda: nombrePrenda.value,
                Seccion: secInput.value
            };

            prendas.push(prenda);
            novedades.reset();
            agregarRopa();
        }


// ------------------ Formulario para añadir prendas--------------------------------------




// Traer informacion
 
/*
let products = [];

fetch ("/data/productos.json")
    .then (resp => resp.json)
    .then (data => {
        products = [...data];
        console.log(products);
    })
*/


