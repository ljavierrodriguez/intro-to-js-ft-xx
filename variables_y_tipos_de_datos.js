// Definicion de una variable
// var, let y const

/* 

var, let, o const variableName = value;

*/
/* 
Data Types o Tipos de Datos:

String
Number
Boolean
Undefined
Objects (Array, Literal Object, Null)
Function

*/

let nombre = "Luis";
let apellido = 'Rodriguez';
let nombreCompleto = `${nombre} ${apellido}`;
let nombreCompleto2 = nombre + " " + apellido;

let edad = 41;
let saldo = -1000;
let temperatura = -10.5;
let porcentaje = 10.5;

let activo = false;
let single = true;

let direccion;

let universidad = null;

let persona = {
    nombre: '',
    apellido: ''
}

console.log(persona.nombre)
console.log(persona["apellido"]);

let valores = [true, "Hola", 10, [1, 2], { name: 'Luis' }];

console.log(valores[0])