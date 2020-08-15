//Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'

function mostrar()
{
	var edad;
	var situacion;
	
	edad = txtIdEdad.value;

	edad = parseInt(edad); 	
	
	situacion = estadoCivil.value;

	if (situacion != "Soltero" && edad<18)
	{
		alert ("es muy pequeño para NO ser soltero");
	}
	


}//FIN DE LA FUNCIÓN