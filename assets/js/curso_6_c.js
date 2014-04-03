//curso_6_c.js
//El calculo de la letra del Documento Nacional de Identidad (DNI) es un proceso
//matematico sencillo que se basa en obtener el resto de la division entera del
//numero DNI y el numero 23. A partir del resto de la division, se obtiene la letra 
//seleccionandola dentro de un array de letras.

//El array de letras es:
//var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
//Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3
//la letra es la A. Con estos datos, elaborar un pequeño script que:
//Almacene en una variable el número de DNI indicado por el usuario y en otra variable 
//la letra del DNI que se ha indicado. (Pista: si se quiere pedir directamente al usuario 
//que indique su número y su letra, se puede utilizar la función prompt())
//En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor que 
//0 o mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario indicando que 
//el número proporcionado no es válido y el programa no muestra más mensajes.
//Si el número es válido, se calcula la letra que le corresponde según el método explicado 
//anteriormente.
//Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. 
//Si no coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha indicado 
//no es correcta. En otro caso, se muestra un mensaje indicando que el número y la letra de 
//DNI son correctos.

var numero = prompt("Introduce tu numero DNI (sin la letra)");
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
var DNI = 0;
var lDNI = 0;
if( numero <= 0 || numero >= 99999999){
	alert("Numero proporcionado no es valido")
}
else {
	var letraCalculada = letras[numero % 23];
	if letraCalculada != letra) {
	alert("La letra o el numero proporcionados no son correctos");

}
else {
	alert("El numero DNI y su letra son correctos");
}
}
//else if(DNI == 3){
//	alert(letras[3])
//}
//var letra = prompt("Introduce la letra de tu DNI(en mayusculas)");
//letracomp= letra%23
//else if(letras[] == letracomp){
//	alert("la letra que ha indicado no coincide")
//}
