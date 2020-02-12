//Crear un programa que pida al usuario ingresar un número, y luego el porcentaje que se desea obtener del mismo. 
//Devolver un mensaje muestre el porcentaje de dicho número.

const numero = Number(prompt("Ingrese el numero"));
const porcentaje = Number(prompt("Ingrese el porcentaje de desea obtener"));
const resultado = numero * porcentaje / 100;

alert(`El resultado es ${resultado}`);