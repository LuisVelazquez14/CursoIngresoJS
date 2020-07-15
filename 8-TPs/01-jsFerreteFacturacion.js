/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{   
    //ENTRADA
    //variables
    var precioUno;
    var precioDos;
    var precioTres;
    var total;

    //PROCESO
    //asocio el ID del html con el input del dato con el ".value"
    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    //cambio el tipo de dato de string a parseInt
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    //calculo la suma total
    total = precioUno + precioDos + precioTres;

    //SALIDA
    //salida por alert
    alert("el total es " + total);
    }

function Promedio () 
{   
    //ENTRADA
    //declaro variables
    var precioUno;
    var precioDos;
    var precioTres;
    var total;
    var promedio;

    //PROCESO
    //asocio el ID del html con el input del dato con el ".value"
    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    //cambio el tipo de dato de string a parseInt
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);
    
    //Calculo de promedio
    total = precioUno + precioDos + precioTres;

    promedio = total / 3;
    
    //SALIDA
    //salida por alert
    alert("el promedio es " + promedio)
}

function PrecioFinal () 
{   
    //ENTRADA
    //declaro variables
	var precioUno;
    var precioDos;
    var precioTres;
    var total;
    var impuesto;
    var resultadoFinal;

    //PROCESO
    //asocio el ID del html con el input del dato con el ".value"
    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    //cambio el tipo de dato de string a parseInt
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);
    
    //calculo de porcentaje
    total = precioUno + precioDos + precioTres;
    impuesto = total * 21/100;

    resultadoFinal = total + impuesto;
    
    //SALIDA
    //salida de dato por alert
    alert("el total c/impuesto del 21% es " + resultadoFinal);
}