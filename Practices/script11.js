
'use strict';

document.addEventListener('DOMContentLoaded', () =>
{

    /*
    Ejercicio 1: Cambiar el Texto
    Crea una página HTML con un párrafo (<p>) y un botón (<button>). 
    Utiliza JavaScript para cambiar el texto del párrafo cuando se hace clic en el botón.
    */

    function cambiarTexto()
    {
        
        const boton1 = document.querySelector('#primerBoton');

        boton1.addEventListener( 'click', () =>
        {
            const parrafo1 = document.querySelector('#primerParrafo');
            parrafo1.textContent = 'NUEVO TEXTO CAMBIADO';
        });
    }
    cambiarTexto();

    /*Ejercicio 2: Cambiar el Estilo
    Crea una página HTML con un elemento (puede ser un párrafo, div, etc.) y 
    dos botones. Utiliza JavaScript para cambiar el estilo del elemento cuando se 
    hace clic en cada botón. Puedes cambiar el color, el tamaño de fuente, o cualquier
    otra propiedad de estilo. */

    const boton2 = document.querySelector('#segundoBoton');

    boton2.addEventListener('click', ()=>
    {
        const parrafo1 = document.querySelector('#primerParrafo');
        parrafo1.style.fontSize = '40px';
        parrafo1.style.fontWeight = 'bold';
    });

    /**Ejercicio 3: Lista Dinámica
    Crea una página HTML con una lista (<ul>) vacía y un input junto con un botón.
    Al hacer clic en el botón, agrega un nuevo elemento a la lista con el texto 
    ingresado en el input. */

    const lista = document.querySelector('#lista1');
    const boton3 = document.querySelector('#tercerBoton');

    boton3.addEventListener('click', () =>
    {
        const elementoLista = document.createElement('li');
        elementoLista.textContent = 'Elemento nuevo';

        lista.appendChild(elementoLista);
    });

    /*Ejercicio 4: Ocultar/Mostrar Elementos
    Crea una página HTML con un elemento (puede ser un div, imagen, etc.) y 
    dos botones que digan "Mostrar" y "Ocultar". Utiliza JavaScript para ocultar 
    y mostrar el elemento cuando se hace clic en los botones. */

    const caja1 = document.querySelector('#primerDiv');
    const boton4 = document.querySelector('#cuartoBoton');
    const boton5 = document.querySelector('#quintoBoton');

    boton4.addEventListener('click', ()=>
    {
        caja1.style.display = 'block';
    });

    boton5.addEventListener('click', ()=>
    {
        caja1.style.display = 'none';
    });

    /*Ejercicio 5: Validación de Formulario
    Crea un formulario HTML simple con campos de entrada y un botón de enviar. 
    Utiliza JavaScript para validar el formulario (por ejemplo, asegúrate de que 
    todos los campos estén completos antes de enviar). */

    const boton6 = document.querySelector('#send');

    boton6.addEventListener('click', () =>
    {
        const name = document.querySelector('#nombre').value;
        const apellido = document.querySelector('#apellido').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        if(name === '')
        {
            alert('Ingresar nombre pls');
            return false;
        }

        if(apellido === '')
        {
            alert('Ingresar apellido pls');
            return false;
        }

        if(email === '')
        {
            alert('Ingresar correo pls');
            return false;
        }        
        
        if(password === '')
        {
            alert('Ingresar password pls');
            return false;
        }
    });

    /*Ejercicio 6: Galería de Imágenes
    Crea una galería de imágenes con miniaturas. Al hacer clic en una miniatura,
    muestra la imagen correspondiente en tamaño completo. */

    const gallery = document.querySelectorAll('#gallery img');
    console.log(gallery)

    gallery.forEach(img =>
    {
        img.addEventListener('click', ()=>
        {   
            img.style.width = '90%';
            img.style.height = '90%';
        });
    });

});

