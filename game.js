// // 18. El señor de los anillos The Javascript Game
// // Funcion de primera clase (Trabaja como una clase)

function Jugador(nombre) {
    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;

    this.curar = function(jugadorObjetivo) {
        if (this.sp >= 40) {
            this.sp -= 40;
            jugadorObjetivo.pv += 20;
        } else {
            console.info(this.nombre + " no tiene suficiente sp(" + this.sp + ")");
        }
        this.estado(jugadorObjetivo);
    }

    this.tirarFlecha = function(jugadorObjetivo) {
        if (jugadorObjetivo.pv > 40) {
            jugadorObjetivo.pv -= 40;
        } else {
            jugadorObjetivo.pv = 0;
            console.error(jugadorObjetivo.nombre + " murio!!! pv(" + jugadorObjetivo.pv + ")");
        }
        this.estado(jugadorObjetivo);
    }

    this.golperConEspada = function(jugadorObjetivo) {
        if (jugadorObjetivo.pv > 20) {
            jugadorObjetivo.pv -= 20;
        } else {
            jugadorObjetivo.pv = 0;
            console.error(jugadorObjetivo.nombre + " murio!!! pv(" + jugadorObjetivo.pv + ")");
        }
        this.estado(jugadorObjetivo);
    }

    this.estado = function(jugadorObjetivo) {
        console.log(this);
        console.log(jugadorObjetivo);
    }
}

var gandalf = new Jugador("Gandalf");
var legolas = new Jugador("Legolas");
var aragon = new Jugador("Aragon");

console.log(gandalf);
console.log(legolas);
console.log(aragon);

// gandalf.curar(legolas);