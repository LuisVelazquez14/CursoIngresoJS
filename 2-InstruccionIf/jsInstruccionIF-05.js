function mostrar()
{
	//l ingresar una edad solo debemos informar si la persona NO es adolescente.  

	//primera forma - poco optima y no aceptable

	/*var edad;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	if (edad<13 || edad>17) {
		
		alert("no es adolescente")
	}*/
	
	var edad;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	if (!(edad>12 && edad<18)) {

		alert("no es adolescente");
	
	}

}//FIN DE LA FUNCIÓN