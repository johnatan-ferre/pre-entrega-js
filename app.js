const lugares = [];


class Lugar {
    constructor(nombre, departamento, distanciacapital, hospedaje, rutaprincipal) {
        this.nombre = nombre;
        this.departamento = departamento;
        this.distanciacapital = distanciacapital;
        this.hospedaje = hospedaje;
        this.rutaprincipal = rutaprincipal;
    }
}

lugares.push(new Lugar("Valle Lunarejo", "Rivera", 477, 6, "Ruta 30"));
lugares.push(new Lugar("Montes del Queguay", "Paysandu", 387, 4, "Ruta 4"));
lugares.push(new Lugar("Quebrada de los Cuervos", "Treinta y Tres", 330, 3, "Ruta 8"));
lugares.push(new Lugar("Humedales Santa Lucía", "Montevideo", 22, 40, "Ruta 1"));
lugares.push(new Lugar("Cerro Verde", "Rocha", 303, 4, "Ruta 9"));
lugares.push(new Lugar("Cabo Polonio", "Rocha", 272, 10, "Ruta 10"));
lugares.push(new Lugar("Esteros de Farrapos", "Rio Negro", 357, 8, "Ruta 24"));
lugares.push(new Lugar("Laguna de Castillos", "Rocha", 241, 5, "Ruta 9"));
lugares.push(new Lugar("Laguna Garzón", "Maldonado", 178, 12, "Ruta 10"));
lugares.push(new Lugar("Grutas del Palacio", "Flores", 231, 8, "Ruta 14"));



function listaDeNombres() {
    document.write("Los siguientes son los lugares que puede visitar." + "<br>" + "<br>");
    for (i = 0; i < lugares.length; i++) {
        document.write(lugares[i].nombre + "\n" + "<br>");
    }
}

listaDeNombres();

let distanciaMax = Number(prompt("Ingrese la distancia máxima en km que quiere alejarse de la capital"));

const distancia = lugares.filter(Lugar => Lugar.distanciacapital <= distanciaMax)

document.write("Los lugares que puede visitar son: " + "<br>" + "<br>")
for (let i = 0; i < distancia.length; i++) {
    document.write(distancia[i].nombre + "\n" + "<br>");
}





// function distanciaMaxima(distanciaMax) {
//     switch (distanciaMax) {
//         case 100: {
//             for (i = 0; i <= distancia.length; i++) {
//                 console.log(distancia[i].nombre);
//             }
//             break;
//         }
//         case 200: {
//             for (i = 0; i <= distancia.length; i++) {
//                 console.log(distancia[i].nombre);
//             }
//             break;

//         }
//         case 300: {
//             for (i = 0; i <= distancia.length; i++) {
//                 console.log(distancia[i].nombre);
//             }
//             break;
//         }
//         case 400: {
//             for (i = 0; i <= distancia.length; i++) {
//                 console.log(distancia[i].nombre);
//             }
//             break;
//         }
//         case 500: {
//             for (i = 0; i <= distancia.length; i++) {
//                 console.log(distancia[i].nombre);
//             }
//             break;
//         }
//         default:
//             alert("Ingresó un valor incorrecto");
//     }
// }














// do {
//     let nombreIngresado = prompt("Ingrese nombre del lugar");
//     lugares.push(nombreIngresado.toUpperCase());
//     console.log(lugares);
// } while (lugares.length < totalLugares);

// alert("Su lista de lugares es: " + "\n" + lugares.join("\n"));