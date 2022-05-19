// Pop-up:
alert("Hola Mundo")

// Declaración de variables: 
let alumna = "Emma";
let profesor = "Emiliano";

/*
    El ; no es obligatorio, a menos que se tengan
    dos comandos en una misma línea.
*/

/* 
    Otra manera de definir variables:
    var nombreDeVariable = valorDeVariable

    var no es una buena práctica porque no avisa si hay una 
    superposición de variables; mientras que let al momento de definir
    una variable te avisa si alguien ya la definió anteriormente, 
    para evitar así, una superposición que rompa el programa.

*/

// Para Imprimir en pantalla:
console.log("La alumna "+alumna+ "tiene de profesor a: "+profesor)

// Para definir constantes:
const PI = 3.141592
/*  A diferencia de las variables, las constantes sí o sí
    tienen que inicializarse en la misma línea de declaración. */

// Posibles identificadores válidos en JS:
let Alumno 
let _alumno
let $edad // Lo suelen usar los Devs de Frontend(?)
let camelCase
let PascalCase
let snake_case

// TIPOS DE DATOS:

// Strings:
let str1 =  "String con comillas dobles"
let str2 = 'String con comillas simples'
let str3 = `String con Backticks` // ALT+96

let str5 = `${str1} y además ${str2} ` // AGUANTE BACKTICKS! 
let str6 = str1 + " y además " + str2;

/*  prompt() es un método del objeto Window de JavaScript que se usa para mostrar 
    un cuadro de diálogo con un mensaje que solicita al usuario 
    que ingrese algún texto o información. */

/*  prompt --> es una librería que me muestra un mensajito
    y me permite ingresar un dato de tipo string, 
    para convertir ese string a número se usa la function parse 
    (parseFloat: números decimales; parseInt: números enteros) */

// Números:
/*      (para JS todo es un Number, 
        independientemente de que sea decimal o no)*/
let nombre = prompt("¿Cómo te llamás?")
let numero1 =  parseFloat(prompt("Ingresá el primer número:")); // 1.5
let numero2 =   parseFloat(prompt("Ingresá el segundo número:")); // 1.9

let resta = numero1-numero2
let suma = numero1+numero2 
let multi = numero1*numero2
let division = numero1/numero2

alert(`Hola ${nombre}`)

alert(`La suma es: ${suma}`)
alert(`La resta es: ${resta}`)
alert(`La multiplicación es: ${multi}`)

// Booleanos:
let verdadero=true
let falso=false