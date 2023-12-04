// Ejercicios con Condicionales en JavaScript

// 1. Verifica si un número es positivo.
const flecha = () =>
{
    const numero = 234;
    console.log( numero > 0 ? `El ${numero} es positivo` : `El ${numero} es negativo`);
}

flecha();

// 2. Verifica si un número es negativo.
const flecha1 = () =>
{
    const numero = -2344;
    console.log( numero < 0 ? `El ${numero} es negativo` : `El ${numero} es positivo`);
}

flecha1();

// 3. Comprueba si un número es par.
const flecha2 = () =>
{
    const numero = 888;
    console.log( numero % 2 === 0 ? `El ${numero} es par` : `El ${numero} es impar`);
}

flecha2();

// 4. Comprueba si un número es impar.
const flecha3 = () =>
{
    const numero = 79973;
    console.log( numero % 2 !== 0 ? `El ${numero} es impar` : `El ${numero} es par`);
}

flecha3();

// 5. Determina si un número es múltiplo de 5.
const flecha4 = () =>
{
    const numero = 25;
    console.log( numero % 5 === 0 ? `El ${numero} es multiplo de 5` : `El ${numero} no es multiplo de 5`);
}

flecha4();

// 6. Verifica si un número es divisible entre 3.
const flecha5 = () =>
{
    const numero = 235;
    console.log( numero % 3 === 0 ? `El ${numero} es divisible por 3` : `El ${numero} no es divisible por 3`);
}

flecha5();

// 7. Determina si un número es mayor que 100.
const flecha6 = () =>
{
    const numero = 546;
    console.log( numero > 100 ? `El ${numero} es mayor a 100` : `El ${numero} es menor a 100`);
}

flecha6();

// 8. Verifica si un número es menor que -50.
const flecha7 = () =>
{
    const numero = -30;
    console.log( numero > -50 ? `El ${numero} es mayor a -50` : `El ${numero} es menor a -50`);
}

flecha7();

// 9. Comprueba si un número está en el rango de 20 a 50.
const flecha8 = () =>
{
    const numero = 50;
    console.log( numero >= 20 && numero <= 50 ? `El ${numero} esta entre 20 y 50` : `El ${numero} esta por fuera del rango 20 a 50`);
}

flecha8();

// 10. Determina si un número es igual a 0.
const flecha9 = () =>
{
    const numero = 34;
    console.log( numero === 0 ? `El ${numero} es cero` : `El ${numero} es diferente de cero`);
}

flecha9();

// 11. Verifica si un número es mayor que -10 y menor que 10.
const flecha10 = () =>
{
    const numero = -5;
    console.log( numero > -10 && numero < 10 ? `El ${numero} es mayor que -10 y menor que 10` : `El ${numero} no es mayor que -10 y menor que 10`);
}

flecha10();

// 12. Determina si un número es un año bisiesto.
const flecha11 = () =>
{
    const numero = 2024;
    console.log( numero % 4 === 0 && (numero % 100 === 0 || numero % 100 !== 0) ? `El ${numero} es año bisiesto` : `El ${numero} no es año bisiesto`);
}

flecha11();

// 13. Verifica si una persona es mayor de edad (mayor o igual a 18 años).
const flecha12 = () =>
{
    const numero = 18;
    console.log( numero >= 18 ? `Mayor de edad` : `Menor de edad`);
}

flecha12();

// 14.
// 15. Verifica si un número es un cuadrado perfecto.
const flecha13 = () =>
{
    const numero = 25;
    console.log( Math.sqrt(numero) % 1 === 0 ? `Es cuadrado perfecto` : `No es cuadrado perfecto`);
}

flecha13();

// 16. Determina si un número es un número de Fibonacci.
const flecha14 = () =>
{
    const numero = 55;
    console.log( (Math.sqrt( 5 * numero * numero + 4 ) % 1 === 0 || Math.sqrt( 5 * numero * numero - 4 ) % 1 === 0 ) ? `${numero} Es un numero de fibonnaci` : `${numero} No es un numero de fibonnaci`);
}

flecha14();

// 17. Verifica si un número es una potencia de 2.
const flecha15 = () =>
{
    const numero = 25;
    console.log( numero & (numero - 1) === 0 ? `Es cuadrado perfecto` : `No es cuadrado perfecto`);
}

flecha15();

