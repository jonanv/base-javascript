// var a = 1;
// var b = "Giovanni";

// console.log(a);
// console.warn(a);
// console.error(a);
// console.info(a);



// // 7. Javascript no es asincrono y se ejecuta secuncialmente
// function imprimir() {
//     for (let i = 0; i < 4000; i++) {
//         console.log('Imprimio');
//     }
// }

// function presionoClick() {
//     console.log('Click en boton');
// }

// imprimir();



// // 9. Escritura dinamica - Tipos primitivos
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



// // 10. Por valor y por referencia
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



// // 11. Notacion de punto y corchetes
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



// // 12. Funciones
// function primeraFuncion() {
//     console.log("Invocada");
// }
// var miFuncion = primeraFuncion; // Se pasa el contexto de la funcion, no es invocada
// console.log(miFuncion);
// console.log(miFuncion()); // Cuando tiene los parentesis es invocada



// // 13. Parametro de las funciones
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



// // 14. Retorno de las funciones
// // Funciones que devuelven number
// function obtenerAleatorio() {
//     return Math.random();
// }

// // Funciones que devuelven string
// function obtenerNombre() {
//     return "Juan";
// }

// // Funciones que devuelven boolean
// function esMayor05() {
//     if (obtenerAleatorio() > 0.5) {
//         return true;
//     } else {
//         return false;
//     }
// }

// if (esMayor05()) {
//     console.log("Es mayor a 0.5");
// } else {
//     console.log("Es menor a 0.5");
// }

// // Funciones que devuelven objetos
// function crearPersona(nombre, apellido) {
//     return {
//         nombre,
//         apellido
//     }
// }
// var persona = crearPersona("Juan", "Perez");
// console.log(persona);

// // Funciones que devuelven funciones anonimas
// function creaFuncion() {
//     return function(nombre) {
//         console.log("Me creo " + nombre);
//         return function() {
//             console.log("Segunda funcion");
//         }
//     }
// }
// var nuevaFuncion = creaFuncion();
// var segundaFuncion = nuevaFuncion(persona.nombre);
// segundaFuncion();



// // 15. Funciones en primera clase
// // Las funciones son objetos



// // 16. Metodos y el objeto this (Objeto con funciones anonimas)
// var persona = {
//     nombre: "Maria",
//     apellido: "Silva",
//     imprimirNombre: function() {
//         console.log(this); // this Objeto persona
//     },
//     direccion: {
//         pais: "Colombia",
//         obtenerPais: function() {
//             console.log(this); // this Objeto direccion
//             var self = this;

//             var nuevaDireccion = function() {
//                 console.log(this); // Hace referencia al Objeto Window
//                 console.log(self); // Hace referencia al Objeto direccion
//                 console.log(self.pais); // Hace referencia al Objeto direccion por medio de la variable this que apunta al objeto direccion
//             }
//             nuevaDireccion();
//         }
//     }
// };

// persona.imprimirNombre();
// persona.direccion.obtenerPais();



// // 17. La palabra reservada new
// // Persona persona = new Persona(); // Declaracion en Java
// // var persona = new Persona(); // Declaracin en JavaScript

// // Funcion de primera clase (Trabaja como una clase)
// function Persona() {
//     this.nombre = "Juan";
//     this.apellido = "Vangioni";
//     this.edad = 30;

//     this.nombreCompleto = function() {
//         return this.nombre + " " + this.apellido;
//     }
// }

// var persona = new Persona(); // Crea el objeto persona con sus atributos
// // var persona = Persona(); // Imprime lo que devuelva el metodo Persona y los this del metodo se los agrega al objeto window
// console.log(persona);
// console.log(persona.nombreCompleto());



// // 19. Prototipos - Prototype
// function Persona() {
//     this.nombre = "Giovanni";
//     this.apellido = "Vargas";
//     this.edad = 29;
//     this.pais = "Colombia";
// }

// // Son utilizados para no cargar esta informacion en memoria, solo se carga una vez, para el caso que se definan 1000 objetos tipo persona
// Persona.prototype.imprimirInfo = function() {
//     console.log(this.nombre + " " + this.apellido + "(" + this.edad + ")");
// };

