var a = 1;
var b = "Giovanni";

console.log(a);
console.warn(a);
console.error(a);
console.info(a);

// 7. Javascript no es asincrono y se ejecuta secuncialmente

function imprimir() {
    for (let i = 0; i < 4000; i++) {
        console.log('Imprimio');
    }
}

function presionoClick() {
    console.log('Click en boton');
}

imprimir();