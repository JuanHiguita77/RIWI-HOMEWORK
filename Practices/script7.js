//Crear 5 ejemplos de cada metodo para arreglos

//push: Agrega uno o más elementos al final de un array y devuelve la nueva longitud del array.

const frutas = ['manzana', 'pera', 'banano'];

//#1

frutas.push('sandia');

console.log( frutas );

//#2

frutas.push([1,2,2,2]);

console.log(frutas);

//#3

frutas.push(4,32,4,234);

console.log(frutas);
//#4
frutas.push({nombre: 'fruticas', precio: 34,});

console.log(frutas);

//#5

frutas.push('hola', 'frutas');

console.log(frutas);

//pop: Elimina el último elemento de un array y lo devuelve.

//#1

const elementDelete = frutas.pop();

console.log('Ultimo elemento borrado: ' + elementDelete);

//shift: Elimina el primer elemento de un array y lo devuelve.

const elementDelete1 = frutas.shift();

console.log('Primer elemento borrado: ' + elementDelete1);

//unshift: Agrega uno o más elementos al inicio de un array y devuelve la nueva longitud del array.

//#1

frutas.unshift(123123,12222,2322,4444);

console.log('Nuevos elementos al principio: ' + frutas);

//#2

frutas.unshift('cadena1', 'cadena2', 'cadena3');

console.log('Nuevos elementos al principio: ' + frutas);

//#3

frutas.unshift([3,3,3,2,2,2], ['cadena1', 'cadena2', 'cadena3']);

console.log('Nuevos elementos al principio: ' + frutas);

//#4

frutas.unshift({nombre: 'fruticasx2', precio: 322224,}, {nombre: 'verduras', precio: 3544,});

console.log('Nuevos elementos al principio: ' + frutas);

//#5

frutas.unshift('string',123,['holaxxx']);

console.log('Nuevos elementos al principio: ' + frutas);

//slice: Devuelve una porción del array entre los índices inicio y fin (sin incluir fin).

const frutasRandom = frutas.slice(3,18);

console.log('Arreglo cortado: ', frutasRandom);

//splice: Cambia el contenido de un array eliminando o reemplazando elementos y/o agregando nuevos elementos.

frutas.splice(3, 1, 'repeticion');

console.log('Con splice: ' , frutas);

//concat: Combina dos o más arrays.

const combinado = frutas.concat(frutasRandom);

console.log(combinado);
