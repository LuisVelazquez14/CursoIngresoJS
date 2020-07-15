/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    //ENTRADA

    var largo;
    var ancho;
    var largoAnchoTotal;
    var metrosTotal;

    //PROCESO

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    largoAnchoTotal = largo * ancho;

    alert("Total de metros cuadrado " + largoAnchoTotal.toFixed(2));

    metrosTotal = largoAnchoTotal * 3;
    
    //SALIDA

    alert("Necesita " + metrosTotal.toFixed(2) + " metros de alambre");   

}
function Circulo () 
{
	//ENTRADA
    var radio;
    var perimetro;
    var metrosTotal;

    //PROCESO

    radio = txtIdRadio.value;

    radio = parseInt (radio);

    perimetro = radio * Math.PI * 2;

    alert("El total del perimetro es " + perimetro.toFixed(2));

    metrosTotal = perimetro * 3;
    
    //SALIDA

    alert("En total necesita " + metrosTotal.toFixed(2) + " metros");

}
function Materiales () 
{
    //ENTRADA
    var largo;
    var ancho;
    var totalCemento;
    var totalCal;
    
    //PROCESO

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    largoAnchoTotal = largo * ancho;

    totalCemento = largoAnchoTotal * 2;
    totalCal = largoAnchoTotal * 3;

    //SALIDA
    alert("Para los " + largoAnchoTotal + " metros, se necesitan " + totalCemento + " bolsas de cemento y " + totalCal + " bolsas de cal")
}