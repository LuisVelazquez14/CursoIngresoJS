/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	//ENTRADA
    //variables
    
    var farenheitCelsius
    var temperatura

    //PROCESO
    //asocio el ID del html con el input del dato con el ".value"
    temperatura = txtIdTemperatura.value;

    //cambio el tipo de dato de string a parseInt
    
    temperatura = parseInt(temperatura);

    //realizo el calculo 

    //de farenheit a celsius X - 32 * 5/9

    farenheitCelsius = (temperatura - 32) * 5/9;

    //SALIDA
    //salida por alert

    alert("la temperatura en Celsius es " + farenheitCelsius)
    
}

function CentigradosFahrenheit () 
{
	//ENTRADA
    //variables
    var celsiusFarenheit
    var temperatura

    //PROCESO
    //asocio el ID del html con el input del dato con el ".value"
    temperatura = txtIdTemperatura.value;

    //cambio el tipo de dato de string a parseInt
    
    temperatura = parseInt(temperatura);

    //realizo el calculo 
    //de celsius a farenheit X * 9/5 + 32;

    celsiusFarenheit = temperatura * 9/5 + 32;

    //SALIDA
    //salida por alert

    alert("la temperatura en Farenheit es " + celsiusFarenheit);

}
