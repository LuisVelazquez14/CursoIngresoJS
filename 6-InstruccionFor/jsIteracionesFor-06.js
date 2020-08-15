function mostrar()
{
/**al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados. */

var numero;
var contador;

contador = 0;

numero = prompt ("introducir numero");
numero = parseInt(numero)

for(var i = 2; i <= numero; i +=2)
{
	contador++;
	console.log(i);
}

document.write("la cantidad de numero par es "+contador);


}//FIN DE LA FUNCIÓN