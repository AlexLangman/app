const acciones = require("./funciones")

function hacer(operacion){
    let dni,nombre,age,nacionalidad,atributo,valorAtributo
    switch(operacion){
        case undefined:
            console.log("Tiene que indicar una operacion");
        case "alumnos":
            acciones.alumnos();
            break;
        case "buscar":
            dni = process.argv.slice(2)[1];
            console.log(acciones.buscarAlumno(dni));
            break;
        case "insertar":
            dni = process.argv.slice(2)[1];
            nombre = process.argv.slice(2)[2];
            age = process.argv.slice(2)[3];
            nacionalidad = process.argv.slice(2)[4]
            acciones.insertar(dni,nombre,age,nacionalidad);
            break;
        case "modificar":
            dni = process.argv.slice(2)[1];
            atributo = process.argv.slice(2)[2];
            valorAtributo = process.argv.slice(2)[3]
            acciones.modificar(dni,atributo,valorAtributo);
            break;
        case "eliminar":
            dni = process.argv.slice(2)[1];
            acciones.eliminar(dni);
            break;
        case "filtrar":
            atributo = process.argv.slice(2)[1];
            valorAtributo = process.argv.slice(2)[2];
            console.log(acciones.filtrar(atributo,valorAtributo));
            break;
        default:
            console.log("No entiendo que quieres que haga!");
            break;
    }

}

let operacion = process.argv.slice(2)[0] /* La operacion que quiero que realice */
hacer(operacion)