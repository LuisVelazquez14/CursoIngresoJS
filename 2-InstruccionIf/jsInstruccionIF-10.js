/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/

function mostrar()
{

	var numeroAleatorio;

	numeroAleatorio = Math.floor((Math.random() * 10) + 1);

	if (numeroAleatorio > 8) 
	{
		alert("Excelente");
	}
	else 
	{
		if (numeroAleatorio > 4)
		{
			alert("aprobo");
		}
		else 
		{
			alert("vamos la proxima se puede");
		}
	}
	
}//FIN DE LA FUNCIÓN