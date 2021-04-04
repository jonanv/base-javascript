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
var persona = {
    nombre: "Juana",
    apellido: "Perez",
    edad: 25,
    direccion: {
        pais: "Colombia",
        ciudad: "Manizales",
        edificio: {
            nombre: "Edificio principal",
            telefono: "222-333"
        }
    }
};
// Notacion de punto
console.log(persona);
console.log(persona.apellido);
console.log(persona.direccion);
console.log(persona.direccion.pais);

persona.direccion.zipcode = 170002;
console.log(persona.direccion);
console.log(persona.direccion.zipcode);

var edificio = persona.direccion.edificio;
edificio.piso = "7mo piso";
console.log(persona);

// Notacion corchetes
var campo = "edad";
console.log(persona['direccion']['ciudad']);
console.log(persona[campo]);