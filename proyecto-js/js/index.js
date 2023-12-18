

let usuario = prompt ("Ingrese su nombre de usuario");

// Controlador de stock
const ropaVeranoHombres = [
    {nombre: "Remera Negra Lisa", precio: 1500},
    {nombre: "Remera Blanca Lisa", precio:1500},
    {nombre: "Remera Sin mangas con estampado", precio: 2000},
    {nombre: "Remera con Mangas con estampado", precio: 2000},
]

const ropaInviernoHombres = [
    {nombre: "Remera Mangas Larga Negra Lisa", precio: 3000},
    {nombre: "Remera Mangas Larga Blanca Lisa", precio:3000},
    {nombre: "Remera Mangas Larga con estampado", precio: 3500},
    {nombre: "Remera Mangas Larga con estampado dif", precio:3500},
]

const ropaVeranoMujeres = [
    {nombre: "Remera Negra Lisa", precio: 1500},
    {nombre: "Remera Blanca Lisa", precio:1500},
    {nombre: "Remera Sin mangas con estampado", precio: 2000},
    {nombre: "Remera con Mangas con estampado", precio: 2000},
]

const ropaInviernoMujeres = [
    {nombre: "Remera Mangas Larga Negra Lisa", precio: 3000},
    {nombre: "Remera Mangas Larga Blanca Lisa", precio:3000},
    {nombre: "Remera Mangas Larga con estampado", precio: 3500},
    {nombre: "Remera Mangas Larga con estampado dif", precio:3500},
]

const ropaVeranoNiños = [
    {nombre: "Remera Negra Lisa", precio: 1500},
    {nombre: "Remera Blanca Lisa", precio:1500},
    {nombre: "Remera Sin mangas con estampado", precio: 2000},
    {nombre: "Remera con Mangas con estampado", precio: 2000},
]

const ropaInviernoNiños = [
    {nombre: "Remera Mangas Larga Negra Lisa", precio: 3000},
    {nombre: "Remera Mangas Larga Blanca Lisa", precio:3000},
    {nombre: "Remera Mangas Larga con estampado", precio: 3500},
    {nombre: "Remera Mangas Larga con estampado dif", precio:3500},
]

const stock = ropaVeranoHombres.map ()










// Controlador de Stock

// Simulador interactivo

let menu = true
let opcion = true

while (menu) {
    let opcion = parseInt(prompt(`Hola Bienvenido ${usuario}, Que deseas ver hoy?: \n1.Ropa de Hombre\n2.Ropa de Mujer\n3.Ropa de Niños y Niñas\n4.Salir`));

    switch (opcion){ 
        case 1: // Caso Hombre
            let opcion2 = parseInt(prompt("Selecciona la ropa segun la estacion: \n1.Ropa de Verano\n2.Ropa de Invierno\n3.Salir"));
            switch (opcion2){
                case 1: 
                alert("Ahora veras remeras, bermudas y calzado de verano");
                    break;
                case 2:
                    alert("Ahora veras Buzos, reneras mangas largas, pantalones y calzado de invierno");
                    break;
                case 3:
                    opcion = false;
                    alert("Hasta luego que vuelvas pronto");
                    break;
                default:
                    alert("Opcion no valida");
                    break;
            }
            break;


        case 2: // Caso Mujer
        let opcion3 = parseInt(prompt("Selecciona la ropa segun la estacion: \n1.Ropa de Verano\n2.Ropa de Invierno\n3.Salir"));
        switch (opcion3){
            case 1:
                alert("Ahora veras remeras, bermudas y calzado de verano");
                    break;
                case 2:
                    alert("Ahora veras Buzos, reneras mangas largas, pantalones y calzado de invierno");
                    break;
                case 3:
                    menu = false
                    alert("Hasta luego que vuelvas pronto");
                    break;
                default:
                    alert("Opcion no valida");
                    break;
        }
        break;


        case 3: // Caso Niños y niñas
        let opcion4 = parseInt(prompt("Selecciona la ropa segun la estacion: \n1.Ropa de Verano\n2.Ropa de Invierno\n3.Salir"));
        switch (opcion4){
            case 1:
                    alert("Ahora veras remeras, bermudas y calzado de verano");
                    break;
                case 2:
                    alert("Ahora veras Buzos, reneras mangas largas, pantalones y calzado de invierno");
                    break;
                case 3:
                    menu = false
                    alert("Hasta luego que vuelvas pronto");
                    break;
                default:
                    alert("Opcion no valida");
                    break;
        } 
        break;


        case 4:
            menu = false
                alert("Gracias por ver, esperamos pronto su regreso");
                break;

            default:
                alert("Opcion no valida porfavor ingrese una de las opciones mostradas");
                break; 
    }
  }

  // Simulador Interactivo

  // CARRITO INTERACTIVO

const carritoCompras = () => {
    let carrito = true;

    while (carrito) {
        let prendas = parseInt(
            prompt(`
            
            Que prendas quieres ver hoy?
            1- Remeras
            2- Bermudas
            3- Calzado
            4- Volver
            `
            )
        );
        switch (carrito) {
            case 1:

            break;

            case 2:

            break;

            case 3:

            break;

            case 4:
                menu();
            break;

            default:
                alert("Ingrese una opcion valida");
                break;
        }
    }
}