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
    document.write("Puede vistar los siguientes lugares." + "<br>" + "<br>");
    for (let i = 0; i < lugares.length; i++) {
        document.write(lugares[i].nombre + "\n" + "<br>");
    }
}

listaDeNombres();

let distanciaMax = Number(prompt("Ingrese la distancia máxima en km que quiere alejarse de la capital"));

const distancia = lugares.filter(Lugar => Lugar.distanciacapital <= distanciaMax)

alert("Considerando esos valores, usted puede ir a:");

for (let i = 0; i < distancia.length; i++) {
    alert(distancia[i].nombre + " Y su distancia es: " + distancia[i].distanciacapital + "km.");
}