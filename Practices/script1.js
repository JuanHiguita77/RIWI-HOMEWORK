document.addEventListener('DOMContentLoaded', ()=>
{
    //#1 Declara una variable num con un valor numérico y luego crea una nueva variable llamada newNum utilizando la función Number() para convertir num a un nuevo número. Muestra en consola newNum.

    let num = 10;

    function number(num){
        const newNum = num * 6;
        console.log(num);
    };

    Number(num);

    //#2 Muestra en consola el valor máximo que puede ser representado en JavaScript utilizando Number.MAX_VALUE.

    console.log(Number.MAX_VALUE);

    //#3 Muestra en consola el valor mínimo positivo que puede ser representado en JavaScript utilizando Number.MIN_VALUE

    console.log(Number.MIN_VALUE);

    //#4 Muestra en consola el valor máximo seguro que puede ser representado con precisión en JavaScript utilizando Number.MAX_SAFE_INTEGER.

    console.log(Number.MAX_SAFE_INTEGER);

    //#5 Muestra en consola el valor mínimo seguro que puede ser representado con precisión en JavaScript utilizando Number.MIN_SAFE_INTEGER.

    console.log(Number.MIN_SAFE_INTEGER);

    //#6 Declara una variable num y utiliza el método Number.isFinite() para comprobar si num es un número finito. Muestra el resultado en consola.

    const num1 = 54158151;
    console.log(Number.isFinite(num1));

    //#7 : Declara una variable num y utiliza el método Number.isInteger() para comprobar si num es un número entero. Muestra el resultado en consola.

    const num2 = 54852;
    console.log(Number.isInteger(num2));

    //#8 Declara una variable num y utiliza el método Number.isSafeInteger() para comprobar si num es un número seguro para representar con precisión en JavaScript. Muestra el resultado en consola.

    const num3 = 453548;
    console.log(Number.isSafeInteger(num3));

    //#9 Declara una variable num y utiliza el método .toExponential() para mostrar su representación en notación exponencial con un número específico de dígitos decimales. Muestra el resultado en consola

    const num4 = 468524;
    console.log(num4.toExponential());

    //#10 Declara una variable num y utiliza el método .toFixed() para mostrar su representación con un número específico de dígitos decimales. Muestra el resultado en consola.

    const num5 = 468524;
    console.log(num5.toFixed());

    //#11 Declara una variable num y utiliza el método .toPrecision() para mostrar su representación con una longitud total específica. Muestra el resultado en consola.

    const num6 = 45848;
    console.log(num6.toPrecision());

    //#12  Declara una variable text con un valor numérico en formato de cadena y utiliza Number.parseInt() para convertirlo a un número entero. Muestra el resultado en consola. 

    let text = "101010";
    console.log(Number.parseInt(text));

    //#13  Declara una variable text con un valor numérico en formato de cadena y utiliza Number.parseInt() con una base específica para convertirlo a un número entero. Muestra el resultado en consola.

    let text1 = "101010";
    console.log(Number.parseInt(text1, 2));

    //#14 Declara una variable text con un valor numérico en formato de cadena y utiliza Number.parseFloat() para convertirlo a un número de punto flotante. Muestra el resultado en consola.

    const text2 = "12345";
    console.log(Number.parseFloat(text2));

    //#15 Declara una variable text con un valor numérico en formato de cadena y utiliza Number.parseFloat() con una base específica para convertirlo a un número de punto flotante.

    const text3 = "1586";
    console.log(Number.parseFloat(text3, 10));

    //#16 Declara una variable num y utiliza el método .toString() para convertirlo a una cadena. Muestra el resultado en consola. 

    const num7 = 15;
    console.log(num7.toString());

    //#17 Declara una variable num con un valor negativo y utiliza Math.abs() para obtener su valor absoluto. Muestra el resultado en consola. 

    const num8 = -14;
    console.log(Math.abs(num8));

    //#18 Declara una variable num con un valor y utiliza Math.sign() para obtener su signo. Muestra el resultado en consola. 

    const num9 = 12;
    console.log(Math.sign(num9));

    //#19 Declara una variable num y utiliza Math.exp() para calcular la exponenciación de num. Muestra el resultado en consola.

    const num10 = 2;
    console.log(Math.exp(num10));

    //#20  Declara una variable num y utiliza Math.expm1() para calcular e^x - 1. Muestra el resultado en consola.

    let num11 = 157;
    console.log(Math.expm1(num11));

    //#21  Utiliza Math.max() para encontrar el valor máximo entre varios números. Muestra el resultado en consola.
    let resul = Math.max(1, 15, 48 ,2);
    console.log(resul);

    //#22 Utiliza Math.min() para encontrar el valor mínimo entre varios números. Muestra el resultado en consola. 

    let resul1 = Math.min(1, 15, 48 ,2);
    console.log(resul1);

    //#23 Utiliza Math.pow() para calcular la potencia de un número. Muestra el resultado en consola. 
    const base = 3;
    console.log(Math.pow(base, 3));

    //#24 Utiliza Math.sqrt() para calcular la raíz cuadrada de un número. Muestra el resultado en consola. 

    let raiz = 25;
    console.log(Math.sqrt(raiz));

    //#25  Utiliza Math.cbrt() para calcular la raíz cúbica de un número. Muestra el resultado en consola. 
    let raizC = 25;
    console.log(Math.cbrt(raizC));

    //#26  Utiliza Math.imul() para calcular la multiplicación de dos números como un entero de 32 bits. Muestra el resultado en consola.

    let nume = 12;
    let nume1 = 5;
    console.log(Math.imul(nume, nume1));

    //#27 : Utiliza Math.clz32() para contar los ceros principales de un número en su representación de 32 bits. Muestra el resultado en consola.
    
    let contar = 1040450600307;
    console.log(Math.clz32(contar));

    //#28  Utiliza Math.random() para generar un número pseudoaleatorio entre 0 (inclusive) y 1 (exclusive).  

    let numeroA = Math.random();
    console.log(numeroA);

    //#29 Utiliza Math.round() para redondear un número al entero más cercano. Muestra el resultado en consola.

    let numeroR = 1.78;
    console.log(Math.round(numeroR));

    //#30  Utiliza Math.ceil() para redondear hacia arriba un número al entero más cercano. Muestra el resultado en consola

    let numeroRA = 16.8;
    console.log(Math.ceil(numeroRA));

    //#31 Utiliza Math.floor() para redondear hacia abajo un número al entero más cercano. Muestra el resultado en consola

    let numeroRhA = 17.8;
    console.log(Math.floor(numeroRhA));


    //#32  Utiliza Math.fround() para convertir un número a su representación de punto flotante de 32 bits más cercana. Muestra el resultado en consola.

    let numeroRp = 195.8;
    console.log( Math.fround(numeroRp));

    //#33 : Utiliza Math.trunc() para truncar la parte decimal de un número. Muestra el resultado en consola. 

    let numeroRt = 164.8;
    console.log(Math.trunc(numeroRt));

    //#34  Utiliza Math.sin() para calcular el seno de un ángulo en radianes. Muestra el resultado en consola. 

    let anguloEnRadianes = Math.PI / 4; 
    let senoDelAngulo = Math.sin(anguloEnRadianes);
    console.log(senoDelAngulo);


    //#35 Utiliza Math.cos() para calcular el coseno de un ángulo en radianes. Muestra el resultado en consola. 

    let angulocEnRadianes = Math.PI / 5; 
    let cosenoDelAngulo = Math.cos(angulocEnRadianes);
    console.log(cosenoDelAngulo);

    //#36  Utiliza Math.tan() para calcular la tangente de un ángulo en radianes. Muestra el resultado en consola.

    let angulotEnRadianes = Math.PI / 6; 
    let tangenteDelAngulo = Math.tan(angulotEnRadianes);
    console.log(tangenteDelAngulo);

    //#37  Utiliza Math.hypot() para calcular la longitud de la hipotenusa de un triángulo a partir de sus lados. Muestra el resultado en consola. 

    let a = 4;
    let b = 7;
    console.log( Math.hypot(a, b));

    //#38  Declara dos variables numéricas y realiza una operación aritmética que involucre .toFixed() y Number.parseInt(). Muestra el resultado en consola.

    let numero1 = 10.56;
    let numero2 = 5.32;
    let resultado = Number.parseInt((numero1 + numero2).toFixed(2));
    console.log(resultado);

    //#39 Declara dos variables numéricas en formato de cadena y realiza una operación aritmética que involucre Number.parseFloat() y .toPrecision(). Muestra el resultado en consola.

    let cadena_numero1 = "15.7334";
    let cadena_numero2 = "1487.44";

    let numero_1 = Number.parseFloat(cadena_numero1);
    let numero_2 = Number.parseFloat(cadena_numero2);

    console.log((numero_1 + numero_2).toPrecision(2));

    //#40  Utiliza Math.random() para generar un número y realiza una operación aritmética que involucre Math.abs(). Muestra el resultado en consola. 

    let var1 =  Math.random();
    let resultado1 =  23 + Math.abs(var1);
    console.log (resultado1);

    //#41 Utiliza Math.random() para generar un número y realiza una operación aritmética que involucre .toString(). Muestra el resultado en consola.

    const var2 =  Math.random();
    console.log ((var2 * 65465).toString());

    //#42  Utiliza Math.random() para generar un número y realiza una operación aritmética que involucre Math.exp(). Muestra el resultado en consola. 

    let var3 =  Math.random();
    let resultado3 =  555 % Math.exp(var3);
    console.log (resultado3);

    //#43 Math.clz32(x): Utiliza Math.sqrt() y Math.clz32() para realizar una operación aritmética. Muestra el resultado en consola.

    let numero8 = 16;
    let raizCuadrada = Math.sqrt(numero8);
    let cerosPrincipales = Math.clz32(raizCuadrada);
    let resultado4 = raizCuadrada + cerosPrincipales;

    console.log("Raíz Cuadrada: " + raizCuadrada);
    console.log("Ceros Principales: " + cerosPrincipales);
    console.log("Resultado: " + resultado4);


    //#44 Declara una variable x con un valor y asigna ese valor a otra variable y. Muestra el valor de y en consola. 

    const x = 2432;
    const y = x;
    console.log(y);

    //#45  Declara dos variables numéricas y utiliza el operador += para sumar el valor de la segunda variable a la primera. Muestra el resultado en consola.

    let numer = 14;
    let numer2 = 19;
    console.log(numer += numer2);

    //#46  Declara dos variables numéricas y utiliza el operador += para incrementar el valor de la primera variable sumándole el valor de la segunda. Muestra el resultado en consola. 

    let numer1 = 18;
    let numer3 = 190;
    console.log(numer1 += numer3);

    //#47  Declara dos variables numéricas y utiliza el operador -= para decrementar el valor de la primera variable restando el valor de la segunda. Muestra el resultado en consola.

    let numer_3 = 18;
    let numer4 = 90;
    console.log(numer_3 -= numer4);

    //#48 Declara dos variables numéricas y utiliza el operador *= para multiplicar el valor de la primera variable por el valor de la segunda. Muestra el resultado en consola. 

    let numer_4 = 18;
    let numer5 = 890;
    console.log(numer_4 *= numer5);

    //#49 Declara dos variables numéricas y utiliza el operador /= para dividir el valor de la primera variable por el valor de la segunda. Muestra el resultado en consola

    let numer_5 = 188;
    let numer6 = 80;
    console.log(numer_5 /= numer6);

    //#50  Declara dos variables numéricas y utiliza el operador %= para calcular el residuo de la división de la primera variable por la segunda. Muestra el resultado en consola. 

    let numer_6 = 188;
    let numer7 = 80;
    console.log(numer_6 %= numer7);


    //#51  Declara una variable numérica y utiliza el operador **= para elevarla a una potencia específica. Muestra el resultado en consola. 

    let vanu = 5;
    console.log(vanu **= 4);

    //#52  Declara una variable numérica y utiliza el operador ++ para incrementar su valor en 1. Muestra el resultado en consola.

    let contador = 0;
    console.log(++contador);
    console.log(contador++);

    //#53  Declara una variable numérica y utiliza el operador -- para decrementar su valor en 1. Muestra el resultado en consola.

    let decre = 4;
    console.log(--decre);
    console.log(decre--);

    //#54  Declara una variable num con un valor numérico. Utiliza el operador unario de incremento previo (++num) para aumentar el valor de num en 1 antes de asignarlo a la variable result. Muestra el nuevo valor de result en la consola. 

    var num12 = 47;
    ++num12;
    var resultFull = num12;
    console.log(resultFull);

    //#55  Declara una variable num con un valor numérico. Utiliza el operador unario de decremento previo (--num) para disminuir el valor de num en 1 antes de asignarlo a la variable result. Muestra el nuevo valor de result en la consola.

    let num14 = 18;
    --num14;
    let result14 = num14;
    console.log(result14);

    //#56 Declara una variable num con un valor numérico. Utiliza el operador unario de resta (-num) para obtener el opuesto numérico de num y asigna el resultado a la variable result. Muestra el valor resultante en la consola.

    let num15 = -18;
    let result15 = -num15;
    console.log(result15);
});