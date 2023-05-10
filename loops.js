/* Loops o Ciclos o Bucles */
/*  

for(inicializador; condicion; incremento){
    sentencias;
}

for(indice in coleccion){
    sentencias;
}

for(valor of coleccion){
    sentencias;
}

while (condicion){
    sentencias;
}

do {
    sentencias;
} while (condicion)


*/
/* Los numeros del 1 al 10 */
/* 

numero++
numero = numero + 1
numero += 2

*/
//          1           2           4
console.log("=============== For =================");
for(let numero = 1; numero <= 10; numero++){
    console.log(numero); // 3
}

let nombres = ["Hugo", "Paco", "Luis", "Donald", "Tio Mc Pato", "Mickey", "Daisy", "Mini"]; // nombres.length = 4

console.log("=============== For =================");
for(let indice = 2; indice < nombres.length; indice++){
    console.log(nombres[indice]);
}

console.log("=============== For in =================");
for(let indice in nombres){
    console.log(indice);
    console.log(nombres[indice]);
}

console.log("=============== For of =================");
for(let nombre of nombres){
    console.log(nombre);
}

console.log("=============== For Reverse =================");
for(let indice = nombres.length - 1; indice >= 0; indice--){
    console.log(nombres[indice]);
}

console.log("=============== While =================");
let numero = 1; // inicializador
while(numero <= 10){ // condicion
    console.log(numero);
    numero += 1; // incremento
}

console.log("=============== While =================");
let indice = 0;
while(indice < nombres.length){
    console.log(nombres[indice]);
    indice++;
}

console.log("=============== While Reverse =================");
indice = nombres.length - 1;
while(indice >= 0){
    console.log(nombres[indice]);
    indice--;
}

console.log("=============== do While =================");
numero = 1;
do {
    console.log(numero);
    numero++
} while (numero <= 10);


console.log("=============== continue =================");
for(let i = 1; i <= 100; i++){
    if(i % 3 === 0) continue;
    console.log(i);
}

console.log("=============== break =================");
let randomNumber = Math.floor(Math.random() * 100) + 1;
for(let i = 1; i <= 100; i++){
    if(i === randomNumber) break;
    console.log(i);
}