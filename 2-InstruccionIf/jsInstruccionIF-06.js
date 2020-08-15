//Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).

function mostrar()
{
	var edad;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	if (edad>=18)
	{		
		alert("es mayor");
	}

	else if (edad>=14) 	
	{
		alert("es adolescente");		
	}

	else 
	{
		alert("es un niño")
	}

	//segunda forma

	/*var edad;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	if (edad)*/

}