// var gio = new Persona();
// console.log(gio);
// gio.imprimirInfo();

// // Agrega una nueva funcion al wrapper Number en el protipo, al momento de crear un numero este puede acceder al metodo
// Number.prototype.esPositivo = function() {
//     if (this > 0) {
//         return true;
//     } else {
//         return false;
//     }
// }



// // 20. Funciones anonimas
// // Funcion anonima que esta dentro de un contexto y es invocada al final con ()
// (function() {
//     var a = 10;
//     console.log(a);

//     function cambiarA() {
//         a = 20;
//     }

//     cambiarA();

//     console.log(a);
// })();

// function ejecutarFuncion(fn) {
//     if (fn() === 1) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(
//     ejecutarFuncion(function() {
//         console.log("Funcion anonima ejecutada!");
//         return 0;
//     })
// );



// // 21. Funciones typeof e instanceof
// function identifica(param) {
//     // console.log(typeof param);
//     // typeof (Tipo de parametro, tipo primitivo, funcion, objeto)
//     if (typeof param == "function") {
//         param();
//     } else {
//         console.log(param);
//     }

//     // instanceof (Compara dos objetos, si el parametro es de tipo Persona)
//     console.log(param instanceof Persona);
// }

// identifica(1);

// function Persona() {
//     this.nombre = "Giovanni";
//     this.edad = "29";
// }

// var giovanni = new Persona();

// identifica(giovanni);

// var fn = function() {
//     console.log("Funcion ejecutada");
// }

// identifica(fn);



// // 22. Arreglos
// var arr = [5, 4, 3, 2, 1];
// console.log(arr);
// console.log(arr[0], arr[4], arr[5]);

// // // reverse = Se invierte el arreglo
// arr.reverse();
// console.log(arr);

// // // map = ejecuta un funcion contra cada uno de los elementos de arreglo sin ejecutar un bucle
// arr = arr.map(function(elem) {
//     return elem *= elem;
// });
// console.log(arr);

// arr = arr.map(Math.sqrt);
// console.log(arr);

// // // join = convierte el arreglo a string o se envia separador de cada elemento e imprime el arreglo en string
// arr = arr.join("|");
// console.log(arr);

// // // split = regresa un arreglo o se envia parametro para cortar el arreglo
// arr = arr.split("|");
// console.log(arr);

// // // push = agrega un nuevo elemento al arreglo
// arr.push("6");
// console.log(arr);

// // // unshift = elimina el elemento en la primera posicion
// arr.unshift("0");
// console.log(arr);

// // // toString = convierte a texto, es mas rapido que el join, pero no envia parametros
// console.log(arr.toString());

// // // pop = elimina el ultimo elemento del arreglo y devuelve que posicion era
// var elimine = arr.pop();
// console.log(elimine);

// // // splice = elimina elementos del arreglo de acuerdo a su posicion, tambien cuentos se quieren eliminar, tambien permite reemplar elementos en la posicion
// arr.splice(1, 1, "10");
// console.log(arr);

// // // slice = retorna una porcion del arreglo desde su posicion inicial a hasta donde quiere cortar el arreglo
// arr = arr.slice(0, 2); // primer parametro desde donde quiero iniciar a cortar, segundo parametro es la segunda posicion donde quiero cortar
// console.log(arr);

// // // length = indica el tamanio del arreglo
// console.log(arr.length);

// var arr = [
//     true,
//     {   // Objeto anonimo
//         nombre: "Giovanni",
//         apellido: "Vangioni"
//     },
//     function() {
//         console.log("Estoy viviendo en un arreglo");
//     },
//     function(persona) {
//         // console.log(arr[1].nombre + " " + arr[1].apellido);
//         console.log(persona.nombre + " " + persona.apellido);
//     },
//     [   // Arreglo anonimo
//         "Fernando", 
//         "Carlos", 
//         "Hernando", 
//         "Melissa",
//         [
//             "Juan",
//             "Pedro",
//             "Dilcia",
//             function() {
//                 console.log(this);
//             }
//         ]
//     ] 
// ];

