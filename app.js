const lugares = [];
let totalLugares = 8;


class Lugar {
    constructor(nombre, departamento, distanciacapital, hospedaje, rutaprincipal){
        this.nombre = nombre;
        this.departamento = departamento;
        this.distanciacapital = distanciacapital;
        this.hospedaje = hospedaje;
        this.rutaprincipal = rutaprincipal;
    }
}




do {
    let nombreIngresado = prompt("Ingrese nombre del lugar");
    lugares.push(nombreIngresado.toUpperCase());
    console.log(lugares);
} while (lugares.length < totalLugares);

alert("Su lista de lugares es: " + "\n" + lugares.join("\n"));