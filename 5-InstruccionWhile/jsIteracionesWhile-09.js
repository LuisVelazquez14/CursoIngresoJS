/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero = 0;
	respuesta = true;
	
	//bucle
	do {
		//pedir numero
		numeroIngresado = prompt ("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		//
		if (banderaDelPrimero == 0 || numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}

		if(banderaDelPrimero == 0 || numeroIngresado < numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
				banderaDelPrimero = 1;
			}
			

		respuesta = confirm("desea continuar ingresando un nuevo numero?");
	}while(respuesta);

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN