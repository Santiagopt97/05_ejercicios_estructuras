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
let año = parseInt(prompt("Ingresa el año que desees"))
if (año%4==0 && año%100!=0 || año%400==0) {
    console.info(`El año ${año} es bisiesto`)
}else{
    console.info(`El año ${año} no es bisiesto`)
}

// 13.Verifica si una persona es mayor de edad (mayor o igual a 18 años).
let edad = prompt("Ingresa tu edad")
if (edad>=18) {
    console.info(`La persona es mayor de edad`)
}else{
    console.info(`La persona no es mayor de edad`)
}

// 15.Verifica si un número es un cuadrado perfecto.

if (Number.isInteger(Math.sqrt(numero))) {
    console.log(`15. El ${numero} es un cuadrado perfecto.`)
} else {
    console.log(`15. El ${numero} no es un cuadrado perfecto.`)
}

// 16.Determina si un número es un número de Fibonacci.
// 17.Verifica si un número es una potencia de 2.
// 18.Determina si un número es un palíndromo.
let numero2 = 101
let numReverse = numero2.toString().split('').reverse().join('')
if(numReverse==numero2){
    console.info(`El numero ${numero2} es palindromo`)
}else{
    console.info(`El numero ${numero2} no es palindromo`)
}
// 19.Verifica si una cadena de texto contiene la palabra "JavaScript".
let cadena = prompt("Escribe un mensaje")
console.info(cadena.includes("Javascript"))

// 20.Determina si una cadena tiene más de 10 caracteres.
if(cadena.length>10){
    console.info(`La cadena: ${cadena} tiene mas de 10 caracteres`)
}else{
    console.info(`La cadena: ${cadena} tiene menos de 10 caracteres`)
}
// 21.Verifica si una cadena de texto está en minúsculas.
if(cadena === cadena.toLowerCase()){
    console.info(`La cadena: ${cadena} esta en minuscula`)
}else{
    console.info(`La cadena: ${cadena} no esta toda en minuscula`)
}
// 22.Determina si una cadena de texto contiene al menos un número.

// 23.Verifica si una cadena de texto termina con un punto (.).
if (cadena.endsWith(".")) {
    console.log(`La cadena proporcionada termina en .`)
} else {
    console.log(`La cadena proporcionada no termina en .`)
}

// 24.Determina si una cadena de texto es un pangrama (contiene todas
// las letras del alfabeto).

// 25.Verifica si un día de la semana es laborable (de lunes a viernes).
console.info(`Selecciona un dia de la semana:
Lunes
Martes
Miercoles
Jueves
Viernes
Sabado
Domingo`)
let opcion = prompt("")
switch (opcion) {
    case "lunes":
        console.info(`El dia ${opcion} es laborable`)
        return 
    case "martes":
        console.info(`El dia ${opcion} es laborable`)
        return 
    case "miercoles":
        console.info(`El dia ${opcion} es laborable`)
        return 
    case "jueves":
        console.info(`El dia ${opcion} es laborable`)
        return 
    case "viernes":
        console.info(`El dia ${opcion} es laborable`)
        return  
    // 26.Determina si un día es fin de semana (sábado o domingo).
    case "sabado":
        console.info(`El dia ${opcion} es fin de semana`)
        return 
    case "domingo":
        console.info(`El dia ${opcion} es fin de semana`)
        return    
    default:
        return
}

// 27.Verifica si un número representa un mes válido (del 1 al 12).
let mes = Number(prompt("Ingresa un número de mes:"))

if (mes >= 1 && mes <= 12) {
    console.log(`El número representa un mes válido.`)
} else {
    console.log(`El número no representa un mes válido (Es ${mes} y debe ser entre 1-12).`)
}
// 28.Determina si una hora está en el rango de 9 AM a 6 PM.
let hora = Number(prompt("Ingresa una hora en horario militar (0-24)"))

