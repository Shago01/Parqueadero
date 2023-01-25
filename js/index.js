// Elementos DOM

//

//bontones de menu
const btnIn = document.getElementById('btn_in');
const btnBu = document.getElementById('btn_bu');
const btnP1 = document.getElementById('btn_p1');
const btnP2 = document.getElementById('btn_p2');
const btnP3 = document.getElementById('btn_p3');
const btnP4 = document.getElementById('btn_p4');
const btnP5 = document.getElementById('btn_p5');

//Dom contenedores:
const form = document.getElementById('formulario');
const buscar = document.getElementById('buscar');

//Dom carro:

//Dom busqueda:

//

//objetos

let parking = {
    piso1: [],
    piso2: [],
    piso3: [],
    piso4: [],
    piso5: [],
    registro: [],
};

//Clases padres
class Vehiculos {
    constructor(Matricula, Modelo) {
        this._Matricula = Matricula;
        this._Modelo = Modelo;
        this._Dia = new Date().getDate();
        this._HoraEntrada = new Date().getMinutes();
    }

    get matricula() {
        return this._Matricula;
    }

    get modelo() {
        return this._Modelo;
    }

    get dia() {
        return this._Dia;
    }

    get horaEntrada() {
        return this._HoraEntrada;
    }

    set matricula(matricula) {
        this._Matricula = matricula;
    }

    set modelo(modelo) {
        this._Modelo = modelo;
    }

    set dia(dia) {
        this._Dia = dia;
    }

    set horaEntrada(horaEntrada) {
        this._HoraEntrada = horaEntrada;
    }
}

//clases hijas
class Bus extends Vehiculos {
    constructor(Matricula, Modelo, puesto) {
        super(Matricula, Modelo);
        this._Puesto = puesto;
        this._Precio = 1600;
        this._Tipo = 'BUS';
    }
}
class Camioneta extends Vehiculos {
    constructor(Matricula, Modelo, puesto) {
        super(Matricula, Modelo);
        this._Puesto = puesto;
        this._Precio = 1200;
        this._Tipo = 'CAMIONETA';
    }
}
class Carro extends Vehiculos {
    constructor(Matricula, Modelo, puesto, piso) {
        super(Matricula, Modelo);
        this._Puesto = piso + puesto;
        this._Precio = 800;
        this._Tipo = 'CARRO';
    }
}

//funciones

function Ingresar() {
    if ('electve'.value == 1) {
    }
}
function crearBus() {}
function crearCarro() {}
function crear() {}

function IngresarBus(obj) {
    parking.piso1.push(obj);
}

function ingresarCar(obj) {}

function abrirForm() {
    form.classList.toggle('close');
}

function abrirBuscar() {
    form.classList.add('close');
    buscar.classList.toggle('close');
}

function abrirForm() {
    buscar.classList.add('close');
    form.classList.remove('close');
}

function btn_bus() {
    abrirBuscar();
}
function btn_in() {
    abrirForm();
}

//add, linstener
btnIn.addEventListener('click', btn_in);
btnBu.addEventListener('click', abrirBuscar);
