/* 
Eres estudiante de Hogwarts, tienes la edad suficiente para entrar a estudiar,
tienes padres, y un linaje de sangre, aun no sabes tu casa, ni tu animal patronus,
también tienes cualidades, que son muy importantes para que el sombrero
seleccionador te asigne una casa.

Crear un objeto, con Nombre, edad, familia, linaje, casa, animal patronus,
cualidades:

Gryffindor ("Valor, fuerza, audacia" Linaje: Mestizo, muggle, Sangre pura )

Hufflepuff("Justicia, Lealtad, Paciencia" Linaje: Mestizo, muggle)

Ravenclaw(“Creatividad, Erudición, Inteligencia" Linaje: Mestizo, muggle, Sangre
pura)

Slytherin ("Ambición, Determinación, Astucia" Linaje: "Sangre Pura")
*/
'use strict';

document.addEventListener('DOMContentLoaded', () =>
{

    const formInit = document.querySelector('#formInit');
    const btnSend = document.querySelector('#btnSend');
    const btnCena = document.querySelector('#cena');
    const btnOscuras = document.querySelector('#defensaArtesOscuras');
    
    const profileImage = document.querySelector('#fotoPerfil');

    const previewImage = document.querySelector('#inforFotoPerfil');
    const previewImage1 = document.querySelector('#inforFotoPerfil1');
    const previewImage2 = document.querySelector('#inforFotoPerfil2');

    //PRIMER INFO ESTUDIANTES
    const infoNombre = document.querySelector('#inforNombre');
    const infoEdad = document.querySelector('#inforEdad');
    const infoFamilia = document.querySelector('#inforFamilia');
    const infoLinaje = document.querySelector('#inforLinaje');
    const infoCualidades = document.querySelector('#inforCualidades');

    //SEGUNDO INFO ESTUDIANTES
    const infoNombre1 = document.querySelector('#inforNombre1');
    const infoEdad1 = document.querySelector('#inforEdad1');
    const infoFamilia1 = document.querySelector('#inforFamilia1');
    const infoLinaje1 = document.querySelector('#inforLinaje1');
    const infoCualidades1 = document.querySelector('#inforCualidades1');
    const infoCasa1 = document.querySelector('#inforCasa1');

    //TERCER INFO ESTUDIANTES
    const infoNombre2 = document.querySelector('#inforNombre2');    
    const infoEdad2 = document.querySelector('#inforEdad2');
    const infoFamilia2 = document.querySelector('#inforFamilia2');
    const infoLinaje2 = document.querySelector('#inforLinaje2');
    const infoCualidades2 = document.querySelector('#inforCualidades2');
    const infoCasa2 = document.querySelector('#inforCasa2');
    const infoAnimalPatronus2 = document.querySelector('#inforAnimalPatronus2');

     
    const estudiante = 
    {
        nombre: null, 
        edad: null, 
        familia: null, 
        linaje: null, 
        casa: null, 
        animalPatronus: null,
        cualidades:null,
        linaje: null,
    }

    document.querySelector('#datosEstudiante').style.display = 'none';
    document.querySelector('#datosEstudiante1').style.display = 'none';
    document.querySelector('#datosEstudiante2').style.display = 'none';

    
    btnSend.addEventListener('click', e =>
    {

        e.preventDefault();

        const datosEstudiante = document.querySelector('#datosEstudiante');
        if(!(/^[A-Za-z]+$/.test(formInit.nombre.value) && /^[A-Za-z\s]+$/.test(formInit.familia.value) && /^[A-Za-z\s]+$/.test(formInit.linaje.value)))
        {
            alert('Ingresaste mal un tipo de dato');
            return;
        }

        estudiante.nombre = formInit.nombre.value;
        estudiante.edad = formInit.edad.value;
        estudiante.familia = formInit.familia.value;
        estudiante.linaje = formInit.linaje.value;
        estudiante.cualidades = formInit.cualidades.value;
        estudiante.casa = asignarCasa();
        estudiante.animalPatronus = defensaContraLasArtesOscuras.generarAnimalPatronus();

        //ASIGNAR DATOS PRIMER INFO
        infoNombre.textContent = formInit.nombre.value;
        infoEdad.textContent = formInit.edad.value;
        infoFamilia.textContent = formInit.familia.value;
        infoLinaje.textContent = formInit.linaje.value;
        infoCualidades.textContent = formInit.cualidades.value;

        //ASIGNAR DATOS SEGUNDO INFO
        infoNombre1.textContent = formInit.nombre.value;
        infoEdad1.textContent = formInit.edad.value;
        infoFamilia1.textContent = formInit.familia.value;
        infoLinaje1.textContent = formInit.linaje.value;
        infoCualidades1.textContent = formInit.cualidades.value;
        infoCasa1.textContent = asignarCasa();

        //ASIGNAR DATOS TERCER INFO
        infoNombre2.textContent = formInit.nombre.value;
        infoEdad2.textContent = formInit.edad.value;
        infoFamilia2.textContent = formInit.familia.value;
        infoLinaje2.textContent = formInit.linaje.value;
        infoCualidades2.textContent = formInit.cualidades.value;
        infoCasa2.textContent = asignarCasa();
        infoAnimalPatronus2.textContent = defensaContraLasArtesOscuras.generarAnimalPatronus();

        formInit.style.display = 'none';
        datosEstudiante1.style.display = 'none';
        datosEstudiante2.style.display = 'none';
        datosEstudiante.style.display = 'block';

    });

    btnCena.addEventListener('click', () =>
    {   
        infoCasa1.style.backgroundColor = '#9c8400';

        setTimeout(() =>
        {
            infoCasa1.style.backgroundColor = 'transparent';
        }, 1500);

        datosEstudiante.style.display = 'none';
        datosEstudiante1.style.display = 'block';
    });

    btnOscuras.addEventListener('click', () =>
    {       
        infoAnimalPatronus2.style.backgroundColor = '#9c8400';

        setTimeout(() =>
        {
            infoAnimalPatronus2.style.backgroundColor = 'transparent';
        }, 1500);

        datosEstudiante1.style.display = 'none';
        datosEstudiante2.style.display = 'block';
    });

    profileImage.addEventListener('change', imagenSubida);

    previewImage1.addEventListener('change', imagenSubida);
    previewImage2.addEventListener('change', imagenSubida);

    function imagenSubida() 
    {
        const file = profileImage.files[0];

        if (file) 
        {
            // Crear un objeto FileReader
            const reader = new FileReader();

            reader.onload = function (e) {
                // Mostrar la imagen
                previewImage.src = e.target.result;
                previewImage.style.display = 'block';

                previewImage1.src = e.target.result;
                previewImage1.style.display = 'block';

                previewImage2.src = e.target.result;
                previewImage2.style.display = 'block';
            };

            // Leer como una URL
            reader.readAsDataURL(file);
        }
    }

    /*
    Es una año difícil en Hogwarts, ya que corren rumores que el innombrable ha vuelto,
    y el y el famoso Harry Potter también ha ingresado contigo ¡¡¡

    tus clases y tus profesores:
    transformaciones: "Profesor Kevin Slughorn",
    herbologia: "Profesor Maria Umbridge",
    pociones: "Profesor Liliana McGonagall",
    encantamientos: "Profesora Jackie",
    defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
    animalesMagicos: "Profesor David Filch",
    historiaDeMagia: "Profesor Ronald Sprout" 

    */

    const clases = 
    {
        transformaciones: "Profesor Kevin Slughorn",
        herbologia: "Profesor Maria Umbridge",
        pociones: "Profesor Liliana McGonagall",
        encantamientos: "Profesora Jackie",
        defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
        animalesMagicos: "Profesor David Filch",
        historiaDeMagia: "Profesor Ronald Sprout", 
    }
    
    /*
    Inicia un nuevo día, es el día del sombrero seleccionador¡¡
    hay una gran cena de bienvenida, estas tu con todos tus compas, según tu linaje y
    cualidades, el sombrero seleccionador te asignara una casa.

    crear un objeto condicional que sirva para escoger la casa al que pertenece el
    estudiante, será condicional según tus cualidades y linaje.

    Gryffindor ("Valor, fuerza, audacia" Linaje: Mestizo, muggle, Sangre pura)

    Hufflepuff("Justicia, Lealtad, Paciencia" Linaje: Mestizo, muggle)

    Ravenclaw(“Creatividad, Erudición, Inteligencia" Linaje: Mestizo, muggle, Sangre
    pura)

    Slytherin ("Ambición, Determinación, Astucia" Linaje: "Sangre Pura") 

    */

    function asignarCasa()
    {
        const cualidades = estudiante.cualidades.toLowerCase();
        const linaje = estudiante.linaje.toLowerCase().trim();

        if(cualidades === 'ambición, determinación, astucia' && linaje === 'sangre pura')
        {
            return 'Slytherin';
        }
        else if(cualidades === 'valor, fuerza, audacia' && linaje === 'sangre pura')
        {
            return 'Gryffindor';
        }
        else if(cualidades === 'justicia, lealtad, paciencia' && linaje === 'mestizo' || linaje === 'muggle')
        {
            return 'Hufflepuff';
        }
        else if(cualidades === 'creatividad, erudición, inteligencia' && linaje === 'mestizo' || linaje === 'muggle' || linaje === 'sangre pura')
        {
            return 'Ravenclaw';
        }
        else
        {
            return 'NO PERTENCES A NINGUNA CASA!!';
        }
    }

    /*

    puedes ir agregando las demás clases, pero es importante que vayas a la clase de
    defensa contra las artes oscuras, para puedas defenderte de los dementores que
    han escapado de Azkaban.

    crear un objeto con nombre defensaContraLasArtesOscuras con la función de
    generar un animal de patronus, lo genere random y llenar la variable, de la
    propiedad animalPatronus.

    */

    const defensaContraLasArtesOscuras =
    {
        generarAnimalPatronus: () =>
        {
            const animales = ['perro', 'gato', 'fenix', 'dragon', 'zorro', 'lobo', 'zancudo'];
            const animalPatronus = Math.round(Math.random() * animales.length);

            return animales[animalPatronus];
        }
    }

});