// console.log(arr);
// console.log(arr[1]);
// arr[2](); // Invoca la funcion anonima que esta dentro del arreglo
// arr[3](arr[1]);
// console.log(arr[4][4][1]);
// arr2 = arr[4][4];
// arr2[3]();
// arr[4][4][3]();



// // 24. Argumentos arguments (Argumentos de funciones)
// function miFuncion(a, b, c, d) {
//     console.log(arguments); // Son los argumentos que son enviados al momento de la invocacion

//     if(arguments.length !== 4) {
//         console.error("La funcion necesita 4 parametros");
//         return;
//     }
//     console.log(a + b + c + d);
// }

// miFuncion(10, 20, 30, 40);
// miFuncion(10, 20, 30);



// // 25. Sobrecarga de operadores en Javascript
// // En Javascript no exite la sobrecarga de operadores
// function crearProducto(nombre, precio) {
//     nombre = nombre || "Sin nombre";
//     precio = precio || 0;

//     console.log("Producto: " + nombre + ", Precio: " + precio);
// }

// function crearProducto100(nombre) {
//     crearProducto(nombre, 100);
// }

// function crearProductoCamisa(precio) {
//     crearProducto("Camisa", precio);
// }

// crearProducto();
// crearProducto("Lapiz");
// crearProducto100("Corrector");
// crearProductoCamisa(75);




// // 26. Polimorfismo en Javascript
// function determinaDato(a) {
//     if (a === undefined) {
//         console.log("A es undefinded... no se que hacer");
//     }
//     if (typeof a === "number") {
//         console.log("A es un numero, y puedo hacer operaciones con numeros");
//     }
//     if (typeof a === "string") {
//         console.log("A es un texto, y puedo hacer operaciones con textos");
//     }
//     if (typeof a === "object") {
//         console.log("A es un objeto, pero puede ser cualquier cosa");
//         if (a instanceof Number) {
//             console.log("A es un objeto numerico...");
//         }
//     }
// }

// determinaDato();
// determinaDato(1);
// determinaDato("Fernando");
// determinaDato({nombre: "Giovanni", apellido: "Vangioni"});

// var b = new Number(3);
// console.log(b);
// determinaDato(b);



// // 27. Cuidado con las funciones y su contexto
// function crearFunciones() {
//     var arr = [];
//     var numero = 1;

//     for (let numero = 1; numero <= 5; numero++) {
//         arr.push(
//             (function(numero) { // Funcion anonima con contexto que es ejecuta en el momento de se definida con la invocacion al final y que recibe como parametro numero que retorna una funcion
//                 return function() {
//                     console.log(numero);
//                 }
//             })(numero)
//         );
//     }

//     return arr;
// }

// var funciones = crearFunciones();
// console.log(funciones)
// funciones[0]();
// funciones[1]();
// funciones[2]();
// funciones[3]();
// funciones[4]();



// // 28. Objeto Number
// var a = 10.4235435;
// var b = new Number(10);

// console.log(a === b); // Evalua los tipos
// console.log(a == b); // Evalua los valores

// // // toFixed(2) = formatea el numero a una cantidad de datos dencimales (2) el maximo valor que puede recibir es (20)
// console.log(a.toFixed(2));

// // // toString() = Obtiene el valor textual en una cadena de caracteres
// console.log(a.toString());

// // // toPrecision(4) = obtiene el numero de caracteres preciso (10.42)
// console.log(a.toPrecision(4));

// // // NaN (Not a Number)(No es un Numeros)
// console.log(a * 'f');

// var b = new Number('20');
// console.log(b);
// console.log(b.valueOf()); // valueOf() retorna el valor primitivo de number (convierte)




// // 29. Objecto Booleano
// var a = true;
// var b = false;

// var a = new Boolean(); // Valor por defecto false
// console.log(a);

// var a = new Boolean('q'); // Valor que retorna true (porque envia una cadena con texto)
// console.log(a);

