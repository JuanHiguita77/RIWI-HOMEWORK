'use strict';

//#1

const persona =
{
    nombre: 'Juan',
    edad: 242,
    ciudad:'medallo',
};

console.log(persona);

//#2

persona.ocupacion = 'desarrollador Full stack';

console.log(persona);

//#3

console.log(persona.edad);

//#4

const libro =
{
    titulo: 'pepito volador',
    autor:  'juansito',
    añoPublicacion: 1998,
}

console.log(libro);

//#5

const informacion = {...persona, ...libro};

console.log(informacion);

//#6

persona.edad = 22;

console.log(persona.edad);

//#7

delete libro.autor;

console.log(libro);

//#8

const coche =
{
    modelo: 'ranger',
    marca: 'jeep', 
    año: 2025,
}



//#9

console.log(coche);

//#10

coche['metodo1'] = () => { console.log('JEEP LAS MEJORES CAMIONETAS')}

coche.metodo1();

//#11

const circulo = 
{
    radio: 213.3,
    color: 'amarillo',
}

//#12

const { radio } = circulo;

const area = 3.14 * Math.pow(radio, 2);

console.log(area.toFixed(2));

//#13

const rectangulo = 
{
    ancho: 11, 
    alto: 22,
}

console.log(rectangulo);

//#14

const perimetro = 2 * (rectangulo.ancho + rectangulo.alto)

console.log('perialberto '  + perimetro);

//#15 

const formas = {...circulo, ...rectangulo};

console.log('Formas: ', formas);

//#16

const computadora = 
{
    marca: 'dell',
    modelo: 'intel',
    precio: 1424234,
}

console.log(computadora);

//#17

console.log(computadora.precio);

//#18

computadora.tarjetaGrafica = 'Instalada';

console.log(computadora);

//#19

const mascota =
{
    nombre: 'fuljencio',
    especie: 'chihuahua',
    edad: 11,
}


//#20

console.log(mascota.especie.toUpperCase());

//#21

const fruta =
{
    nombre: 'frutica',
    color: 'verde',
}

console.log(fruta);

//#22

fruta['metodo'] = function()
{
    console.log('La fruta esta bien madurita');
}

const { metodo } = fruta;

metodo();

//#23 

const estudiante =
{
    nombre: 'johan',
    edad: 23,
    calificaciones: [2.0, 6.6, 6.4, 8.4, 3.2, 2.1],
}

console.log(estudiante);

//#24

const promedio = estudiante.calificaciones.reduce((acum, num) => acum + num, 0);

console.log(Math.round(promedio/estudiante.calificaciones.length));

//#25

estudiante.aprobado = 'Aprobo';

console.log(estudiante);

//#26

const bolsa = 
{
    tamaño: 22,
    color: 'red',
}

console.log(bolsa);

//#27

console.log('Tamaño de la bolsa:' + bolsa['tamaño']);

//#28

bolsa['cambioColor'] = () => bolsa.color = 'green';

bolsa.cambioColor();

console.log(bolsa);

//#29

const telefono =
{
    marca: 'samsung', 
    modelo: 'Nubia', 
    sistemaOperativo: 'android 15',
}

console.log(telefono);

//#30

const { sistemaOperativo } = telefono;

console.log(sistemaOperativo);

//#31

telefono['RAM'] = 54;

console.log(telefono.RAM + 'GB');

//#32

const animal = 
{ 
    tipo: 'aves',
    sonido: 'pio pio pio',
}

console.log(JSON.stringify(animal,null,2));

//#33

console.log('Sonido' + animal.sonido);

//#34

animal.metodo = () => { console.log(animal.tipo + ' Y su sonido es: ' + animal.sonido) }

animal.metodo();

//#35

const vuelo = 
{
    aerolinea: 'gallinazo S.A.S',
    numeroDeVuelo: 23,
    horaSalida: 15,
}

console.log(vuelo);

//#36

const { aerolinea, numeroDeVuelo } = vuelo;


console.log('Aerolinea: ' + aerolinea + ' y su numero de vuelo es: ' + numeroDeVuelo);

//#37

vuelo.destino = 'medallo';

console.log(vuelo);

//#38

const jugador =
{
    nombre: 'JFYH',
    equipo: 'verdeAzul',
    posicion: 'Berserker',
}

//#39

console.log('Nombre Player: ' + jugador.nombre + 'Equipo del jugador: ' + jugador.equipo);

//#40

jugador.metodo1 = () => console.log('Posicion en el equipo: ' + jugador.posicion);

const { metodo1 } = jugador;

metodo1();