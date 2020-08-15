
function mostrar()
{
	//clase de repaso
	var nombre;
    var sexo;
    var edad;
    var edadMinima;
	var nombreEdadMinima;
	var banderaEdadprimero = 0;
    
    var i;
    
    for(i = 0; i < 5; i++)
        {
            nombre = prompt ("Ingrese Nombre"); 
           
            sexo = prompt ("Ingrese sexo f o m");
            while(sexo != "f" && sexo != "m")
            {
                sexo = prompt ("ERROR Ingrese sexo f o m");
            }
    
            edad = prompt ("Ingrese edad");
            edad = parseInt(edad);
            while(isNaN(edad) == true || edad < 0 || edad > 150)
            {
                edad = prompt ("ERROR ingrese una edad valida");
			}

            
            if (sexo == "f")
            {
                if (banderaEdadprimero == 0 || edad < edadMinima)
                {
                    edadMinima = edad;
					nombreEdadMinima = nombre;
					
					banderaEdadprimero = 1;
                }
			}

        }

    if(sexo == "f")
    {
        console.log ("Nombre edad minima " + nombreEdadMinima);
    }
    else
    {
        console.log ("No se ingreso sexo femenino");
    }
}
