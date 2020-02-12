//Crear un programa que pida ingresar una cantidad en minutos mediante un y muestre un mensaje con el resultado 
//de la conversión en segundos.

const minutos = Number(prompt("Ingrese cantidad de minutos"));

const segundos = Number(prompt(minutos * 60));

alert(`La cantidad de segundos son: ${segundos}`);