// var a = new Boolean(''); // Valor que retorna false (porque envia una cadena vacia)
// console.log(a);

// var a = new Boolean(0); // Valor que retorna false (porque envia un number)
// console.log(a);

// var a = new Boolean(1); // Valor que retorna true (porque envia un number)
// console.log(a);

// var a = new Boolean(Infinity); // Valor que retorna true (porque envia un number)
// console.log(a);

// if (0) {
//     console.log('Me impirmi!!!');
// }



// // 30. Objetos String
// // Un objeto tipo String es un objeto y no es un arreglo de caracteres
// var a = new String('Giovanni');
// console.log(a[0]);
// console.log(a);

// console.log(a.toUpperCase()); // Devuelve el valor en mayusculas
// console.log(a.toLowerCase()); // Devuelve el valor en minusculas

// i = a.indexOf('n'); // Retorna la primera posicion donde encuentra la letra
// console.log('La letra esta en la posicion: ', i);

// i = a.lastIndexOf('n'); // Retorna la ultima posicion donde encuentra la letra
// console.log('La letra esta en la posicion: ', i);

// var nombre = a.substr(6); // Retorna el string desde la posicion que se le indico, para este caso 6
// console.log(nombre);

// var split = a.split('n'); // Devuelve un arreglo con el string separado por el caracter indicado
// console.log(split);
// console.log(split.length);



// // 31. Objeto Fecha (Date)
// var hoy = new Date();
// console.log(hoy);

// var fechaMili = new Date(0);
// console.log(fechaMili);

// // var fechaFija = new Date(anio, mes, dia, hora, min, seg, mili);
// var fechaFija = new Date(2016, 9, 21, 23, 10, 15, 20);
// console.log(fechaFija);

// console.log(hoy.getFullYear()); // Regresa el anio completo
// console.log(hoy.getDate()); // Regresa el dia
// console.log(hoy.getHours()); // Regresa la hora
// console.log(hoy.getMilliseconds()); // Regresa los milisegundos



// // 32. Operaciones con fechas
// var fecha = new Date(2016, 9, 10);
// console.log(fecha);
// fecha.setDate(fecha.getDate() + 5);
// console.log(fecha);

// Date.prototype.sumarDias = function(dias) {
//     fecha.setDate(this.getDate() + dias);
//     return this;
// }


// Date.prototype.sumarAnios = function(anios) {
//     fecha.setFullYear(this.getFullYear() + anios);
//     return this;
// }

// console.log(fecha);
// console.log(fecha.sumarDias(5));
// console.log(fecha.sumarAnios(5));



// // 33. Objeto Math
// var PI = Math.PI;
// var E = Math.E;

// console.log(PI);
// console.log(E);

// var num1 = 10.44353;

// console.log(num1);
// console.log(Math.round(num1)); // Redondea el numero
// console.log(Math.round(num1 * 100) / 100);
// console.log(Math.floor(num1)); // Elimina los deciamales sin redondeo
// console.log(Math.floor(Math.random() * 100));

// function randomEntre(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log(randomEntre(1, 10));

// console.log(Math.sqrt(10)); // Raiz cuadrada
// console.log(Math.pow(7, 2)); // Potencia



// // 34. Expresiones Regulares
// var reg1 = RegExp('a'); // Manera de definirla literalmente
// var reg2 = /a/; // Manera de definir tambien la expresion regular

// // 3 controles o contraladores que permite controlar la expresion regular
// // i = insensible
// // g = todas las apariciones
// // m = multilinea

// var texto = 'Hola Mundoo, 12345.';

