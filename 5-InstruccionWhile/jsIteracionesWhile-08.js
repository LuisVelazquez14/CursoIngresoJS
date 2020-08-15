/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	//primero pedir numeros
	//analizar si son negativos o positivos
	//acumular los positivos
	//acumular los negativos
	//los acumulo para despues sumar o multiplicar fuera del bucle
	//variables
	var respuesta;
	var sumaPositivos;//acumuladores
	var multiplicacionNegativos;//acumuladores
	var numeroIngresado;
	var flag;
	
	//iniciar las variables los acumuladores
	sumaPositivos = 0;
	multiplicacionNegativos = 1 ;
	respuesta = true;
	flag = 0; // indico un flag, por que si pasa por los negativos cambia a 1, para corroborar si se ingreso un negativo
				// pongo el flag en el ELSE si cambia a 1 el flag es por que se ingreso numero negativo, y sino con un if al fnal
				// si sigue el flag en 0 mostrar el "0" (esto es para que no muestre el "1" del iniciador de variable)
	
	do {	
		//presionar el botón pedir  números 
		numeroIngresado = prompt ("ingrese numero");
		numeroIngresado = parseInt(numeroIngresado);
		//analizar si son negativos o positivos
		//condicion de if mayor a 0  se suma para los positivos sino multiplicar para los negativos y dentro los acumuladores
		
		if (numeroIngresado >= 0)
			{
				sumaPositivos = sumaPositivos + numeroIngresado;//le doy la instruccion de que si es positivo se acumule y se sume
			}
		else
			{
				flag = 1;
				multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;// le doy a instruccion si es negativo se multiplique con el acumulador
			}	
		
		respuesta = confirm ("desea agregar otro numero?");
		
	

	}while (respuesta);

	//mostrar resultados
	
	if (flag == 0)
		{
			multiplicacionNegativos = 0;
		}
	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN