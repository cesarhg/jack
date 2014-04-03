/*curso_7_c.js
El factorial de un numero entero n es una operacion matematica que consiste en
multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. Asi, el factorial de 5
(escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120.
Utilizando la estructura for, crear un script que calcule el factorial de un numero entero.*/
var i = prompt("Introduce el numero a realiza el calculo del factorial");
var f=1;
for(f=1;f<=i;f=i-1){
	
	f=f*numero;
}
alert("el total del factorial es",f)

