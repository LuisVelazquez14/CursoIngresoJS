
/**Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
 */

function mostrar()
{//entrada de datos
	//carga
	var i;
	//tipo
	var tipoProducto;
	var marcaProducto;
	var fabricanteProducto;
	var fabricanteMinimo;
	//precio entre 100 y 300
	
	var precio;
	var precioMinimo;
	//cantidad de unidades entre 0 y 1000, marca y el fabricante
	var cantidadMaxima;
	var cantidadDeunidades;
	var unidadMinima;
	var flag;
	var tipoMaximoProducto;
	var contadorJabon;

	flag = 0;
	
	var contadorTipo;
	contadorTipo = 0;
	var acumuladorJabon;
	acumuladorJabon = 0;
	contadorJabon = 0;
	
	var promedioCompra;
	//proceso

	for (i = 0;i < 5; i++ )
		{	

			tipoProducto = prompt ("barbijo , jabón o alcohol");
			while (tipoProducto !="alcohol" && tipoProducto != "barbijo" && tipoProducto != "jabon")
					{
						tipoProducto = prompt ("ERROR barbijo , jabón o alcohol");
					}
							
			cantidadDeunidades = prompt ("ingrese cantidad de unidades entre 0 y 1000");
			cantidadDeunidades = parseInt(cantidadDeunidades);
			
			while (cantidadDeunidades < 0 ||  cantidadDeunidades > 1000)
					{
						cantidadDeunidades = prompt ("ERROR ingrese cantidad de unidades entre 0 y 1000");
						cantidadDeunidades = parseInt(cantidadDeunidades);
						
					}
			
								
			precio = prompt ("indique precio de producto entre 100 y 300 $");
			precio = parseInt (precio);
			while (precio < 100 || precio > 300)
					{
						precio = prompt ("ERROR, indique precio de producto entre 100 y 300 $");
						precio = parseInt (precio);
					}
			
			marcaProducto = prompt ("ingrese marca");
			fabricanteProducto = prompt ("ingrese fabricante");

			switch (tipoProducto) 
					{
						case "alcohol":
							if ( flag == 0 || precio < precioMinimo )
							{//Del más barato de los alcohol, la cantidad de unidades y el fabricante
								precioMinimo = precio;
								minimoProducto = marcaProducto;
								fabricanteMinimo = fabricanteProducto;
								unidadMinima = cantidadDeunidades;

								flag = 1;
							}
						break;
						
						case "jabon"://mostrar cuantos jabones hay
							contadorJabon++;
						break;
							

					}
			if (contadorTipo == 0 || cantidadDeunidades > cantidadMaxima)
			{
				cantidadMaxima = cantidadDeunidades;
				tipoMaximoProducto = tipoProducto;
				
				contadorTipo++;
			}

			promedioCompra = cantidadMaxima / contadorTipo;
			//b) Del tipo con mas unidades, el promedio por compra

			
		}
	

	//salida

	//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
	document.write (" el mas barato del alcohol es " + precioMinimo + " fabricante "  + fabricanteMinimo + " cantidad de unidades " + unidadMinima);
	
		
	//b) Del tipo con mas unidades, el promedio por compra
	document.write ("<br><br> cantidad maxima de producto " + cantidadMaxima + " tipo de producto " + tipoMaximoProducto + " promedio por compra " + promedioCompra);
	
	//c) Cuántas unidades de jabones hay en total
	document.write ("<br><br> Total de jabones " + contadorJabon);

	

}
