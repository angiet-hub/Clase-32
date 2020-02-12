//Crear un programa que pida ingresar una número de partida y una cantidad a ir incrementando y mostrar cinco mensajes
//seguidos que muestren el número del mensaje y el total incrementado hasta el momento 
//(p. ej.: empezando con 5 e incrementando 5, "Incremento 1) Total: 10", "Incremento 2) Total: 15", 
//"Incremento 3) Total: 20", etc.).

const numero = Number(prompt("Ingrese un número a incrementar"));
const incremento = Number(prompt("Ingrese la cantidad a incrementar"));
const incremento1 = numero + incremento;
const incremento2 = incremento1 + incremento;
const incremento3 = incremento2 + incremento;
const incremento4 = incremento3 + incremento;

alert(`Empezando con ${numero} e incrementando ${incremento}:
--Incremento 1) Total: ${incremento1}.
--Incremento 2) Total: ${incremento2}.
--Incremento 3) Total: ${incremento3}.
--Incremento 4) Total: ${incremento4}.`)