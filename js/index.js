// Elementos DOM
const inModelo = document.getElementById('model');
const inMatricula = document.getElementById('matricula');
const inTipoCar = document.getElementById('tipo');
const inPiso = document.getElementById('piso');
const inPuesto = document.getElementById('puesto');

// Form Buscar
const matriculaB = document.getElementById('matriculaB');
const modeloB = document.getElementById('modeloB');
const tipoB = document.getElementById('tipoB');
const puestoB = document.getElementById('puestoB');

//TABLA GENERAL
const tablaGe = document.getElementById('tabla_general');
const cuerpTGe = document.getElementById('tabla_boody_ge');

//variables de uso
let ultimoRegistro = 0;

//bontones de menu
const btnIn = document.getElementById('btn_in');
const btnBu = document.getElementById('btn_bu');
const btnAg = document.getElementById('btnAg');
const btnGe = document.getElementById('btn_ge');
const btnSa = document.getElementById('btn_sa');
const btnbusC = document.getElementById('btnbusC');
const btnsacC = document.getElementById('btnsacC');

//Dom contenedores:
const form = document.getElementById('formulario');
const buscar = document.getElementById('buscar');
const salir = document.getElementById('tabla_salir');
//objetos

let parking = {
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
        this._Tipo = 'BUS';
    }
}
class Camioneta extends Vehiculos {
    constructor(Matricula, Modelo, puesto, piso) {
        super(Matricula, Modelo);
        this._Puesto = piso + puesto;
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

function puestoVacio(puesto) {
    return parking.registro.some((element) => {
        if (element != undefined) {
            if (element._Puesto == puesto) {
                return true;
            }
        }
    });
}

function matriculaExistente(matricula) {
    return parking.registro.some((element) => {
        if (element != undefined) {
            if (element._Matricula == matricula) {
                return true;
            }
        }
    });
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

// funcioenes con el objeto vehiculo
function agregarBus(modelo, matricula, puesto, piso) {
    3;
    let bus = new Bus(matricula, modelo, puesto, piso);
    parking.registro.push(bus);
}

function agregarCarro(modelo, matricula, puesto, piso) {
    let car = new Carro(matricula, modelo, puesto, piso);
    parking.registro.push(car);
}

function agregarCamioneta(modelo, matricula, puesto, piso) {
    let cam = new Camioneta(matricula, modelo, puesto, piso);
    parking.registro.push(cam);
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

function encaontrarV() {
    return parking.registro.find((element) => {
        if (element != undefined) {
            if (element._Matricula == matriculaB.value) {
                return element;
            }
        }
    });
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

function buscarVeh() {
    let car = encaontrarV();
    if (car == undefined) {
        alert('el vehiculo no se encuentra en el parqueadero');
        return null;
    } else {
        tipoB.value = car._Tipo;
        puestoB.value = car._Puesto;
        modeloB.value = car._Modelo;
    }
}

function abrirForm() {
    tablaGe.classList.add('close');
    buscar.classList.add('close');
    salir.classList.add('close');
    form.classList.remove('close');
}

function abirSalir() {
    tablaGe.classList.add('close');
    buscar.classList.add('close');
    form.classList.add('close');
    salir.classList.remove('close');
}

function abrirBuscar() {
    tablaGe.classList.add('close');
    form.classList.add('close');
    salir.classList.add('close');
    buscar.classList.remove('close');
}

function abrirTablage() {
    buscar.classList.add('close');
    salir.classList.add('close');
    form.classList.add('close');
    tablaGe.classList.remove('close');
}

function sacarVehiculo() {
    let pos = parking.registro.findIndex(
        (element) => element._Matricula == matriculaB.value
    );

    let carr = parking.registro[pos];
    parking.registro[pos] = undefined;

    generaPdf(carr);
}

function horasUtilizadas(salida, veh) {
    let horasUtilizadas = Math.abs(salida - veh._HoraEntrada);
    if (horasUtilizadas == 0) {
        return 1;
    }
    return horasUtilizadas;
}

function generaPdf(carr) {
    let doc = new jsPDF('landscape');
    let veh = carr;
    let horaSalida = new Date().getMinutes();
    let horasUsadas = horasUtilizadas(horaSalida, veh);
    let precioH = horasUsadas * veh._Precio;

    doc.setFontSize(30);
    doc.setFontStyle('blod');
    doc.text(130, 20, `Parking Parck`);

    doc.setFontSize(17);
    doc.setFontStyle('normal');
    doc.text(20, 40, `MATRICULA: ${veh._Matricula} `);
    doc.text(130, 40, `MODELO: ${veh._Modelo}`);
    doc.text(220, 40, `TIPO: ${veh._Tipo}`);
    doc.text(20, 60, `PUESTO: ${veh._Puesto} `);
    doc.text(130, 60, `HORAS DE ENTRADA: ${veh._HoraEntrada} `);
    doc.text(220, 60, `HORA DE SALIDA:  ${horaSalida} `);
    doc.text(20, 80, `HORAS USADAS: ${horasUsadas} `);
    doc.text(220, 80, `PRECIO: ${precioH} `);

    doc.save('test.pdf');
    doc.pdfexport();
}

// fuciones de botoes
function btn_bus() {
    abrirBuscar();
}

function btn_in() {
    abrirForm();
}

function btn_sa() {
    abirSalir();
}

function ag_vehiculo() {
    if (matriculaExistente(inMatricula.value)) {
        alert('la matricula ya existe');
        return null;
    } else if (puestoVacio(String(generarPiso() + inPuesto.value))) {
        alert('ese puesto ya esta ocuapdo');
        return null;
    }

    switch (Number(inTipoCar.value)) {
        case 1:
            agregarCarro(
                inModelo.value,
                inMatricula.value,
                inPuesto.value,
                generarPiso()
            );

            break;
        case 2:
            agregarCamioneta(
                inModelo.value,
                inMatricula.value,
                inPuesto.value,
                generarPiso()
            );

            break;
        case 3:
            agregarBus(
                inModelo.value,
                inMatricula.value,
                inPuesto.value,
                generarPiso()
            );

            break;
    }
    alert('Registro Exitoso');
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
}

//add, linstener
btnIn.addEventListener('click', btn_in);
btnBu.addEventListener('click', abrirBuscar);
btnAg.addEventListener('click', btn_ag);
btnGe.addEventListener('click', abrirTablage);
btnSa.addEventListener('click', btn_sa);
btnbusC.addEventListener('click', buscarVeh);
btnsacC.addEventListener('click', sacarVehiculo);
