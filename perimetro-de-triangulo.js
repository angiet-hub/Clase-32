//Crear un programa que pida al usuario ingresar el valor de la altura y el valor del ancho de un rectángulo, 
//calcular su perímetro y mostrarlo en un mensaje.

const altura = Number(prompt("Ingrese la altura"));
const ancho = Number(prompt("Ingrese el ancho"));
const perimetro = (altura * 2) + (ancho * 2);

alert(`El perímetro del rectángulo es de ${perimetro}`);