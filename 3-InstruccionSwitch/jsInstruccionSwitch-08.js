function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch (destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("FRIO")
			break;
		default:
			alert ("CALOR")
			break;
		
		
	}

}//FIN DE LA FUNCIÓN