// 18. Determina si un número es un palíndromo.
const flecha16 = () =>
{
    const numero = String(787);
    const numeroReverse = numero.split('').reverse().join('');
    console.log( numero === numeroReverse ? `${numero} Es Palindromo` : `${numero} No es Palindromo`);
}

flecha16();

// 19. Verifica si una cadena de texto contiene la palabra "JavaScript".
const flecha17 = () =>
{
    console.log('Cadena de JavaScript'.toLocaleLowerCase().includes('javascript') ? 'SI contiene la palabra javascript' : 'NO contiene la palabra javascript');
}

flecha17();

// 20. Determina si una cadena tiene más de 10 caracteres.
const flecha18 = () =>
{
    console.log('cadena de texto'.length > 10 ? 'La cadena tiene mas de 10 caracteres' : 'La cadena tiene menos de 10 caracteres');
}

flecha18();

// 21. Verifica si una cadena de texto está en minúsculas.
const flecha19 = () =>
{
    const texto = ('cadena en minusculas');
    console.log(texto.toLowerCase() === texto ? 'La cadena esta en minusculas ' : 'La cadena esta en mayusculas');
}

flecha19();

// 22. Determina si una cadena de texto contiene al menos un número.
const flecha20 = () =>
{
    console.log(/\d/.test('cadena con numero 34') ? 'La cadena contiene al menos un numero' : 'La cadena no contiene al menos un numero');
}

flecha20();

// 23. Verifica si una cadena de texto termina con un punto (.).
const flecha21 = () =>
{
    console.log('cadena de prueba.'.endsWith('.') ? 'La cadena termina con un punto .' : 'La cadena no termina con un punto .');
}

flecha21();

// 24. Determina si una cadena de texto es un pangrama (contiene todas las letras del alfabeto).
const flecha22 = () =>
{
    const palabra = 'abcdefghijklmnopqrstuvwxyz';
    const letras = 'abcdefghijklmnopqrstuvwxyz';
    const respuesta = [...new Set(palabra.toLowerCase().replace(/[^a-z]/g, ''))].length ===  letras.length;
                      
    console.log( respuesta ? 'La cadena texto es un pangrama' : 'La cadena de texto no es un pangrama');
}

flecha22();

// 25. Verifica si un día de la semana es laborable (de lunes a viernes).
const flecha23 = () =>
{
    const dia = Math.round(Math.random()*5+1);
    console.log( dia >= 1 && dia <= 5 ? `Se trabaja el dia ${dia}` : `No se trabaja el dia ${dia}`);
}

flecha23();

// 26. Determina si un día es fin de semana (sábado o domingo).
const flecha24 = () =>
{
    const dia = Math.round(Math.random()*6+1);
    console.log( dia === 6 || dia === 7 ? `Es fin de semana el dia ${dia}` : `No es fin de semana el dia ${dia}`);
}

flecha24();

// 27. Verifica si un número representa un mes válido (del 1 al 12).
const flecha25 = () =>
{
    const mes = Math.round(Math.random()*20+1);
    console.log( mes >= 1 && mes <= 12 ? `El mes ${mes} es valido` : `El mes ${mes} no es valido`);
}

flecha25();

// 28. Determina si una hora está en el rango de 9 AM a 6 PM.
const flecha26 = () =>
{
    const hora = Math.round(Math.random()*24+1);
    console.log( hora >= 9 && hora <= 18 ? `La hora ${hora} esta en el rango de 9 AM a 18 PM` : `La hora ${hora} no esta en el rango de 9 AM a 18 PM`);
}

flecha26();

// 29. Verifica si una persona es mayor de 65 años o menor de 18 años.
const flecha27 = () =>
{
    const edad = Math.round(Math.random()*100+1);
    console.log( edad > 65 || edad < 18 ? `${edad}---La persona es mayor de 65 años o menor de 18 años` : `${edad}---La persona no es mayor de 65 años o menor de 18 años`);
}

flecha27();

// 30. Determina si un triángulo es equilátero (tres lados iguales).
const flecha28 = () =>
{
    //Datos random con un rango pequeño para el ejemplo
    const lado1 = Math.round(Math.random()*10+1);
    const lado2 = Math.round(Math.random()*10+1);
    const lado3 = Math.round(Math.random()*10+1);
    
    console.log('lado 1: ' + lado1 + ' --- lado 2: ' + lado2 + ' --- lado 3: ' + lado3);
    console.log( lado1 === lado2 && lado2 === lado3 ? `Es triangulo equilatero` : `No es triangulo equilatero`);
}

