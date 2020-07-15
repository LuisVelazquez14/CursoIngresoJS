/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
	//txtIdImporte
	//txtIdResultado

function mostrarAumento()
{
	var importe;
	var descuento;
	var resultado;

	importe = txtIdImporte.value;
	
	importe = parseInt (importe);

	descuento = importe * 25 / 100;
	
	resultado = importe - descuento;
	
	//mensaje de descuento

	alert("el descuento es " + descuento);

	//mostrar resultado
	txtIdResultado.value = resultado;
}
