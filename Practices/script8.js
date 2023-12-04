'use strict';

//MAP
//Convertir números a strings javascript

const array = [2,4,3,32,42,47,34];

const strings = array.map( numbers => numbers.toString());

console.log(strings);

//Duplicar cada número en un array

const numeros = [1, 2, 3, 4, 5];

const duplicados = numeros.map( number => number * 2 );

console.log('Nuevo numero: ' + duplicados);

//Convertir cadenas a mayúsculas

const palabras = ['hola', 'mundo', 'javascript'];

const mayusculas = palabras.map(word => word.toUpperCase);

console.log(mayusculas);

//Obtener longitudes de cadenas

const frutas1 = ['manzana', 'pera', 'uva', 'sandía'];

const frutasLongitud = frutas1.map(fruta => fruta.length );

console.log(frutasLongitud);

//Convertir números a strings

const numeros1 = [42, 17, 99, 23, 5];

const numberStrings = numeros1.map( number  => number.toString())

console.log('Nuevos numeros a string ' + numberStrings);


//Crear un nuevo array con objetos modificados

const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Carlos', edad: 22 }
];

const nPersonas = personas.map(persona => persona.edad += 3 );

console.log(personas);



//FOREACH

//Imprimir cada elemento de un array

const frutas = ['manzana', 'pera', 'uva', 'sandía'];

frutas.forEach(fruta => console.log(fruta));

// Filtrar palabras por longitud

const palabras1 = ['hola', 'mundo', 'javascript', 'programación'];

palabras1.forEach( word => 
{
    word.length > 5 ? console.log(word) : 'NO HAY PALABRAS MAYORES A 5 LETRAS';
});

//Modificar un array de objetos

const personas1 = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Carlos', edad: 22 }
  ];

personas1.forEach( persona => { persona.edad += 2 });

console.log(personas1);

//Sumar elementos de un array

const numeros2 = [1, 2, 3, 4, 5];

numeros2.forEach(number =>{ console.log(number + number) });


//Encontrar el mayor número en un array

const numeros3 = [12, 5, 27, 8, 20];

let mayor = numeros3[0];

numeros3.forEach(numero => 
{ 
    if( numero > mayor)
    {
        mayor = numero;
    }
});

console.log('El numero mayor es: ', mayor);

//REDUCE

//Sumar todos los elementos de un array

const numeros4 = [1, 2, 3, 4, 5];

const sumaNum = numeros4.reduce(( acum, num ) => acum + num, 0);

console.log('Suma total: ', sumaNum);

//Concatenar palabras en un array

const palabras2 = ['Hola', ' ', 'mundo', '!'];

const nuevaPalabra = palabras2.reduce( (nWord,word) => nWord += word , '');

console.log(nuevaPalabra);

//Encontrar el número más grande en un array

const numeros5 = [10, 5, 8, 20, 15];

const mayor1 = numeros5.reduce( (mayor, num) => num > mayor ? num :  mayor , numeros5[0]);

console.log(mayor1);

//Contar la cantidad de elementos pares en un array

const numeros6 = [2, 7, 14, 5, 10, 8];

const pares = numeros6.reduce(( contador, number ) => number % 2 === 0 ? ++contador : contador , 0);

console.log(pares);

//Multiplicar todos los elementos de un array

const numeros7 = [2, 3, 4, 5];

const multiplicados = numeros7.reduce(( producto, number ) => producto * number, 1);

console.log(multiplicados);