flecha28();

// 31. Verifica si un triángulo es isósceles (dos lados iguales).
const flecha29 = () =>
{
    //Datos random con un rango pequeño para el ejemplo
    const lado1 = Math.round(Math.random()*10+1);
    const lado2 = Math.round(Math.random()*10+1);
    const lado3 = Math.round(Math.random()*10+1);

    console.log('lado 1: ' + lado1 + ' --- lado 2: ' + lado2 + ' --- lado 3: ' + lado3);
    console.log( lado1 === lado2 || lado2 === lado3 || lado1 === lado3 ? `Es triangulo isósceles` : `No es triangulo isósceles`);
}

flecha29();

// 32. Determina si un triángulo es escaleno (todos los lados diferentes).
const flecha30 = () =>
{
    //Datos random con un rango pequeño para el ejemplo
    const lado1 = Math.round(Math.random()*10+1);
    const lado2 = Math.round(Math.random()*10+1);
    const lado3 = Math.round(Math.random()*10+1);

    console.log('lado 1: ' + lado1 + ' --- lado 2: ' + lado2 + ' --- lado 3: ' + lado3);
    console.log( lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3 ? `Es triangulo escaleno` : `No es triangulo escaleno`);
}

flecha30();

// 33. Verifica si un número es mayor que el doble de otro número.
const flecha31 = () =>
{
    const number = Math.round(Math.random()*100+1);
    const random = Math.round(Math.random()*100+1);

    console.log( number > random*2 ? `El número  ${number} es mayor que el doble de ${random}` : `El número ${number} es menor que el doble de ${random}`);
}

flecha31();

// 34. Determina si la suma de dos números es mayor que 100.
const flecha32 = () =>
{
    const number = Math.round(Math.random()*100+1);
    const number1 = Math.round(Math.random()*100+1);

    console.log( number + number1 > 100 ? `La suma de ${number} y ${number1} es mayor que 100` : `La suma de ${number} y ${number1} es menor que 100`);
}

flecha32();

// 35. Verifica si la resta de dos números es menor que 50.
const flecha33 = () =>
{
    const number = Math.round(Math.random()*100+1);
    const number1 = Math.round(Math.random()*100+1);
    console.log('Resta: ' + (number - number1));
    console.log( number - number1 < 50 ? `La resta de ${number} y ${number1} es menor que 50` : `La resta de ${number} y ${number1} es mayor que 50`);
}

flecha33();

// 36. Determina si un número es el doble del otro número.
const flecha34 = () =>
{
    const number = Math.round(Math.random()*20+1);
    const random = Math.round(Math.random()*20+1);

    console.log( number === random*2 ? `El número ${number} es el doble del otro número ${random}` : `El número ${number} no es el doble del número ${random}`);
}

flecha34();

// 37. Verifica si el doble de un número es igual al triple de otro número.
const flecha35 = () =>
{
    const number = Math.round(Math.random()*20+1);
    const random = Math.round(Math.random()*20+1);

    console.log( number*2 === random*3? `El número ${number} es el triple del otro número ${random}` : `El número ${number} no es el triple del número ${random}`);
}

flecha35();

// 38. Determina si la suma de dos números es igual a 50.
const flecha36 = () =>
{
    const number = Math.round(Math.random()*30+1);
    const number1 = Math.round(Math.random()*30+1);

    console.log( number + number1 === 50 ? `La suma de ${number} y ${number1} es igual a 50` : `La suma de ${number} y ${number1} es diferente a 50`);
}

flecha36();

// 39. Verifica si el producto de dos números es mayor que 500.
const flecha37 = () =>
{
    const number = Math.round(Math.random()*40+1);
    const number1 = Math.round(Math.random()*40+1);
    console.log('Producto: ' + number * number1);

    console.log( number * number1 > 500 ? `El producto de ${number} y ${number1} es mayor a 500` : `El producto de ${number} y ${number1} es menor a 500`);
}

flecha37();

// 40. Determina si la división de dos números es menor que 10.
const flecha38 = () =>
{
    const number = Math.round(Math.random()*40+1);
    const number1 = Math.round(Math.random()*40+1);
    console.log('División: ' + (number / number1).toPrecision(3));

    console.log( (number / number1).toPrecision(3) < 10 ? `La división de ${number} y ${number1} es menor a 10` : `La división de ${number} y ${number1} es mayor a 10`);
}

flecha38();