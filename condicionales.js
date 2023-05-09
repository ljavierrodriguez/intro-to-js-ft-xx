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


switch(option){
    case 1:
        console.log('Opcion 1');
        break;
    case 2:
        console.log('Opcion 2');
        break;

    case 3:
    case 4:
    case 5:
        console.log('La opcion es 3, 4, o 5');
        break;
    default:
        console.log('Opcion invalida');
        break;
}

console.log("Hola otra vez");

/* Operadores Logicos (and, or, not) => (&&, ||, !) */
/* 
// AND (&&)
true && true => true
true && false => false
false && false => false

// OR (||)
true || true => true
true || false => true
false || false => false

// NOT (!)
!true && !true => false
!true && !false => false
!false && !false => true

// NOT (!)
!true || !true => false
!true || !false => true
!false || !false => true

*/


let a = 5;
let b = 6;
let c = 8;

if (a > b && a > c){
    console.log('A');
}

if (a > b || a > c || b < c){
    console.log('A');
}


if(!(a > b) && !(a > c)){
    console.log('A no es mayor que b y c');
}

let mayor = edad >= 18 ? true : false;
let hora = 9
let saludo = hora >= 8 && hora <= 12 ? "Buenos dias" : "Buenas Tardes"