//Crear un programa que pida al usuario ingresar, por separado, nombre, apellido, edad, nacionalidad, documento, 
//y muestre luego un mensaje que diga: "Nuevo usuario agregado al sistema:" y liste todos los datos juntos.

const nombre = prompt("Ingrese su nombre");
const apellido = prompt("Ingrese su apellido");
const edad = Number(prompt("Ingrese su edad"));
const nacionalidad = prompt("Ingrese su nacionalidad");
const documento = Number(prompt("Ingrese su número de documento"));

alert(`Nuevo usuario agregado al sistema: 
--${nombre}
--${apellido}
--${edad}
--${nacionalidad}
--${documento}`);