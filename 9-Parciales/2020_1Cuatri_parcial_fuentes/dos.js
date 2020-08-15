/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.X
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.X
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro */

function mostrar()
{
  var tipoProducto; //tipo
  var cantidadDeBolsas; //cantidadbolsas
  var precioPorBolsa; //precio por bolsa
  var importeTotal = 0;
  var importeConDescuento;
  var descuento;
  var acumuladorDeBolsasArena = 0;
  var acumuladorDeBolsasCal = 0;
  var acumuladorDeBolsasCemento = 0;
  var acumuladorDeBolsas = 0;
  var precioBrutoProducto;
  var banderaPrimerProducto = 0;
  var tipoMasCaro = 0;
  var tipoProductoMasCaro;

  var respuesta = true;

  
  while(respuesta){

    tipoProducto = prompt ("Ingrese Productos"); //ingreso

    while(tipoProducto!="arena" && tipoProducto!="cal" && tipoProducto!="cemento")//validacion
  	{
      tipoProducto=prompt("ERROR, producto");
    }
    
    cantidadDeBolsas = prompt ("Ingrese Cantidad de bolsas");
    cantidadDeBolsas = parseInt (cantidadDeBolsas);

    while(cantidadDeBolsas < 0)
  	{
  		cantidadDeBolsas=prompt("ERROR, ingrese cantidad de bolsas");
  		cantidadDeBolsas=parseInt(cantidadDeBolsas);
  	}
    
    precioPorBolsa = prompt ("Ingrese precio");
    precioPorBolsa = parseInt (precioPorBolsa);

    while(precioPorBolsa < 1)
    {
      precioPorBolsa=prompt("ERROR ,Ingrese precio");
  		precioPorBolsa=parseInt(precioPorBolsa);
    }   

    switch(tipoProducto)
      {
        case "arena":
          acumuladorDeBolsasArena = acumuladorDeBolsasArena + cantidadDeBolsas; 
          break;
        case "cal":
          acumuladorDeBolsasCal = acumuladorDeBolsasCal + cantidadDeBolsas;
          break;
        case "cemento":
          acumuladorDeBolsasCemento = acumuladorDeBolsasCemento + cantidadDeBolsas;
          break;   
      }

    //acumulo las bolsas para el descuento 
    acumuladorDeBolsas = acumuladorDeBolsas + cantidadDeBolsas;
    
    //acumulo los precios por productos para importe total y despues descontarlo
    precioBrutoProducto = precioPorBolsa * cantidadDeBolsas;
    
    importeTotal = importeTotal + precioBrutoProducto;

    //f) El tipo mas caro utilizando bandera*/
    if(banderaPrimerProducto == 0 || precioPorBolsa > tipoMasCaro)
      {
        banderaPrimerProducto = 1;
        tipoMasCaro = precioPorBolsa;
        tipoProductoMasCaro = tipoProducto;
        
      }

    respuesta = confirm ("Desea seguir agregando productos");
  }

   //d) Informar el tipo con mas cantidad de bolsas.

   if(acumuladorDeBolsasArena > acumuladorDeBolsasCal && acumuladorDeBolsasArena > acumuladorDeBolsasCemento)
      {
        document.write ("Arena es el tipo con mas bolsas " + acumuladorDeBolsasArena + "<br>")
      }
    else
      {
        if(acumuladorDeBolsasCal > acumuladorDeBolsasCemento)
          {
            document.write ("Cal es el tipo con mas bolsas " + acumuladorDeBolsasCal + "<br>");
          }
        else
          {
            document.write ("Cemento es el tipo con mas bolsas " + acumuladorDeBolsasCemento + "<br>");
          }
      }
   /*Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
    Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar. */ 
    if(acumuladorDeBolsas > 29)
      {
        descuento = 25;
      }
    else
      {
        if(acumuladorDeBolsas > 9)
          {
            descuento = 15;
          }
        else
          {
            descuento = 0;
          }

      }
    //b) el importe total a pagar con descuento(solo si corresponde)
    if(descuento != 0)
      {
        importeConDescuento = importeTotal - importeTotal * descuento / 100;
        document.write ("precio a pagar con descuento " + importeConDescuento + "<br>");
      }
    //a) El importe total a pagar , bruto sin descuento y
      document.write("importe total sin descuento " + importeTotal + "<br>");
      
    //f) El tipo mas caro X*/
      document.write ("tipo mas caro es " + tipoProductoMasCaro + " con el precio " + tipoMasCaro );


}
