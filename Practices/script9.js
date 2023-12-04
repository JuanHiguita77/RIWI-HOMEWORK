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

    inventario.forEach((product, i) =>
    {
        console.log(`${i}--${product.name}`);
    });

    do
    {
        index = +prompt('Ingrese un indice a borrar en el inventario');
    }while(isNaN(index))
}

addProduct();
deleteProduct();



