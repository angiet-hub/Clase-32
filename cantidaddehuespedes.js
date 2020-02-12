//Crear un programa que pida al usuario ingresar, de a uno por vez, cuántas habitaciones tiene un hotel 
//para 2, 3 y 4 personas, y muestre el máximo de huéspedes que puede albergar.

const habitaciones2 = Number(prompt("Ingrese cantidad de habitaciones para 2 huespedes") * 2);
const habitaciones3 = Number(prompt("Ingrese cantidad de habitaciones para 3 huespedes") * 3);
const habitaciones4 = Number(prompt("Ingrese cantidad de habitaciones para 4 huespedes") * 4);

const respuesta = habitaciones2 + habitaciones3 + habitaciones4;

alert(`El hotel puede albergar ${respuesta} huespedes`);