// var arr = texto.match(/^a/); // ^ = Busca en la primera posicion del texto
// var arr = texto.match(/o$/); // $ = Busca en la ultima posicion del texto
// var arr = texto.match(/.../); // ... = Devuelve los primeros caracteres (cualquiera) del texto
// var arr = texto.match(/^.o/); // ^.o = Cualquier caracter al principio seguido de una 'o'
// var arr = texto.match(/[0-9]/); // [0-9] = Define un rango de numeros entre 0 y 9
// var arr = texto.match(/[a-z]/); // [a-z] = Define un rango de caracteres
// var arr = texto.match(/[a-zA-Z]/); // [a-zA-Z] = Define un rango de caracteres minusculas y mayusculas
// var arr = texto.match(/^H[aeiou]/); // ^H[aeiou] = La primera letra sea una H y la siguiente un rango de caracteres de las vocales
// var arr = texto.match(/[aeiou].$/); // [aeiou].$ = Cualquier letra seguido de cualquier caracter que este al final
// var arr = texto.match(/[aeiou]./); // [aeiou]. = Cualquier vocal seguida de cualquier caracter
// var arr = texto.match(/\s/); // \s = Cualquier separacion en el texto
// var arr = texto.match(/\w/); // \w = [a-zA-Z0-9] = Cualquier letra y cualqiuer numero en el rango
// var arr = texto.match(/\d/); // \d = [0-9] = Cualquier numero en el rango
// var arr = texto.match(/m/i); // /m/i = Cualquier numero en el rango
// var arr = texto.match(/[aeiou]/g); // /[aeiou]/g = Todas las ocurrencia en el rango
// var arr = texto.match(/o+/g); // /o+/g = Todas las ocurrencia o y cualquier cantidad de o juntas
// var arr = texto.match(/o?/g); // /o?/g = Es como si preguntara si existe la muestra sino muestra un caracter vacio
// var arr = texto.match(/o{2}/); // /o{2}/ = Aparezca 2 veces

// console.log(arr);



// // 35. Expresiones Regulares 2

// var texto = 'Aeropuerto';

// var arr = texto.match(/[aeiou]{2,2}/ig); // /[aeiou]{2,2}/ig = Vocales que se repiten al menos dos veces
// var arr = texto.match(/\w{2,2}/ig); // \w{2,2}/ig = Cualquier letra dos veces

// console.log(arr);

// var texto = 'La Respuesta de la suma es: 45 + 60 = 105';

// var arr = texto.match(/\d{1,}/g); // /\d{1,}/g = Cualquier numero, todas las ocurrencias agrupados de 1 a n
// var arr = texto.match(/\d{1,}|Respuesta/g); // /\d{1,}/g = Cualquier numero, todas las ocurrencias agrupados de 1 a n ó la palabra respuesta insensible

// console.log(arr);



// 36. El punto y coma es opcional
// ;;;;;;
// ;;;;;var a = 10
// ;;;;;var b = 20
// ;;;;;var c = 30
// ;;;;;var d = 'Giovanni'
// ;;;;;;
// ;;;;;console.log(a)
// ;;;;;console.log(b)
// ;;;;;console.log(c)
// ;;;;;console.log(d)
// ;;;;;;

// function getNumero() {
//     return // Hacer un return undefined porque no encuentra nada al lado de la palabra return
//         10
// }

// console.log(getNumero());



// // 37. Comentarios en Javascript y espaciado

// Comentario simple

/*
    Comentario multilinea
    Comentario multilinea
    Comentario multilinea
*/

// var arr = [
//     'Giovanni',
//     {
//         nombre: 'Giovanni',
//         apellido: 'Vargas',
//         getNombre: function() {
//             return this.nombre + ' ' + this.apellido
//         }
//     },
//     true,
//     function() {
//         console.log(this);
//     }
// ];

// console.log(arr[3]());



// // 38. Palabras reservadas en Javascript
// // abstract
// // boolean
// // break
// // byte
// // case 
// // catch
// // char
// // class
// // const
// // continue
// // debugger
// // default
// // delete
// // do
// // double
// // else
// // enum
// // export
// // extends
// // false
// // final
// // finally
// // float
// // for
// // function
// // goto
// // if
// // implements
// // import
// // in
// // instanceof
// // int
// // interface
// // long
// // native
// // new
// // null
// // package
// // private
// // protected
// // public
// // return
// // short
// // super
// // switch
// // synchronized
// // this
// // throw
// // transient
// // true
// // try
// // typeof
// // var
// // void
// // volatile
// // while
// // with



