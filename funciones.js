const fs = require("fs");

//Lee el archivo
function leer(){
    let archivo = JSON.parse(fs.readFileSync("./base.json","utf8")) 
    return archivo
}

//Dice todos los alumnos que hay
function alumnos(){
    let archivo = leer();
    archivo.forEach((valor,indice) => {console.log(valor.name)})
}

//Agregar un alumno a la lista
function insertar(documento,nombre,edad,nacionality){
    let archivo = leer();
    let alumno = {dni:documento,name:nombre,age:edad,nacionalidad:nacionality};
    archivo.push(alumno);
    fs.writeFileSync("base.json",JSON.stringify(archivo));
    console.log("El alumno ha sido agregado con exito!")
}

//Busca a un alumno
function buscarAlumno(documento){
    let archivo = leer();
    let contador = 0
    for (let i=0;i<archivo.length;i++){
        if (archivo[i].dni == documento){
            return archivo[i]
        }
    }
    if (contador = archivo.length){
        return `El alumno con DNI ${documento} no existe!`
    }
}

//Modifica un alumno
function modificar(documento,atributo,valorAtributo){
    let alumno = buscarAlumno(documento);
    let alumnoModificado = alumno;
    if (typeof alumno == "string"){
        console.log(`El alumno con DNI ${documento} no existe!`);
        return;
    }
    else {
        if (atributo == "dni"){alumnoModificado.dni = valorAtributo}
        else if (atributo == "name"){alumnoModificado.name = valorAtributo}
        else if (atributo == "age"){alumnoModificado.age = valorAtributo}
        else {alumnoModificado.nacionalidad = valorAtributo}
    }
    archivo = leer();
    //Borramos el elemento a modificar
    for (let i=0;i<archivo.length;i++){
        if (archivo[i].dni == documento){
            archivo.splice(i,1)
        }
    }
    //Agregamos el atributo
    archivo.push(alumnoModificado);
    fs.writeFileSync("base.json",JSON.stringify(archivo));
    console.log(`El atributo ${atributo} del alumno con DNI ${documento} ha sido cambiado por ${valorAtributo}`)
}

//Elimina un alumno
function eliminar(documento){
    let archivo = leer();
    let contador = 0;
    for (let i=0;i<archivo.length;i++){
        contador += 1
        if (archivo[i].dni == documento){
            archivo.splice(i,1);
            fs.writeFileSync("base.json",JSON.stringify(archivo))
            console.log(`El alumno con DNI ${documento} ha sido eliminado con exito!`)
            break;
        }
    }
    if (contador == archivo.length){
        console.log(`El alumno con DNI ${documento} no existe`)}
    
}

//Funcion para filtrar alummnos
function filtrar(atributo,valorAtributo){
    let archivo = leer();
    let alumnos;
    if (atributo == "dni"){alumnos = archivo.filter((alumno)=>alumno.dni == valorAtributo);return alumnos}
    else if (atributo == "name"){alumnos = archivo.filter((alumno)=>alumno.name == valorAtributo);return alumnos}
    else if (atributo == "age"){alumnos = archivo.filter((alumno)=>alumno.age == valorAtributo);return alumnos}
    else {alumnos = archivo.filter((alumno)=>alumno.nacionalidad == valorAtributo);return alumnos}
}

module.exports = {alumnos,insertar,buscarAlumno,modificar,eliminar,filtrar}