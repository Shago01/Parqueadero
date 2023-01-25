// Elementos DOM

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
    registro: []
};

//Clases padres
class Vehiculos{
  
    constructor(Matricula,Modelo){
        this._Matricula = Matricula;
        this._Modelo = Modelo;
        this._Dia =  new Date().getDate();
        this._HoraEntrada = new Date().getMinutes();
    }

get matricula(){
    return this._Matricula;
}

get modelo(){
    return this._Modelo;
}

get dia(){
    return this._Dia;
}

get horaEntrada(){
    return this._HoraEntrada;
}

set matricula(matricula){
    this._Matricula = matricula;
}

set modelo(modelo){
    this._Modelo = modelo;
}

set dia(dia){
    this._Dia = dia;
}

set horaEntrada(horaEntrada){
    this._HoraEntrada = horaEntrada;
}

}

//clases hijas
class Bus extends Vehiculos{
    constructor(Matricula,Modelo,puesto){
        super(Matricula,Modelo);
        this._Puesto = puesto;
        this._Precio = 1600;
        this._Tipo = "BUS";
    }
}
class Camioneta extends Vehiculos{
    constructor(Matricula,Modelo,puesto){
        super(Matricula,Modelo);
        this._Puesto = puesto;
        this._Precio = 1200;
        this._Tipo = "CAMIONETA";
    }
}
class Carro extends Vehiculos{
    constructor(Matricula,Modelo,puesto,piso){
        super(Matricula,Modelo);
        this._Puesto = piso+puesto;
        this._Precio = 800;
        this._Tipo = "CARRO";
    }

}


//funciones

function Ingresar() {
    if ("electve".value == 1) {
        
    }
}
function crearBus()
function crearCarro() {
    let carr = new type(arguments);
}
function crear()

function IngresarBus(obj){
    parking.piso1.push(obj);
}

function ingresarCar(obj) {
    
}
//funciones Botones