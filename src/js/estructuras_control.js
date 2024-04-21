// 1. Verifica si un número es positivo. 
let numero = prompt("Ingresa un numero")
if (Math.sign(numero)==1) {
    console.info(`El numero ${numero} es positivo`)
}else if(Math.sign(numero)==-1){  // 2. Verifica si un número es negativo.
    console.info(`El numero ${numero} es negativo`)
}else {
    console.info(`El numero ${numero} es 0`)
}


// 3. Comprueba si un número es par.
if(numero%2==0){
    console.info(`El numero ${numero} es par`)
}else{
    console.info(`El numero ${numero} es impar`) // 4. Comprueba si un número es impar.
}

// 5. Determina si un número es múltiplo de 5.
if(numero%5==0){
    console.info(`El numero ${numero} es multiplo de 5`)
}

// 6. Verifica si un número es divisible entre 3.
if (numero%3 == 0) {
    console.info(`El numero ${numero} es divisible entre 3`)
}else{
    console.info(`El numero ${numero} no es divisible entre 3`)
}

// 7. Determina si un número es mayor que 100.
if (numero>100) {
    console.info(`El numero ${numero} es mayor que 100`)
}else{
    console.info(`El numero ${numero} no es mayor que 100`)
}

// 8. Verifica si un número es menor que -50.
if (numero>-50) {
    console.info(`El numero ${numero} es mayor que -50`)
}else{
    console.info(`El numero ${numero} no es mayor que -50`)    
}

// 9. Comprueba si un número está en el rango de 20 a 50.
if (numero>=20 && numero<=50) {
    console.info(`El numero ${numero} esta en el rango de 20 a 50`)
}
// 10.Determina si un número es igual a 0.
if (numero == 0) {
    console.info(`El numero ${numero} es igual a 0`)
}
// 11.Verifica si un número es mayor que -10 y menor que 10.
if(numero>-10 && numero<10){
    console.info(`El numero ${numero} esta entre -10 y 10`)
}
// 12.Determina si un número es un año bisiesto.

// 13.Verifica si una persona es mayor de edad (mayor o igual a 18 años).
let edad = prompt("Ingresa tu edad")
if (edad>=18) {
    console.info(`La persona es mayor de edad`)
}else{
    console.info(`La persona no es mayor de edad`)
}
// 14.
// 15.Verifica si un número es un cuadrado perfecto.
// 16.Determina si un número es un número de Fibonacci.
// 17.Verifica si un número es una potencia de 2.
// 18.Determina si un número es un palíndromo.
// 19.Verifica si una cadena de texto contiene la palabra "JavaScript".
// 20.Determina si una cadena tiene más de 10 caracteres.
// 21.Verifica si una cadena de texto está en minúsculas.
// 22.Determina si una cadena de texto contiene al menos un número.
// 23.Verifica si una cadena de texto termina con un punto (.).
// 24.Determina si una cadena de texto es un pangrama (contiene todas
// las letras del alfabeto).
// 25.Verifica si un día de la semana es laborable (de lunes a viernes).
// 26.Determina si un día es fin de semana (sábado o domingo).
// 27.Verifica si un número representa un mes válido (del 1 al 12).
// 28.Determina si una hora está en el rango de 9 AM a 6 PM.
// 29.Verifica si una persona es mayor de 65 años o menor de 18 años.
// 30.Determina si un triángulo es equilátero (tres lados iguales).
// 31.Verifica si un triángulo es isósceles (dos lados iguales).
// 32.Determina si un triángulo es escaleno (todos los lados diferentes).
// 33.Verifica si un número es mayor que el doble de otro número.
// 34.Determina si la suma de dos números es mayor que 100.
// 35.Verifica si la resta de dos números es menor que 50.
// 36.Determina si un número es el doble del otro número.
// 37.Verifica si el doble de un número es igual al triple de otro número.
// 38.Determina si la suma de dos números es igual a 50.
// 39.Verifica si el producto de dos números es mayor que 500.
// 40.Determina si la división de dos números es menor que 10.
