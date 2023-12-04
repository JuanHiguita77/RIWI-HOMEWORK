/*
Agregar Producto
Solicita ingresar nombre, categoría, precio, cantidad y marca del nuevo
producto.
Agrega el producto al inventario.
*/

'use strict';

const inventario = [];

function addProduct()
{
    let salida = +prompt('Ingrese el cero para salir o cualquier otro numero para continuar');

    //Pedir datos repetidamente en caso de darlos mal
    while(salida !== 0)
    {
        let name = prompt(`--Agregar producto-- 
        --Ingrese el nombre del producto--`).trim(); 

        do 
        {
            //comprobacion de cadena
            if (/^[A-Za-z]+$/.test(name)) 
            {
                break;
            } 
            else 
            {
                name = prompt('Ingrese nuevamente el nombre del producto');
            }
        } while (true);

        let category = prompt('--Ingrese la categoria del produto--').trim();

        do 
        {
            //comprobacion de cadena
            if (/^[A-Za-z]+$/.test(category)) 
            {
                break;
            } 
            else 
            {
                category = prompt('Ingrese nuevamente la categoria del producto');
            }
        } while (true);

        let brand = prompt('--Ingrese la marca del producto--').trim();

        do 
        {
            //comprobacion de cadena
            if (/^[A-Za-z]+$/.test(brand)) 
            {
                break;
            } 
            else 
            {
                brand = prompt('Ingrese nuevamente la marca del producto');
            }
        } while (true);

        let price = 0;

        do
        {
            price = +prompt('--Ingrese el precio del producto--');
        }while(isNaN(price));

        let cant = 0;

        do
        {
            cant = +prompt('--Ingrese la cantidad del producto--');
        }while(isNaN(cant))


        const producto = 
        {  
            name: name,
            category : category, 
            price: price,
            cant: cant, 
            brand:brand 
        };

        inventario.push(producto);

        salida = +prompt('Ingrese el cero para salir o cualquier otro numero para agregar un nuevo producto');
    }
}

/*
Eliminar Producto
    Muestra la lista de productos.
    Solicita el índice del producto a eliminar.
    Elimina el producto seleccionado del inventario
*/



function deleteProduct()
{
    let index = 0;

    console.log('LISTA DE PRODUCTOS');

    //Mostrar inventario
    inventario.forEach((product, i) =>
    {
        console.log(`${i}--${product.name}`);
    });

    //indice a borrar
    do
    {
        index = +prompt('Ingrese un indice a borrar en el inventario');
    }while(isNaN(index));

    inventario.splice(index,1);

    //Mostrar inventario con elementos disponibles
    inventario.forEach((product, i) =>
    {
        console.log(`${i}--${product.name}`);
    });
}

/*
Modificar Producto
    Muestra la lista de productos.
    Solicita el índice del producto a modificar.
    Permite ingresar el nuevo nombre, categoría, precio, cantidad y marca del
    producto.
    Actualiza los detalles del producto en el inventario.


    //reusar las condiciones del primer metodo y la parte del indice
*/

addProduct();
deleteProduct();

/*
Buscar por Nombre
    Solicita ingresar el nombre del producto a buscar.
    Encuentra y muestra los productos coincidentes.

Filtrar por Rango de Precio
    Solicita ingresar un rango inferior y superior de precios.
    Muestra los productos cuyos precios están dentro del rango especificado.

Crear Reporte de Inventario (Listar todos los productos)
    Muestra un informe detallado de todos los productos en el inventario con
    fecha actual.
    
Salir
    Finaliza la gestión del inventario.
*/

