//Crear un programa que pida al usuario ingresar cuántos años lleva trabajando en una empresa, y le devuelva 
//la cantidad de días de vacaciones al año que le corresponden, siendo 15 días hasta 3 años y 2 días más 
//por cada año extra (p. ej.: a 6 años corresponden 21 días).

const aniosTrabajados = Number(prompt("Ingrese los años trabajados"));
const diasExtra = ((aniosTrabajados - 3) * 2 + 15);
const vacaciones = (aniosTrabajados <= 3) && "Le correspoden 15 días de vacaciones" || diasExtra;

alert(vacaciones);

