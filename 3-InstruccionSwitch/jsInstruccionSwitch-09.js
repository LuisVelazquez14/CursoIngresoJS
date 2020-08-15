function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destino = txtIdDestino.value;
	var tarifa;
	var tarifaBase;

	tarifaBase = 15000;
	//TARIFA 
	/*ESTACION DEL AÑO - 
	INVIERNO: 
	AUMENTO BARILOCHE 20%
	Y CATA Y COR DESC 10% 
	MARDEL DESCUENTO 20%
	*/
	switch (estacionIngresada)
	{
		case "Invierno":
			switch (destino)
			{
				case "Bariloche":
					tarifa = tarifaBase + tarifaBase * 20 / 100;
					break;
				case "Mar del plata":
					tarifa = tarifaBase - tarifaBase * 20/100;
					break;
				default:
					tarifa = tarifaBase - tarifaBase * 10/100;
			}
			break;
			/*
	VERANO: 
	BARILOCHE DESCUENTO 20%
	CATA Y CORD AUMENTO 10%
	MARDEL AUMENTO 20%*/
		case "Verano":
			switch (destino)
			{
				case "Bariloche":
					tarifa = tarifaBase - tarifaBase * 20/100;
					break;
				case "Cataratas":
				case "Cordoba":
					tarifa = tarifaBase + tarifaBase * 10/100;
					break;
				default:
					tarifa = tarifaBase + tarifaBase * 20/100;
			}
			break;

		case "Otoño":
		case "Primavera":
			switch (destino)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
				tarifa = tarifaBase + tarifaBase * 10/100;
					break;
				default:
					tarifa = tarifaBase;
					break;			
			}
			break;
	
	}
	
	alert("tarifa " + tarifa )	
	
	/*
	OTOÑO Y PRIMAVERA
	BARILOCHE AUMENTO 10%
	CATARATAS AUMENTO 10%
	MARDEL aumento 10%
	CORDOBA sin descuento
	*/


	//LOCALIDAD
	//PRECIO FINAL
	

}//FIN DE LA FUNCIÓN

/*una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento*/