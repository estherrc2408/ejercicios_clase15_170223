/*Se solicita al usuario el nombre y 2 notas de x alumnos y se almacenan en un array
    1º Sacar la media de cada alumno
    2º Mostrar por pantalla la la media más alta y el nombre de los alumnos que tengan dicha media*/
//creamos un array cuyos componentes seran otros arrays de dos componentes
//alumnos=[[alumno_1],[alumno_2],...]
//alumno1=[nombre_alumno1,notas]
//notas=[nota1,nota2];

var numAlumnos = parseInt(prompt("introduce el numero de alumnos que hay en la clase."));
const alumnos = [];

function pedirNombre() {
    let nombre = prompt("introduce el nombre del alumno");
    return nombre;
}
function calcularMedia() {
    let nota1, nota2;
    nota1 = parseFloat(prompt("introduce nota 1"));
    nota2 = parseFloat(prompt("introduce nota 2"));
    return ((nota1 + nota2) / 2);
}
function crear_nAlumnos(numeroAlumnos,nombres,medias) {
    for (let i = 0; i < numeroAlumnos; i++) {
        let alumno = {
            nombre: nombres,
            media: medias,
        }
        alumnos.push(alumno);
        console.log(alumnos);
    }
}

function decirMedias() {
    console.log("El nombre de alumno " + pedirNombre() + " y la media que tiene " + calcularMedia());
}

function ejecutar() {
    crear_nAlumnos(numAlumnos,pedirNombre(),calcularMedia());
    alumnos.forEach(alumno => {
        console.log(alumno)
    });
}
ejecutar();
