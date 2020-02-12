//Crear un programa que tome la orden de compra de un local. Pedir al usuario que ingrese la cantidad que 
//desea comprar de tres productos distintos, uno por uno, mostrar el valor total de la compra y preguntar 
//en cuántas cuotas desea realizar el pago. Mostrar un mensaje final con el detalle y el valor total la compra, 
//cantidad de cuotas y valor de cada una de las cuotas. Los precios de los productos deben estar definidos 
//de antemano en variables.

const hamburguesas = Number(prompt("Ingrese cuántas hamburguesas quiere.") * 10);
const empanadas = Number(prompt("Ingrese cuántas empanadas quiere.") * 15);
const pizzas = Number(prompt("Ingrese cuántas pizzas quiere.") * 5);
const plataTotal = hamburguesas + empanadas + pizzas;

const cuotas = Number(prompt(`El valor total de su compra es de ${plataTotal}. En cuántas cuotas quiere realizar la compra?`));
const totalCuotas = plataTotal / cuotas;

alert(`
--Hamburguesas ${hamburguesas},
--Empanadas ${empanadas},
--Pizzas ${pizzas}.
.Total: $ ${plataTotal}.
.Cantidad de cuotas: ${cuotas}.
.Valor cuotas: $${totalCuotas}.
`);

