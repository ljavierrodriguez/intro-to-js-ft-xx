/* Funciones */
/* 

function funcName(params){
    sentencias;
}

const funcName = function(params){
    sentencias;
}

const funcName = (params) => {
    sentencias;
}

funcName(params1, params2, ... paramsN);

(function(){

})()
*/

sumar(10, 10);
sumar(10, 10);
sumar(10, 10);
sumar(10, 10);
sumar(10, 10);
sumar(10, 10);



function funcName(){
    let a = 10;
}
console.log(a);

const restar = function(num1, num2){
    console.log(num1 - num2);
    return num1 - num2;
}

const resultado = restar(20, 10);

function operacion(func, a, b){ // cuando usamos una funcion como argumento o parametro se le conoce como callback
    return func(a, b);
}
let res = 0;
res = operacion(restar, 30, 10);
res = operacion(sumar, 30, 10);








/* function sumar(a, b = 1){
    return a + b;
} */

sumar(10); // NaN




const multiplicar = (a, b) => a * b;
const dividir = function(a, b){
    return a / b;
}

multiplicar(10, 10);
dividir(100, 10);


let al = 10;
let bbl = 10;

function sumar(a, b){
    return a + b;
}

sumar(al, bbl);


let nombres = ["Hugo", "Paco", "Luis"];
let frutas = ["Manzana", "Pera", "Uva"];
let clubes = ["Colo Colo", "U Chile", "Catolica"];

function imprimirValores(valores){ // [x, y, z]
    for(let i = 0; i < valores.length; i++){
        console.log(valores[i]);
    }
}

imprimirValores(nombres);
imprimirValores(frutas);
imprimirValores(clubes);

let notas = [10, 14, 8, 21, 45];
notas.push(19) //[10, 14, 8, 21, 4, 19]
console.log(notas); //[10, 14, 8, 21, 45, 19]
notas.pop() //[10, 14, 8, 21, 45]
console.log(notas); //[10, 14, 8, 21, 45]

let r = notas.push(20);
console.log(r); // 6

let r2 = notas.pop();
console.log(r2); // 20;

notas.includes(10); // true
notas.includes(50); // false

notas.join(''); // 101482145
notas.join(','); // 10,14,8,21,45