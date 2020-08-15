function mostrar()
{
	/*
Ingresar 5 numeros(entre -100 y 500). Se pide mostrar:
*la suma de todos los numeros
*el promedio
*cuantos numeros son pares
*el maximo numero
*el minimo numero
*/


	var i; //contador
	//Ingresar 5 numeros(entre -100 y 500)
	var numero;
	//la suma de todos los numeros
	var suma;
	//*el promedio
	var promedio;
	//cuantos numeros son pares
	var contadorPares;
	//var bandera; esta variable se quita por que utilizo el CONTADOR "i" para bandera
	//el maximo numero
	//el minimo numero
	var maximo;
	var minimo;

	//inicializo las variables
	suma = 0;
	contadorPares = 0;
	//bandera = true;

	for(i=0; i<5; i++)
	{
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);
		while(numero<-100 || numero>500)
		{
			numero = prompt("Error!, reingrese un numero: ");
			numero = parseInt(numero);
		}

		suma = suma + numero;
		//contador de pares
		if((numero%2)==0)
		{
			contadorPares++;
		}
		//la bandera se reemplaza y utilizamos el i
		if(i == 0 || numero<minimo)
		{
			minimo = numero;
		}
		if(i == 0 || numero>maximo)
		{
			maximo = numero;
		}
		//bandera = false;

		/*if(bandera == true)
		{
			maximo = numero;
			minimo = numero;
		}
		else
		{
			if(numero<minimo)
			{
				minimo = numero;
			}
			if(numero>maximo)
			{
				maximo = numero;
			}
		}
		bandera = false;*/

	}

	promedio = suma/i;


	document.write("La suma es: " + suma + "<br>");
	document.write("El promedio es: " + promedio + "<br>");
	document.write("La cantidad de pares es: " + contadorPares + "<br>");
	document.write("El maximo es: " + maximo + "<br>");
	document.write("El minimo es: " + minimo + "<br>");



}