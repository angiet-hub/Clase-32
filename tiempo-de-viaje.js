//Crear un programa que pida al usuario la distancia de su recorrido y mostrar en un mensaje cuánto tiempo 
//tardaría en completar el recorrido en distintos medios de transporte, definiendo de antemano distintas 
//velocidades para distintos medios de transporte (p. ej.: a pie: 5 km/hora, bici 10km/hora, etc.).

const distancia = Number(prompt("Ingrese la distancia a recorrer en kilómetro"));
const pie = distancia / 5;
const bici = distancia / 10;
const auto = distancia / 20;

alert(`El tiempo de viaje es de:
--A pie ${pie} horas.
--En bici ${bici} horas.
--EN auto ${auto} horas.`)