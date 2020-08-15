function mostrar()
{
	
	var repeticion;
	
	
		repeticion = prompt("ingrese el número");
		repeticion = parseInt(repeticion)
	
	for(var contador = 0;repeticion != 9; contador++)
	{	
		repeticion = prompt("si quiere detener ingrese 9");
		repeticion = parseInt(repeticion)
		
		
	}

	document.write ("se detuvo");

}//FIN DE LA FUNCIÓN