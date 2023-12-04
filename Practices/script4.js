// const arreglo = [1,58,5,"50", "8", 14];

// const nuevoArreglo = arreglo.map(numero => {
//     return parseInt(numero);
// });

// let nMax = nuevoArreglo[0];
// let nMin = nuevoArreglo[0];

// const organizar = (nuevoArreglo) => {

//     for(let i = 1; i < nuevoArreglo.length; i++){

//         if(nuevoArreglo[i] > nMax){
//             nMax = nuevoArreglo[i]
//         };

//         if(nuevoArreglo[i] < nMin){
//             nMin = nuevoArreglo[i];
//         }
//     }
//     return{nMax, nMin};
// }

// let resultado = organizar(nuevoArreglo);
// console.log("El valor mayor es " + resultado.nMax + " el valor menor es " + resultado.nMin);


// Ejemplo de uso:
const miArray = [10, "hola", 5, 8, 'palabramuylarga', "mundo", 3];

const encontrarMayorYMenor = (miArray) => {
    // Inicializar variables para el mayor y el menor
    let mayor = -Infinity;//Se compara desde el menor para encontrar el mayor a este respectivamente
    let menor = Infinity;//Se compara desde el mayor para encontrar el menor a este respectivamente
  
    // Recorrer el array
    for (let i = 0; i < miArray.length; i++) 
    {
      // Verificar si el elemento es un número antes de comparar
      if (typeof miArray[i] === 'number') 
      {
        // Encontrar el mayor
        if (miArray[i] > mayor) 
        {
          mayor = miArray[i];
        }
  
        // Encontrar el menor
        if (miArray[i] < menor) 
        {
          menor = miArray[i];
        }
      }
    }
  
    // Imprimir el mayor y el menor
    console.log("El mayor valor es:", mayor);
    console.log("El menor valor es:", menor);
  };
  
 
encontrarMayorYMenor(miArray);

/*
// Ejemplo de uso:
const miArray = [10, "hola", 5, 8, "mundo", 3,64,54,8,6,-64];

const encontrarMayorYMenor = (arr) => 
{
    // Inicializar variables para el mayor y el menor
    let mayor = -Infinity;
    let menor = Infinity;

    // Recorrer el array y encontrar el mayor y el menor
    for (let valor of arr) 
    {
        if (typeof valor === 'number') 
        {
            mayor = Math.max(mayor, valor);
            menor = Math.min(menor, valor);
        }
    }

    // Imprimir el mayor y el menor
    console.log("El mayor valor es:", mayor);
    console.log("El menor valor es:", menor);
};

encontrarMayorYMenor(miArray);*/
  