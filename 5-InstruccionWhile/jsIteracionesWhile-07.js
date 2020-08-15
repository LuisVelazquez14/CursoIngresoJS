/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	
	contador = 0;
	acumulador = 0;
	respuesta = true;

	
	do{	
		
		numeroIngresado = prompt ("ingrese numero");
		
		numeroIngresado = parseInt(numeroIngresado);
		
		acumulador = acumulador + numeroIngresado;		
		
		
		respuesta = confirm ("desea agregar otro numero?");
		
		contador++;

	}while (respuesta);

	
	txtIdSuma.value = acumulador;
	txtIdPromedio.value = acumulador / contador;

}//FIN DE LA FUNCIÓN