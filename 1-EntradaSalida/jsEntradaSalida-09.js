/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var resultado;
	var aumento;

	//txtIdSueldo
	//txtIdResultado
	
	sueldo = txtIdSueldo.value;
	//resultado = txtIdResultado.value;

	sueldo = parseInt(sueldo);
	//resultado = parseInt (resultado);

	aumento = sueldo * 10 / 100;
	resultado = aumento + sueldo;
	
	alert("el aumento del %10 es " + aumento)

	txtIdResultado.value = resultado;
}
