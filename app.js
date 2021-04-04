// var a = 1;
// var b = "Giovanni";

// console.log(a);
// console.warn(a);
// console.error(a);
// console.info(a);

// 7. Javascript no es asincrono y se ejecuta secuncialmente
// function imprimir() {
//     for (let i = 0; i < 4000; i++) {
//         console.log('Imprimio');
//     }
// }

// function presionoClick() {
//     console.log('Click en boton');
// }

// imprimir();

// 9. Escritura dinamica - Tipos primitivos
// var num = 10;
// var str = "texto";
// var bol = true;
// var und = undefined;
// var nul = null;

// var obj = {
//     numero: 10,
//     texto: "Nuevo texto",

//     objHijo: {
//         numero: 10,
//         texto: "Nuevo texto"
//     }
// };

// console.log(obj);

// 10. Por valor y por referencia
// Por valor (los valores primitivos siempre pasan por valor y crean su propio espacio de memoria)
// var a = 10;
// var b = a;

// console.log("a: ", a);
// console.log("b: ", b);

// a = 20;

// console.log("a: ", a);
// console.log("b: ", b);

// // Por referencia (Los objetos siempre pasan por referencia, comparten el mismo espacio de memoria)
// var c = {
//     nombre: "Juana"
// };
// var d = c;

// console.log("c: ", c);
// console.log("d: ", d);

// c.nombre = "Maria";

// console.log("c: ", c);
// console.log("d: ", d);

// 11. Notacion de punto y corchetes
// var persona = {
//     nombre: "Juana",
//     apellido: "Perez",
//     edad: 25,
//     direccion: {
//         pais: "Colombia",
//         ciudad: "Manizales",
//         edificio: {
//             nombre: "Edificio principal",
//             telefono: "222-333"
//         }
//     }
// };
// // Notacion de punto
// console.log(persona);
// console.log(persona.apellido);
// console.log(persona.direccion);
// console.log(persona.direccion.pais);

// persona.direccion.zipcode = 170002;
// console.log(persona.direccion);
// console.log(persona.direccion.zipcode);

// var edificio = persona.direccion.edificio;
// edificio.piso = "7mo piso";
// console.log(persona);

// // Notacion corchetes
// var campo = "edad";
// console.log(persona['direccion']['ciudad']);
// console.log(persona[campo]);

// 12. Funciones
// function primeraFuncion() {
//     console.log("Invocada");
// }
// var miFuncion = primeraFuncion; // Se pasa el contexto de la funcion, no es invocada
// console.log(miFuncion);
// console.log(miFuncion()); // Cuando tiene los parentesis es invocada

// 13. Parametro de las funciones
// // Funcion con parametros
// function imprimir(nombre, apellido) {
//     // if (apellido === undefined) {
//     //     apellido = "XXX";
//     // }
//     apellido = apellido || "XXX";
//     console.log(nombre + " " + apellido);
// }

// var nombre = "Pedro"; // Variable explicita
// imprimir("Juan"); // Variable anonima (Se crea al momento de llamar la funcion)(variable implicita)

// // Funcion con objetos
// function imprimir(persona) {
//     console.log(persona.nombre + " " + persona.apellido);
// }

// var persona = {
//     nombre: "Juan",
//     apellido: "Silva"
// }
// imprimir(persona);

// // Funcion con funciones anonimas
// function imprimir(fn) {
//     fn();
// }

// var miFuncion = function() {
//     console.log("Funcion anonima");
// }

// imprimir(miFuncion);

// 14. Retorno de las funciones
// Funciones que devuelven number
function obtenerAleatorio() {
    return Math.random();
}

// Funciones que devuelven string
function obtenerNombre() {
    return "Juan";
}

// Funciones que devuelven boolean
function esMayor05() {
    if (obtenerAleatorio() > 0.5) {
        return true;
    } else {
        return false;
    }
}

if (esMayor05()) {
    console.log("Es mayor a 0.5");
} else {
    console.log("Es menor a 0.5");
}

// Funciones que devuelven objetos
function crearPersona(nombre, apellido) {
    return {
        nombre,
        apellido
    }
}
var persona = crearPersona("Juan", "Perez");
console.log(persona);

// Funciones que devuelven funciones anonimas
function creaFuncion() {
    return function(nombre) {
        console.log("Me creo " + nombre);
        return function() {
            console.log("Segunda funcion");
        }
    }
}
var nuevaFuncion = creaFuncion();
var segundaFuncion = nuevaFuncion(persona.nombre);
segundaFuncion();