// // 39. Manejo de errores en Javascript
// // El try necesita un catch o un finally siempre de lo contrario da error
// try {
//     // var a = 100;
//     // console.log('El valor de a: ', a);

//     // var a = 0 / das;
//     // console.log('El valor de a: ', a);

//     // throw 'oh oh!'; // el throw forza a pasar al catch

//     // var a = 101;
//     // if (a === 100) {
//     //     throw 'oh oh!';
//     // }
//     // else {
//     //     throw 'esto esta mal';
//     // }

//     // throw new Error('Error tipo 1');

//     // throw {
//     //     nombreError: 'Error tipo 1',
//     //     action: 'Salir corriendo a echarle agua al servidor',
//     //     codeError: 1
//     // }

//     // throw function() {
//     //     console.log('Funcion del throw...');
//     // }

//     throw 1 // n cualquier numero

// } catch (error) {
//     // console.log('Error de catch: ', error);

//     // if (error === 'oh oh!') {
//     //     console.log('Error tipo 1');
//     // }
//     // else if (error === 'esto esta mal') {
//     //     console.log('Error tipo 2');
//     // }

//     // console.log(error);
//     // console.log(error.message);

//     // console.log(error);
//     // console.log(error.nombreError);
//     // console.log(error.action);
//     // console.log(error.codeError);

//     // error();
//     // console.log('Parte del catch...');

//     registroError(error);
// }
// finally {
//     console.log('Finalmente');
// }

// function registroError(error) {
//     var ahora = new Date();
//     console.log('Se registro un error: ', error, ' a las: ', ahora.getTime());
// }



// // 40. Cookies - instalacion de nodejs en Mac OS
// // install http-server
// // http-server -p 8081



// // 42. escape, unescape y cookies - uso de cookies
// document.cookie = "nombre=giovanni";
// document.cookie = "apellido=vargas";

// function createCookie(name, value) {
//     value = escape(value);
//     let today = new Date();
//     today.setMonth(today.getMonth() + 1);
//     document.cookie = name + '=' + value + ';expires=' + today.toUTCString() + ';';
// }

// function deleteCookie(name) {
//     let today = new Date();
//     today.setMonth(today.getMonth() - 1);
//     document.cookie = name + '=x' + ';expires=' + today.toUTCString() + ';';
// }

// function getCookie(name) {
//     let cookies = document.cookie;
//     let cookiesArray = cookies.split('; ');
//     console.log(cookiesArray);

//     for (let i = 0; i < cookiesArray.length; i++) {
//         let parArr = cookiesArray[i].split('=');
//         cookiesArray[i] = parArr;

//         if (parArr[0] === name) {
//             return escape(parArr[1]);
//         }
//     }
//     console.log(cookiesArray);
//     return undefined;
// }

// createCookie('nombre', 'giovanni');
// createCookie('apellido', 'vargas');
// createCookie('correo', 'jonan-vargas23@hotmail.com');

// deleteCookie('nombre');

// console.log(getCookie('apellido'));

// let cookies = document.cookie;
// console.log(cookies);

// let demo = '123*123;123"123/';
// console.log(escape(demo));
// console.log(unescape(escape(demo)));



// // 43.Funciones especiales Call(), Apply() y Bind()
let carro = {
    color: 'Blanco',
    marca: 'Mazda',
    imprimir: function() {
        let salida = this.marca + " - " + this.color;
        return salida;
    }
}

let carro2 = {
    color: 'Negro',
    marca: 'Toyota',
}

console.log(carro.imprimir());

let logCarro = function(arg1, arg2) {
    console.log('Carro: ', this.imprimir());
    console.log('Argumentos: ', arg1, arg2);
}

let logaModeloCarro = logCarro.bind(carro);
logaModeloCarro('Subaru', 'Impreza');

logaModeloCarro.call(carro, '123', '456');
logaModeloCarro.apply(carro, ['1adf', 'ewre']);

// Funciones prestadas
console.log(carro.imprimir.call(carro2));