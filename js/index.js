// Elementos DOM
const inModelo = document.getElementById('model');
const inMatricula = document.getElementById('matricula');
const inTipoCar = document.getElementById('tipo');
const inPiso = document.getElementById('piso');
const inPuesto = document.getElementById('puesto');
const tablaGe = document.getElementById('tabla_general');
const cuerpTGe = document.getElementById('tabla_boody_ge');

//variables de uso
let ultimoRegistro = 0;

//bontones de menu
const btnIn = document.getElementById('btn_in');
const btnBu = document.getElementById('btn_bu');
const btnAg = document.getElementById('btnAg');
const btnGe = document.getElementById('btn_ge');

//Dom contenedores:
const form = document.getElementById('formulario');
const buscar = document.getElementById('buscar');

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
    constructor(Matricula, Modelo, puesto, piso) {
        super(Matricula, Modelo);
        this._Puesto = piso + puesto;
        this._Precio = 1600;
        this._TipoI = '3';
        this._Tipo = 'BUS';
    }
}
class Camioneta extends Vehiculos {
    constructor(Matricula, Modelo, puesto, piso) {
        super(Matricula, Modelo);
        this._Puesto = piso + puesto;
        this._Precio = 1200;
        this._TipoI = '2';
        this._Tipo = 'CAMIONETA';
    }
}
class Carro extends Vehiculos {
    constructor(Matricula, Modelo, puesto, piso) {
        super(Matricula, Modelo);
        this._Puesto = piso + puesto;
        this._Precio = 800;
        this._TipoI = '1';
        this._Tipo = 'CARRO';
    }
}

//funciones comprobaciones

function comprobarVacios() {
    if (
        inModelo.value == '' ||
        inMatricula.value == '' ||
        inTipoCar.value == '0' ||
        inPiso.value == '0' ||
        inPuesto.value == ''
    ) {
        alert('Faltan valores');
        return false;
    }
    return true;
}

function puestoVacio(arr, puesto) {
    console.log('si llegue');
    if (arr[puesto] == undefined) {
        return true;
    }
    return false;
}

function matriculaExistente(matricula) {
    for (let i = 0; i < parking.registro.length; i++) {
        if (parking.registro[i]._Matricula == matricula) {
            return true;
        }
    }
    return false;
}

function comprobarPisoCarro() {
    switch (inTipoCar.value) {
        case '1':
            if (Number(inPiso.value) > 2 && Number(inPiso.value) < 6) {
                return true;
            } else {
                alert('El carro solo ingresa a los pisos 3, 4, 5');
                return false;
            }

        case '2':
            if (Number(inPiso.value) == 2) {
                return true;
            } else {
                alert('la Camioneta solo ingresa al piso 2');
                return false;
            }

        case '3':
            if (Number(inPiso.value) == 1) {
                return true;
            } else {
                alert('El bus solo ingresa al piso 1');
                return false;
            }
    }
}

function comprobarPuesto() {
    if (isNaN(Number(inPuesto.value))) {
        alert('el valor del puesto debe ser un valor entero');
        return false;
    }
    return true;
}

function pisoSelect() {
    switch (inPiso.value) {
        case '1':
            return parking.piso1;
        case '2':
            return parking.piso2;
        case '3':
            return parking.piso3;
        case '4':
            return parking.piso4;
        case '5':
            return parking.piso5;
    }
}

// funcioenes con el objeto vehiculo
function agregarBus(modelo, matricula, puesto, piso, pisoA) {
    console.log('llegue');
    let bus = new Bus(matricula, modelo, puesto, piso);
    parking.registro.push(bus);
    pisoA.push(bus);
}

function agregarCarro(modelo, matricula, puesto, piso, pisoA) {
    let car = new Carro(matricula, modelo, puesto, piso);
    parking.registro.push(car);
    pisoA.push(car);
}

function agregarCamioneta(modelo, matricula, puesto, piso, pisoA) {
    let cam = new Camioneta(matricula, modelo, puesto, piso);
    parking.registro.push(cam);
    pisoA.push(cam);
}

function generarPiso() {
    switch (inPiso.value) {
        case '1':
            return 'A';
        case '2':
            return 'B';
        case '3':
            return 'C';
        case '4':
            return 'D';
        case '5':
            return 'E';
    }
}

// funciones con el formualario

function generarTablage() {
    let cuerpo = cuerpTGe;
    let fila = document.createElement('tr');
    let element = parking.registro[ultimoRegistro];

    let celda = document.createElement('td');
    let celda1 = document.createElement('td');
    let celda2 = document.createElement('td');
    let celda3 = document.createElement('td');
    let celda4 = document.createElement('td');

    let texto = document.createTextNode(String(element._Matricula));
    let texto1 = document.createTextNode(String(element._Modelo));
    let texto2 = document.createTextNode(String(element._Tipo));
    let texto3 = document.createTextNode(String(element._Puesto));
    let texto4 = document.createTextNode(String(element._HoraEntrada));

    celda.appendChild(texto);
    celda1.appendChild(texto1);
    celda2.appendChild(texto2);
    celda3.appendChild(texto3);
    celda4.appendChild(texto4);

    celda.classList.add('tabla__celda');
    celda1.classList.add('tabla__celda');
    celda2.classList.add('tabla__celda');
    celda3.classList.add('tabla__celda');
    celda4.classList.add('tabla__celda');

    fila.appendChild(celda);
    fila.appendChild(celda1);
    fila.appendChild(celda2);
    fila.appendChild(celda3);
    fila.appendChild(celda4);

    fila.classList.add('tabla__fila');
    cuerpo.appendChild(fila);
    ultimoRegistro += 1;
}

function abrirForm() {
    tablaGe.classList.add('close');
    buscar.classList.add('close');
    form.classList.remove('close');
}

function abrirBuscar() {
    tablaGe.classList.add('close');
    form.classList.add('close');
    buscar.classList.remove('close');
}

function abrirTabla() {
    tablaGe.classList.add('close');
    buscar.classList.add('close');
    form.classList.remove('close');
}

function abrirTablage() {
    tablaGe.classList.remove('close');
    buscar.classList.add('close');
    form.classList.add('close');
}

// fuciones de botoes
function btn_bus() {
    abrirBuscar();
}
function btn_in() {
    abrirForm();
}

function ag_vehiculo() {
    if (matriculaExistente(inMatricula.value)) {
        alert('la matricula ya existe');
        return null;
    } else if (!puestoVacio(pisoSelect(), Number(inPuesto.value - 1))) {
        alert('ese puesto ya esta ocuapdo');
        return null;
    }

    switch (Number(inTipoCar.value)) {
        case 1:
            agregarCarro(
                inModelo.value,
                inMatricula.value,
                inPuesto.value,
                generarPiso(),
                pisoSelect()
            );
            break;
        case 2:
            agregarCamioneta(
                inModelo.value,
                inMatricula.value,
                inPuesto.value,
                generarPiso(),
                pisoSelect()
            );
            break;
        case 3:
            agregarBus(
                inModelo.value,
                inMatricula.value,
                inPuesto.value,
                generarPiso(),
                pisoSelect()
            );
            break;
    }
}

function btn_ag() {
    if (!comprobarVacios()) {
        return null;
    } else if (!comprobarPisoCarro()) {
        return null;
    } else if (!comprobarPuesto()) {
        return null;
    }
    ag_vehiculo();
    generarTablage();

    alert('llegue al final');
}

//add, linstener
btnIn.addEventListener('click', btn_in);
btnBu.addEventListener('click', abrirBuscar);
btnAg.addEventListener('click', btn_ag);
btnGe.addEventListener('click', abrirTablage);
