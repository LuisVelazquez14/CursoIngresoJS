/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var precioLam;
    var opcionIngresada;
    var cantidadDeLamparas;
    var descuento50;
    var descuento40;
    var descuento30;
    var descuento25;
    var descuento20;
    var descuento15;
    var descuento10;
    var descuento5;
    var precioFinal;
    var precioTotal;
    var precioIngresosBrutos;   
    var impuestoIngresosBrutos;
    
    precioLam = 35;

    cantidadDeLamparas = txtIdCantidad.value;

    cantidadDeLamparas = parseInt(cantidadDeLamparas);
    
    opcionIngresada = Marca.value;
    
    precioFinal = cantidadDeLamparas * precioLam;

    descuento50 = precioFinal * 50 / 100;
    descuento40 = precioFinal * 40 / 100;
    descuento30 = precioFinal * 30 / 100;
    descuento25 = precioFinal * 25 / 100;
    descuento20 = precioFinal * 20 / 100;
    descuento15 = precioFinal * 15 / 100;
    descuento10 = precioFinal * 10 / 100;
    descuento5 = precioFinal * 5 / 100

    if (cantidadDeLamparas >= 6)
        {
            txtIdprecioDescuento.value = precioFinal - descuento50;
        }
    else 
    {
        switch (cantidadDeLamparas)
            {
                case 5:
                    switch (opcionIngresada)
                    {
                     case "ArgentinaLuz":                                    
                            txtIdprecioDescuento.value = precioFinal - descuento40;
                        break;        
                    default:
                        txtIdprecioDescuento.value = precioFinal - descuento30;                         
                        break;
                    }

                case 4:
                    switch  (opcionIngresada)                        
                        {        
                            case "FelipeLamparas":
                            case "ArgentinaLuz":
                                    txtIdprecioDescuento.value = precioFinal - descuento25;
                                break
                            
                            default:
                            txtIdprecioDescuento.value = precioFinal - descuento20; 
                                break;                        
                        } 
                    break;
                
                case 3:
                    switch (opcionIngresada)
                        {
                        case "ArgentinaLuz":                        
                            txtIdprecioDescuento.value = precioFinal - descuento15;
                            break;

                        case "FelipeLamparas":
                            txtIdprecioDescuento.value = precioFinal - descuento10;
                            break;

                        default:
                                    txtIdprecioDescuento.value = precioFinal - descuento5;                                        
                            break;
                        }
                    break;


            }

    }

    precioTotal = txtIdprecioDescuento.value;
    precioTotal = parseInt(precioTotal);
    
    impuestoIngresosBrutos = precioTotal * 10 / 100;
    
    precioIngresosBrutos = precioTotal + impuestoIngresosBrutos;
       

    if (precioTotal > 120) 
        {               
            alert ("Usted pago " + impuestoIngresosBrutos + " de IIBB" );
            txtIdprecioDescuento.value = precioIngresosBrutos;
        }

    /*var precioLam;
    var opcionIngresada;
    var cantidadDeLamparas;
    var descuento50;
    var descuento40;
    var descuento30;
    var descuento25;
    var descuento20;
    var descuento15;
    var descuento10;
    var descuento5;
    var precioFinal;
    var precioTotal;
    var precioIngresosBrutos;   
    var impuestoIngresosBrutos;
    
    precioLam = 35;

    cantidadDeLamparas = txtIdCantidad.value;

    cantidadDeLamparas = parseInt(cantidadDeLamparas);
    
    opcionIngresada = Marca.value;
    
    precioFinal = cantidadDeLamparas * precioLam;

    descuento50 = precioFinal * 50 / 100;
    descuento40 = precioFinal * 40 / 100;
    descuento30 = precioFinal * 30 / 100;
    descuento25 = precioFinal * 25 / 100;
    descuento20 = precioFinal * 20 / 100;
    descuento15 = precioFinal * 15 / 100;
    descuento10 = precioFinal * 10 / 100;
    descuento5 = precioFinal * 5 / 100



    if (cantidadDeLamparas >= 6) 
        {   
            txtIdprecioDescuento.value = precioFinal - descuento50;
        }

    else 
        {    
            if (cantidadDeLamparas == 5)
                {   
                    if(opcionIngresada == "ArgentinaLuz")
                        {             
                            txtIdprecioDescuento.value = precioFinal - descuento40;  
                        }
                    else
                        {
                            if (opcionIngresada != "ArgentinaLuz")
                                {
                                    txtIdprecioDescuento.value = precioFinal - descuento30; 
                                }
                        }       
                }

            if (cantidadDeLamparas == 4) 
                {               
                    if (opcionIngresada == "FelipeLamparas" || opcionIngresada == "ArgentinaLuz")
                    {        
                        txtIdprecioDescuento.value = precioFinal - descuento25;
                    }
                    else
                        {
                            if (opcionIngresada != "ArgentinaLuz" || opcionIngresada != "FelipeLamparas")
                                {
                                    txtIdprecioDescuento.value = precioFinal - descuento20; 
                                }
                        }                        
                }

            if (cantidadDeLamparas == 3) 
                {
                    if (opcionIngresada == "ArgentinaLuz")
                        {
                            txtIdprecioDescuento.value = precioFinal - descuento15;
                        }
                    else
                        {
                            if (opcionIngresada == "FelipeLamparas")
                                {
                                    txtIdprecioDescuento.value = precioFinal - descuento10;
                                }
                            else 
                                {
                                    if (opcionIngresada != "ArgentinaLuz" || opcionIngresada != "FelipeLamparas")
                                        {
                                            txtIdprecioDescuento.value = precioFinal - descuento5;
                                        }
                                }
                        }
                }                     
        }        

    precioTotal = txtIdprecioDescuento.value;
    precioTotal = parseInt(precioTotal);
    
    impuestoIngresosBrutos = precioTotal * 10 / 100;
    
    precioIngresosBrutos = precioTotal + impuestoIngresosBrutos;
       
    

    if (precioTotal > 120) 
        {               
            alert ("Usted pago " + impuestoIngresosBrutos + " de IIBB" );
            txtIdprecioDescuento.value = precioIngresosBrutos;
        }
    */
}

