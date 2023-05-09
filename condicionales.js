/* Condicionales

if (condicion) {
    sentencia
}

if (condicion) {
    sentencia
} else {
    sentencia
}

if (condicion) {
    sentencia
} else if (condicion) {
    sentencia
} else if (condicion) {
    sentencia
} else {
    sentencia
}

*/
/* Operadores de Comparacion */
/* ===, ==, !==, !=, >=, <=, >, < */

let edad = 17;

if (edad >= 18){ // true
    console.log('Eres mayor de edad');
}

if (edad >= 18){
    console.log('Eres mayor de edad');
} else {
    console.log('No eres mayor de edad');
}

let opcion = 2;

if (opcion === 1){
    console.log('Opcion 1');
} else if (opcion === 2) {
    console.log('Opcion 2');
} else if (opcion === 3) {
    console.log('Opcion 3');
} else {
    console.log('Opcion Invalida');
}