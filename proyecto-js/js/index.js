
//NO UTILIZAR LAS SIGUIENTES PALABRAS
//break, case, catch, continue, default, let
//delete, do, else, finally, for, function, if, in, instanceof, new, return, switch, this, throw, try, typeof, var, void, while, with, y varias más

let usuario = prompt ("Ingrese su nombre de usuario");

// Algoritmo con condicional












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