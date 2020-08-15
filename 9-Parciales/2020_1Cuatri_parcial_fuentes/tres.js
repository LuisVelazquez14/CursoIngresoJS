/* En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. */

function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var masTemperatura = 0;
	var nombreConMasTemperatura;
	var contadorMayorDeEdadViudo = 0;
	var contadorHombresSolterosViudos = 0;
	var contadorMayorEdadTemperatura = 0;
	var promedioSolteros;
	var respuesta = true;
	var banderaDelPrimero = 0;
	var contadorEdadSoltero = 0;
	var acumuladorEdadSoltero = 0;
	
	
	while (respuesta)
		{	//validarnombre
			nombre = prompt ("ingrese nombre");
		
			//validar edad
			edad = prompt ("ingrese edad");
			edad = parseInt (edad);
			while(edad<0)
				{
					edad = prompt ("ERROR, ingrese edad una edad valida");
					edad = parseInt (edad);
				}
			//validar sexo
			sexo = prompt ("ingrese sexo f o m");
			while (sexo != "f" && sexo != "m")
				{
					sexo = prompt ("ERROR, para sexo indique 'f' o 'm'");
				}

			//validar estado civil
			estadoCivil = prompt ("ingrese estado civil 'soltero' 'casado' 'viudo'");
			while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
				{
					estadoCivil = prompt ("ERROR, ingrese estado civil 'soltero' 'casado' 'viudo'");
				}
			//validar temperatura
			temperatura = prompt ("ingrese temperatura");
			temperatura = parseInt (temperatura);
		
			switch(sexo)
				{	
					case "m":
						switch(estadoCivil)
						{
						case "soltero":
							if(contadorEdadSoltero == 0 || edad > acumuladorEdadSoltero)
								{
									acumuladorEdadSoltero = acumuladorEdadSoltero+edad;//e) El promedio de edad entre los hombres solteros.
									contadorEdadSoltero++;
								}
						case "viudo":
							if(edad>18)
							{
								contadorMayorDeEdadViudo++;//b) Cuantos mayores de edad estan viudos
							}
							
							contadorHombresSolterosViudos++;//c) La cantidad de hombres que hay solteros o viudos.	
							
						break;
						}
					break;
				}
				
			//a) El nombre de la persona con mas temperatura.
			if (banderaDelPrimero == 0 || temperatura > masTemperatura)
				{
					masTemperatura = temperatura;
					nombreConMasTemperatura = nombre;
					banderaDelPrimero = 1;
				}
			//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
			if(edad >= 60 && temperatura >= 38)
				{
					contadorMayorEdadTemperatura++;
				}
			
			respuesta = confirm ("desea seguir ingresando datos?");
		}
		
		promedioSolteros = acumuladorEdadSoltero / contadorEdadSoltero;

		//a) El nombre de la persona con mas temperatura.
		console.log ("El nombre de la persona con mas temperatura " + nombreConMasTemperatura+ " con temperatura de " + masTemperatura);
		
		//b) Cuantos mayores de edad estan viudos
		console.log ("Cuantos mayores de edad estan viudos " + contadorMayorDeEdadViudo);
		
		//c) La cantidad de hombres que hay solteros o viudos.
		console.log ("La cantidad de hombres que hay solteros o viudos " + contadorHombresSolterosViudos);
		
		//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
		console.log ("Cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura " + contadorMayorEdadTemperatura);
		
		//e) El promedio de edad entre los hombres solteros. */
		console.log ("El promedio de edad entre los hombres solteros " + promedioSolteros);
}
