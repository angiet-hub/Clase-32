//Crear variables que contengan arrays de strings con los nombres de meses, un array para meses de 31 días, 
//uno para de 30, y otro para 29. Completar cada array con los nombres correspondientes. 
//Mostrarlos en un mensaje indicando cuál es cuál, p.ej: "Meses con 31 días: Enero, Marzo, Mayo...".

const meses = Array(prompt("Ingrese los meses"));
const meses30 = Array(prompt("Ingrese los meses con 30 días"));
const meses31 = Array(prompt("Ingrese los meses con 31 días"));
const meses29 = Array(prompt("Ingrese los meses con 29 días"));

alert(`Meses con 31 días: ${meses31}`);
alert(`Meses con 30 días: ${meses30}`);
alert(`Meses con 29 días: ${meses29}`);