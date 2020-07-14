/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//alert("ok");

	var numero1;
	var numero2;
	var suma;

	numero1 = txtIdNumeroUno.value;
	numero2 = txtIdNumeroDos.value;

	numero1 = parseInt (numero1);
	numero2 = parseInt (numero2);

	suma = numero1 + numero2;

	//txtIdNumeroUno
	//txtIdNumeroDos

	alert(suma);

}

