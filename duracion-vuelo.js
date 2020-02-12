//Crear un programa que pida al usuario ingresar, por separado, 3 destinos de las escalas de un vuelo, y la duración 
//de cada uno de ellos. Al final debe mostrar un mensaje que liste todas las escalas con su duración y la duración 
//total del vuelo.

const destino1 = prompt("Ingrese su primer destino");
const duracion1 = Number(prompt("Ingrese la duración"));
const destino2 = prompt("Ingrese su segundo destino");
const duracion2 = Number(prompt("Ingrese la duración"));
const destino3 = prompt("Ingrese su tercer destino");
const duracion3 = Number(prompt("Ingrese la duración"));
const total = duracion1 + duracion2 + duracion3;

alert(`Su primer escala es en ${destino1}, con una duración de ${duracion1} horas.
Su segunda escala es en ${destino2}, con una duración de ${duracion2} horas.
Su tercer escala es en ${destino3}, con una duración de ${duracion3} horas.
La duración total es de ${total} horas.`);