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
        --Ingrese el nombre del producto--`).trim().toLowerCase(); 

        do 
        {
            //comprobacion de cadena
            if (/^[A-Za-z]+$/.test(name)) 
            {
                break;
            } 
            else 
            {
                name = prompt('Ingrese nuevamente el nombre del producto').trim().toLowerCase();
            }
        } while (true);

        let category = prompt('--Ingrese la categoria del produto--').trim().toLowerCase();

        do 
        {
            //comprobacion de cadena
            if (/^[A-Za-z]+$/.test(category)) 
            {
                break;
            } 
            else 
            {
                category = prompt('Ingrese nuevamente la categoria del producto').trim().toLowerCase();
            }
        } while (true);

        let brand = prompt('--Ingrese la marca del producto--').trim().toLowerCase();

        do 
        {
            //comprobacion de cadena
            if (/^[A-Za-z]+$/.test(brand)) 
            {
                break;
            } 
            else 
            {
                brand = prompt('Ingrese nuevamente la marca del producto').trim().toLowerCase();
            }
        } while (true);

        let price = 0;

        do
        {
            price = +prompt('--Ingrese el precio del producto--').trim();
        }while(isNaN(price));

        let cant = 0;

        do
        {
            cant = +prompt('--Ingrese la cantidad del producto--').trim();
        }while(isNaN(cant));


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
        index = +prompt('Ingrese un indice a borrar en el inventario').trim();
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

*/

function modifyProduct()
{
    //mostrar inventario con elementos disponibles
    console.log('LISTA DE PRODUCTOS');

    inventario.forEach((product, i) =>
    {
        console.log(`${i}--${product.name}`);
    });

    let index;

    //indice a modificar
    do
    {   
        index = +prompt('ingrese un indice a buscar en el inventario');
    }while(isNaN(index));

    //Nuevos datos para modificarlos usando las misma validaciones
    inventario[index].name = prompt(`--Modificar producto-- 
        --Ingrese el nuevo nombre del producto--`).trim().toLowerCase();;

        do 
        {
            //comprobacion de cadena
            if (/^[A-Za-z]+$/.test(inventario[index].name)) 
            {
                break;
            } 
            else 
            {
                inventario[index].name = prompt('Ingrese nuevamente el nuevo nombre del producto').trim().toLowerCase();
            }
        } while (true);

        inventario[index].category = prompt('--Ingrese la nueva categoria del produto--').trim().toLowerCase();

        do 
        {
            //comprobacion de cadena
            if (/^[A-Za-z]+$/.test(inventario[index].category)) 
            {
                break;
            } 
            else 
            {
                inventario[index].category = prompt('Ingrese nuevamente la nueva categoria del producto').trim().toLowerCase();
            }
        } while (true);

        inventario[index].brand = prompt('--Ingrese la nueva marca del producto--').trim();

        do 
        {
            //comprobacion de cadena
            if (/^[A-Za-z]+$/.test(inventario[index].brand)) 
            {
                break;
            } 
            else 
            {
                inventario[index].brand = prompt('Ingrese nuevamente la nueva marca del producto').trim().toLowerCase();
            }
        } while (true);

        inventario[index].price = 0;

        do
        {
            inventario[index].price = +prompt('--Ingrese el nuevo precio del producto--').trim();
        }while(isNaN(inventario[index].price));

        inventario[index].cant = 0;

        do
        {
            inventario[index].cant = +prompt('--Ingrese la nueva cantidad del producto--').trim();
        }while(isNaN(inventario[index].cant))

        //Nueva lista con los datos actualizados
        console.log('LISTA DE PRODUCTOS');

        inventario.forEach((product, i) =>
        {
            console.log(`${i}--${product.name}`);
        });
}


function searchProduct()
{

}

addProduct();
//deleteProduct();
modifyProduct();


