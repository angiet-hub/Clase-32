//Crear un programa que pida ingresar una cantidad de días y muestre un mensaje con el resultado de la conversión 
//en segundos.

const dias = Number(prompt("Ingrese cantidad de días"));
const segundos = dias * 24 * 60 * 60;

alert(`La cantidad de segundos es: ${segundos}`);
