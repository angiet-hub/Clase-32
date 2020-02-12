//Crear un programa que pida al usuario cuanto dinero disponible tiene, y vaya preguntando cuánto tiene que 
//pagar por cada servicio, pidiendo el nombre del servicio y el monto a pagar, uno a la vez. 
//Cada vez que pide ingresar un nuevo servicio, el mensaje debe mostrar cuántos servicios quedan por ingresar, 
//utilizando una variable, y mostrar cuánto dinero disponible queda. Al final debe mostrar una lista con todos 
//los servicios a pagar y el monto de cada uno, además del dinero disponible que le queda. Hacerlo con 3 servicios.

let dinero = Number(prompt("Ingrese su dinero disponible"));
let servicios = 4;

const servicio1 = prompt("Ingrese el nombre del primer servicio");
const dineroServicio1 = Number(prompt("Ingrese cuánto debe pagar del primer servicio"));
let dineroDisponible = dinero - dineroServicio1;

alert(`Le restan por ingresar ${servicios - 1} servicios. Le quedan ${dineroDisponible} $ disponibles.`)

const servicio2 = prompt("Ingrese el nombre del segundo servicio");
const dineroServicio2 = Number(prompt("Ingrese cuánto debe pagar del segundo servicio"));
dineroDisponible -= dineroServicio2;

alert(`Le restan por ingresar ${servicios - 2} servicios. Le quedan ${dineroDisponible} $ disponibles.`)

const servicio3 = prompt("Ingrese el nombre del tercer servicio");
const dineroServicio3 = Number(prompt("Ingrese cuánto debe pagar del tercer servicio"));
dineroDisponible -= dineroServicio3;

alert(`Le restan por ingresar ${servicios - 3} servicios. Le quedan ${dineroDisponible} $ disponibles.`)

const servicio4 = prompt("Ingrese el nombre del último servicio");
const dineroServicio4 = Number(prompt("Ingrese cuánto debe pagar del último servicio"));
dineroDisponible -= dineroServicio4;

alert(`Le restan por ingresar ${servicios - 4} servicios. Le quedan ${dineroDisponible} $ disponibles.`)

alert(`--${servicio1}, ${dineroServicio1}.
        --${servicio2}, ${dineroServicio2}.
        --${servicio3}, ${dineroServicio3}.
        --${servicio4}, ${dineroServicio4}.`)


