function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;

	contador=0;
	acumulador=0;
	
	
	
	
	while (contador < 5)
	{
		numeroIngresado = prompt ("ingrese numero");
		
		numeroIngresado = parseInt(numeroIngresado);
		
		acumulador = acumulador + numeroIngresado;		
		
		contador++;
	}

	promedio = acumulador / 5;

	txtIdPromedio.value = promedio;

	txtIdSuma.value = acumulador;
	
	
	

}//FIN DE LA FUNCIÓN