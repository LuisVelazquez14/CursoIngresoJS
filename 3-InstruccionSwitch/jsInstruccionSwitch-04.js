function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	
	switch (mesDelAño)
	{
		case "Febrero":
			alert("tiene 28 días.")
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("tiene 30 días.");
			break;
		
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("tiene 31 días.")
	}

	
	



}//FIN DE LA FUNCIÓN

/*
1	Enero	31 días
2	Febrero	28 días o 29 en año bisiesto
3	Marzo	31 días
4	Abril	30 días
5	Mayo	31 días
6	Junio	30 días
7	Julio	31 días
8	Agosto	31 días
9	Septiembre	30 días
10	Octubre	31 días
11	Noviembre	30 días
12	Diciembre	31 días
*/