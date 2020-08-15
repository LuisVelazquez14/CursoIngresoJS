/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var contadorPositivo=0;
	var contadorNegativo=0;
	var contadorCeros=0;
	var ContadorPares=0;
	var promedioNegativo = 0;
	var promedioPositivo = 0;
	var acumuladorNegativos=0;
	var acumuladorPositivos=0;
	var diferencia;


	respuesta=true;

	
	do{
		
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		
		//saber si es negativo o positivo
		if (numeroIngresado < 0)
			{//que hay que hacer cuando se sabe si es negativo y positvo, acumularlos para sumarlos y contar cuantos hay
				acumuladorNegativos = acumuladorNegativos + numeroIngresado; //1-Suma de los negativos.
				contadorNegativo++;//4-Cantidad de negativos.
			}
		else 
			{	//positivos
				if(numeroIngresado > 0)
					{
						acumuladorPositivos = acumuladorPositivos + numeroIngresado;// Suma de los positivos.
						contadorPositivo++;//3-Cantidad de positivos.
					}
				else
					{
						cero = numeroIngresado;
						contadorCeros++;//5-Cantidad de ceros.
					}
		if (numeroIngresado%2 == 0) // aca cuento los pares si el numero ingresado se divide por dos y el resto es 0 es par
		{
			ContadorPares++;//6-Cantidad de números pares.
		}
				
			}
		
		//alert("negativos " + negativos + " positivos " + positivos + " ceros "+ cero);
		respuesta=confirm("desea continuar?");
	}while(respuesta==true);//fin del while

	//1-Suma de los negativos.
	document.write ("1-Suma de los negativos " + acumuladorNegativos + "<br>");

	//2-Suma de los positivos.
	document.write ("2-Suma de los positivos. " + acumuladorPositivos+ "<br>"+ "<br>");
	
	//3-Cantidad de positivos.
	document.write ("3-Cantidad de positivos. " + contadorPositivo+ "<br>"+ "<br>");
	
	//4-Cantidad de negativos.
	document.write ("4-Cantidad de negativos. " + contadorNegativo + "<br>"+ "<br>");	
	
	//5-Cantidad de ceros.
	document.write ("5-Cantidad de ceros. " + contadorCeros+ "<br>"+ "<br>");
	
	//6-Cantidad de números pares.
	document.write ("6-Cantidad de números pares. " + contadorCeros+ "<br>"+ "<br>");
	
	//promedio de positivos
	//si el usuario no ingresa positvos?? hacer un if y comparar con el contadorPositivo(inicializado en las variables) si ingreso positivo, si es cero no ingreso nada
	if(contadorPositivo > 0)
		{
			promedioPositivo = acumuladorPositivos / contadorPositivo;
		}
	document.write("promedio de positivos " + promedioPositivo + "<br>"+ "<br>");
	
	//promedio de negativos
	//si el usuario no ingresa negativo?? hacer un if y comparar con el  contadorNegativo(inicializado en las variables) si ingreso positivo, si es cero no ingreso nada
	if(contadorNegativo > 0)
		{
			promedioNegativo = acumuladorNegativos / contadorNegativo;
		}
	
	document.write ("promedio negativos " + promedioNegativo + "<br>"+ "<br>");
	
	//9-Diferencia entre positivos y negativos, (positvos-negativos).
	diferencia = contadorPositivo - contadorNegativo;
	document.write ("diferencia positivos y negativos " + diferencia);

	
	
}//FIN DE LA FUNCIÓN