/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m ");

	while (sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt ("reingrese sexo f o m");
	}

	txtIdSexo.value = sexoIngresado;
}//FIN DE LA FUNCIÓN