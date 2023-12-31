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


const estudiante = 
{
    nombre: 'Juan', 
    edad: 22, 
    familia: 'Potter', 
    linaje: 'sangre pura', 
    casa: '', 
    animalPatronus: '',
    cualidades:'ambición, determinación, astucia',
    linaje: 'sangre pura',
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
    const linaje = estudiante.linaje.toLowerCase();

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
        return '';
    }
}

estudiante.casa = asignarCasa();

console.log(`A ${estudiante.nombre} se le asigna la casa ${asignarCasa()}`);
console.log(estudiante);

/*
primer día de clases: vas temprano a clase de transformaciones, en clase de
transformaciones que es un objeto, con transformaciones con boggarts, 

«Altera la habilidad de un boggart para cambiar de forma y provoca risa para derrotarlo.»
esto se logra con el encantamiento "Riddikulus".

- Definir la clase de Transformaciones
En este paso, estás creando un objeto llamado claseTransformaciones que
representa la clase de Transformaciones. 

Estableces el nombre del profesor, el horario y una propiedad para rastrear la transformación de los boggarts.

- Paso 2: Crear una función para realizar la transformación con "Riddikulus"
Aquí defines una función realizarTransformacionRiddikulus dentro de
claseTransformaciones. 

Esta función verifica si hay un boggart presente y, si es así, realiza la transformación con el encantamiento "Riddikulus".

- Paso 3: Crear una función para enfrentar un boggart
Aquí defines otra función enfrentarBoggart dentro de
claseTransformaciones. 

Esta función toma un boggart como argumento, muestra un mensaje con la forma original del boggart, realiza la transformación y muestra el resultado.

- Paso 4: Uso y llamada a las funciones

En este paso, creas un objeto boggartEjemplo y luego llamas a la función
enfrentarBoggart de claseTransformaciones para enfrentar el boggart. 

*/

const claseTransformaciones = 
{
    nombreProfesor: clases.transformaciones,
    horario: 8,
    propiedadRastreadora: 'rastrerus',

    realizarTransformacionRiddikulus: () =>
    {
        if(boggartEjemplo)
        {
            console.log('Usamos el hechizo Riddikulus');
        }
        else
        {
            console.log('No usamos ningun hechizo');
        }
    },

    enfrentarBoggart: (boggartEjemplo) =>
    {
        console.log(boggartEjemplo.formaOriginal);
    }
}

const boggartEjemplo = 
{
    formaOriginal: 'Forma original del Boggart',
    formaTransformada: 'Forma transformada del Boggart',
}

claseTransformaciones.enfrentarBoggart(boggartEjemplo);
claseTransformaciones.realizarTransformacionRiddikulus();

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
const defense = defensaContraLasArtesOscuras.generarAnimalPatronus();

estudiante.animalPatronus = defense;
console.log('El animal que generaste con tu maximo poder fue un', defense);

//Mostrar información del estudiante con los cambios realizados a su objeto
console.log(JSON.stringify(estudiante, null, 2));