if (hora >= 9 && hora <= 18) {
    console.log(`La hora ingresada está en el rango de 9AM a 6PM`)
} else {
    console.log(`La hora ingresada no está en el rango de 9AM a 6PM`)
}
// 29.Verifica si una persona es mayor de 65 años o menor de 18 años.
let edad2 = parseInt(prompt("Ingresa tu edad"))
if (edad2 > 65 || edad2 < 18) {
    console.log(`La edad que ingresaste es mayor de 65 años o menor de 18 años.`)
} else {
    console.log(`La edad que ingresaste no es mayor de 65 años o menor de 18 años.`)
}

// 30.Determina si un triángulo es equilátero (tres lados iguales).
let lado1 = Number(prompt("Ingresa el primer lado del triángulo"))
let lado2 = Number(prompt("Ingresa el segundo lado del triángulo"))
let lado3 = Number(prompt("Ingresa el tercer lado del triángulo"))

if (lado1 === lado2 && lado1 === lado3) {
    console.log(`El triángulo es equilátero`)
} else {
    console.log(`El triángulo no es equilátero`)
}

// 31. Verifica si un triángulo es isósceles (dos lados iguales).
if ((lado1 === lado2 || lado1 === lado3 || lado2 === lado3) && (lado1 !== lado2 || lado1 !== lado3 || lado2 !== lado3)) {
    console.log(`El triángulo es isósceles`)
} else {
    console.log(`El triángulo no es isósceles`)
}

// 32. Determina si un triángulo es escaleno (todos los lados diferentes).
if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3) {
    console.log(`El triángulo es escaleno`)
} else {
    console.log(`El triángulo no es escaleno`)
}

// 33.Verifica si un número es mayor que el doble de otro número.
let num1 = parseInt(prompt("Escribe un numero"))
let num2 = parseInt(prompt("Escribe otro numero"))
if (num1> num2 * 2) {
    console.log(`El primer número ingresado (${num1}) es mayor que el doble de ${num2}`)
} else {
    console.log(`El primer número ingresado (${num1}) no es mayor que el doble de ${num2}`)
}

// 34. Determina si la suma de dos números es mayor que 100.
if (num1 + num2 > 100) {
    console.log(`La suma de los dos números que ingresaste (${num1} + ${num2}) es mayor que 100`)
} else {
    console.log(`La suma de los dos números que ingresaste (${num1} + ${num2}) no es mayor que 100`)
}

// 35. Verifica si la resta de dos números es menor que 50.
if (num1 - num2 < 50) {
    console.log(`La resta de los dos números que ingresaste (${num1} - ${num2}) es menor que 50`)
} else {
    console.log(`La resta de los dos números que ingresaste (${num1} - ${num2}) no es menor que 50`)
}

// 36. Determina si un número es el doble del otro número.
if (num2 === num1 * 2) {
    console.log(`El segundo número: ${num2}, es el doble del primero: ${num1}`)
} else {
    console.log(`El segundo número: ${num2}, no es el doble del primero: ${num1}`)
}

// 37. Verifica si el doble de un número es igual al triple de otro número.
if (num2 === num1 * 3) {
    console.log(`El segundo número: ${num2}, es el triple del primero: ${num1}`)
} else {
    console.log(`El segundo número: ${num2}, no es el triple del primero: ${num1}`)
}

// 38. Determina si la suma de dos números es igual a 50.
if (num1 + num2 === 50) {
    console.log(`La suma de los dos números que ingresaste (${num1} + ${num2}) es 50`)
} else {
    console.log(`La suma de los dos números que ingresaste (${num1} + ${num2}) no es 50`)
}

// 39. Verifica si el producto de dos números es mayor que 500.
if (num1 * num2 > 500) {
    console.log(`El producto de los números que ingresaste (${num1} * ${num2}) es mayor que 500`)
} else {
    console.log(`El producto de los números que ingresaste (${num1} * ${num2}) no es mayor que 500`)
}

// 40.Determina si la división de dos números es menor que 10.
if(num1/num2<10){
    console.info(`La division de ${num1} / ${num2} es menor que 10`)    
}else{
    console.info(`La division de ${num1} / ${num2} es mayor que 10`)
}

