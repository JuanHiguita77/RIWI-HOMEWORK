document.addEventListener('DOMContentLoaded', () =>
{
    //#1
    let num1 = 234, num2 = 324;
    console.log('Suma total:' , num1 + num2);

    //#2
    let simpleString1 = 'Hola', simpleString2 = 'Mundo';
    console.log('Longitud total de las cadenas: ' + simpleString1.length + simpleString2.length);

    //#3
    let stringUSingString1 = String('JavaScript'), stringUSingString2 = String('Ejercicios');

    //#4
    let stringUSingNewString1 = new String('Concatenar'), stringUSingNewString2 = new String('Strings');

    //#5
    console.log('Posicion de la la palabra " la " en ' + simpleString1 + ' es: ' + simpleString1.indexOf('la'));

    //#6
    console.log(`La palabra "${simpleString2}" contiene la palabra "ndo": ` + simpleString2.includes('ndo'));

    //#7
    console.log('Concatenar con concat: ' + simpleString1.concat(' ' + simpleString2));

    //#8
    console.log('Concatenar normal con +: ' + simpleString1 + ' ' + simpleString2);

    //#9
    console.log(`Concatenar con templates: ${simpleString1} ${simpleString2}`);

    //#10
    let stringWithSpaces1 = 'TrimStart', stringWithSpaces2 = 'TrimEnd';
    console.log(stringWithSpaces1.trim() + '' + stringWithSpaces2.trim());

    //#11
    console.log('"O" reeemplaza por "I": ' + simpleString1.replace('o', 'i'));

    //#12
    console.log(`Palabra "${simpleString2}" con sus 3 primeros caracteres: ${simpleString2.slice(0,3)}`);

    //#13 
    console.log(`Palabra "${simpleString2}" desde el caracter 2: ${simpleString2.substring(2)}`);

    //#14
    console.log('Repitiendo 2 veces: ' + simpleString1.repeat(2));

    //#15
    let palabra = new String('Esto es una oración de ejemplo');
    console.log(palabra);

    //#16
    console.log(`Palabra "${simpleString2}" en mayuscula: ${simpleString2.toUpperCase()}`);

    //#17
    console.log(`Palabra "${simpleString1.toUpperCase()}" en minusculas: ${simpleString1.toLowerCase()}`);

    //#18
    let booleana = true;
    console.log('Variable de tipo: ' + typeof booleana);

    //#19
    const arreglo = ['Daniela', 23, true];
    console.log('Longitus del arreglo: ' + arreglo.length);
    
    //#20
    const carro = 
    {
        color: 'rojo',
        peso: 1800,
        precio: 35000000,
    };

    console.log('Precio del objeto carro: ' + carro.precio + '$');

    //#21
    let vacio = null;
    console.log('Variable tipo: ' + typeof vacio);

    //#22
    let indefinido = undefined;
    console.log('Variable tipo: ' + typeof indefinido);

    //#23
    let decimal = 654.45;
    console.log('Variable tipo: ' + typeof decimal);

    //#24
    let negativo = -6545;
    console.log('Variable tipo: ' + typeof negativo);

    //#25
    console.log('Letra "a" en palabra "Casa" tiene posicion: ' + 'Casa'.indexOf('a'));

    //#26
    console.log('Incluye el substring "script" en la palabra "Javascript"? ' + 'Javascript'.includes('Script'));

    //#27
    console.log('Hola Mundo con concat(): ' + 'Hola'.concat(' mundo'));

    //#28
    console.log('Concatenando con simbolo +:  Hola' + ' Mundo');

    //#29
    console.log(`Concatenando con templates: Hola Mundo`);

    //#30 
    let cadenaConEspacios = '       Ejemplo con espacios       ';
    console.log('Eliminando espacios en cadena de texto: ' + cadenaConEspacios.trimStart().trimEnd());

    //#31 
    console.log('El cielo es azul'.replace('azul', 'rojo'));

    //#32 
    console.log('Programación'.slice(-4));

    //33  

    console.log('JavaScript'.substring(2));

    //34 

    console.log('Hola'.repeat(3));

    //35 Divide la cadena "Esto es una oración de ejemplo" en un array de palabras y muestra el resultado en consola. 

    console.log('Esto es una oración de ejemplo'.split(' '));

    //36 Convierte la cadena "Javascript" a mayúsculas utilizando el método toUpperCase() e imprime el resultado en consola. 
    console.log('La palabra "Javascript" en mayuscula: ' + 'Javascript'.toUpperCase());


    //37 Convierte la cadena "EJEMPLO" a minúsculas utilizando el método toLowerCase() e imprime el resultado en consola. 

    console.log('La palabra "EJEMPLO" en minuscula: ' + 'EJEMPLO'.toLowerCase())


    //38 Declara una variable numero y asígnale un número. Muestra en consola su tipo de dato utilizando el operador typeof(). 

    let numero = 4558;
    console.log('El tipo de dato de la variable "numero" es: ' + typeof numero);

    //39 Declara una variable booleana y asígnale un valor booleano. Muestra en consola su tipo de dato utilizando el operador typeof(). 

    let  booleana1 = true
    console.log('Variable de tipo' + typeof booleana1);

    //40 Declara una variable arreglo y asígnale un array con al menos tres elementos. Muestra en consola la longitud del array. 

    const arreglo1 = [1, 2, 3, 'Juan'];
    console.log('Tamaño del arreglo: ' + arreglo1.length);

    //41 Declara una variable objeto y asígnale un objeto con al menos tres propiedades. Muestra en consola una de las propiedades del objeto.

    const moto =
    {
        color: 'white',
        precio: 3500000,
        peso: 150,
        model: 'v180',

    };

    console.log('El modelo del objeto es: ' + moto.model);

    //42 Declara una variable nulo y asígnale el valor null. Muestra en consola su tipo de dato utilizando el operador typeof(). 
    let nulo= null;
    console.log('Variable tipo: ' + typeof nulo);

    //43 Declara una variable indefinido y no le asignes ningún valor. Muestra en consola su tipo de dato utilizando el operador typeof().
    let indefinido1;
    console.log('Variable de tipo: ' + typeof indefinido1);

    //44 Declara una variable decimal y asígnale un número decimal. Muestra en consola su tipo de dato utilizando el operador typeof(). 
    let decimal1 = 123.458;
    console.log('Variable de tipo:' + typeof decimal1);

/*--------------------------------------------------------------------------------------------------------------------------------------------------------*/ 

    //CALLBACK #1
    function Callback() 
    {
        console.log("Este es un callback después de 5000 milisegundos");
    }
      
    setTimeout(Callback, 5000);
    
    //CALLBACK #2
    document.querySelector("#btn").addEventListener("click", function()
    {
        console.log("Hiciste clic en el botón");
    });
      
    //CALLBACK #3
    const miArray = [1, 2, 3, 4, 5];

    miArray.forEach(function(elemento) 
    {
        console.log(elemento);
    });

    //CALLBACK #4
    let numeros = [1, 2, 3, 4, 5];

    let numerosPares = numeros.filter(function(numero) 
    {
        return numero % 2 === 0;
    });

    console.log(numerosPares); 

    //CALLBACK #5
    function operacionAsincronica(callback) 
    {
        console.log("Realizando operación asincrónica...");

        setTimeout(function() 
        {
            console.log("Operación asincrónica completada después de 2000 milisegundos.");
            callback();
        }, 2000);
    }
      
    function miCallback()
    {
        console.log("Callback ejecutado");
    }
    
    operacionAsincronica(miCallback);
      

    //_______________________________________________________

    //Ejercicio 1: Dado el siguiente array de números, utiliza el método .filter() para crear un nuevo array 
    //que contenga solo los números mayores que 5.

    let numbers = [2, 8, 5, 10, 3, 7];

    function filtro()
    {
        const newNumbers = numbers.filter(item =>
        {
            return item > 5;
        });
        
        console.log('Nuevo arreglo N mayores a 5: ' + newNumbers);
    };

    filtro();

    //Ejercicio 2: Dado el siguiente array de palabras, utiliza el método .map() 
    //para crear un nuevo array que contenga la longitud de cada palabra.

    let palabras = ["JavaScript", "HTML", "CSS", "React"];

    function longitud()
    {
        const kWords = palabras.map(word =>
        {
            return word.length;
        });

        console.log(`Tamaño de cada palabra en nuevo arreglo: ${palabras} --- ${kWords}`);
    };

    longitud();

    //Ejercicio 3: Crea una función llamada esPalindromo que tome una palabra como argumento y devuelva true si es un palíndromo 
    //y false si no lo es. Utiliza esta función con el método .filter() para crear un nuevo array que contenga solo las palabras
    //palíndromas.

    let wPalindromas = ["reconocer", "oso", "casa", "radar", "javascript"];

    function wP()
    {
        const palindromas = wPalindromas.filter(word =>
        {   
            const palindromeWordLowerCase = word.toLowerCase();

            return palindromeWordLowerCase.split('').reverse().join() === palindromeWordLowerCase;
        });

        console.log(palindromas);
    };

    wP();

    //Ejercicio 4: Supongamos que tienes un botón en tu página HTML con el id "miBoton". Utiliza JavaScript para agregar un 
    //manejador de eventos al botón que imprima "¡Botón clickeado!" en la consola cuando se haga clic.

    function click()
    {
        let button = document.querySelector('#miBoton');

        button.addEventListener('click', ()=>
        {
            console.log('¡Botón clickeado!');
        });
    };

    click();

    //Ejercicio 5: Crea una función llamada realizarOperacion que simule una operación asincrónica (puedes usar setTimeout).
    //Esta función debe tomar un callback como argumento y ejecutarlo después de que la operación asincrónica haya terminado.

    function realizarOperacion(callback)
    {
        setTimeout(callback,3000);
    }

    function asincronica()
    {
        document.querySelector('body').style.backgroundColor = "#333";
        console.log('Color cambiado de fondo');
    }

    realizarOperacion(asincronica);

    //Ejercicio 6: Dado un array de palabras, filtra las palabras que tengan más de tres letras.
    let book = ["JavaScript", "HTML", "CSS", "React", "Node"];

    const newBook = book.filter(word => { return word.length > 3});

    console.log('Arreglo con palabras mayores a 3 letras: ' + newBook);

    //Ejercicio 7: Dado un array de números, crea un nuevo array que contenga el doble de cada número.
    const enteros = [1, 2, 3, 4, 5];

    const dobleEnteros = enteros.map(numero => numero * 2);
    console.log(dobleEnteros);

    //Ejercicio 8: Dado un array de frases, cuenta el número total de palabras en todas las frases.
    let frases = ["Hola mundo", "JavaScript es genial", "Programación asincrónica"];
    let count = 0;

    let contadorDePalabras = frases.forEach(word =>
    {
        let totalWords =  word.split(' ').length;
        count += totalWords;
        return count;
    });

    console.log('Total de palabras en el arreglo "' + frases + '" es de: ' + contadorDePalabras);


});