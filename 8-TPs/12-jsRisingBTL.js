/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
	 var edadIngresada;
	 var sexoIngresado;
	 var estadoCivil;
	 var sueldoBruto;
	 var nacionalidad;
 	
	//A.	Edad, entre 18 y 90 años inclusive.
	edadIngresada = prompt ("Ingrese Edad entre 18 y 90 años ");
	edadIngresada = parseInt (edadIngresada);

	while (edadIngresada < 18 || edadIngresada > 90)
		{	
			edadIngresada = prompt ("ERROR! Edad entre 18 y 90 años ");		
		}
	txtIdEdad.value = edadIngresada;


	//B.	Sexo, “M” para masculino y “F” para femenino

	sexoIngresado = prompt ("Ingrese sexo 'F' o 'M' ");
		
	while (sexoIngresado != "F" && sexoIngresado != "F")
		{	
			sexoIngresado = prompt ("Error! ingrese 'F' o 'M'");
		}
	txtIdSexo.value = sexoIngresado;

	//Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos

	estadoCivil = prompt ("1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
	estadoCivil = parseInt(estadoCivil);

	while (estadoCivil < 1 || estadoCivil > 4)
		{	
			estadoCivil = prompt ("ERROR!!! ingrese el valor correcto 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");							
		}		
	txtIdEstadoCivil.value = estadoCivil;
		
	
	//Sueldo bruto, no menor a 8000.

	sueldoBruto = prompt ("Ingrese sueldo bruto mayor a 8000: ");

	while (sueldoBruto < 8000)
		{
			sueldoBruto = prompt ("ERROR Ingrese sueldo bruto mayor a 8000: ");
		}	
		txtIdSueldo.value = sueldoBruto;
	
	//E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
	// NO SE
	numeroLegajo = prompt ("ingrese numero de legajo")

	
	
	//txtIdNacionalidad
	//F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
	
	nacionalidad = prompt ("Ingrese nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");

	while (nacionalidad != "A" && (nacionalidad != "B" && nacionalidad != "N"))
		{
			nacionalidad = prompt ("ERROR! Ingrese nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados")
		}	
		txtIdNacionalidad.value = nacionalidad;


}
