// 4. Heredar un Prototype

// Object constructor
function Clientes(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}
// Instancia de Clientes
const humberto = new Clientes('Humberto ', 400000);


Clientes.prototype.tipoCliente = function () {     
    let tipo;
    if (this.saldo > 1000000) {
        tipo = 'Gold';
    } else if(this.saldo > 300000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }
    return tipo;
}

Clientes.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo de Cliente: ${this.tipoCliente()}`
}

Clientes.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira;
}

// Object Constructor
// Heredar de Clienta hacia Persona, para no tener código repetido (nombre y saldo)
function Persona(nombre, saldo, telefono) {
    Clientes.call(this, nombre, saldo);//Hereda nombre y saldo
    this.telefono = telefono;
}

// Para heredar funciones.
// Para hereder funciones tiene  que ser antes de la instancia
Persona.prototype = Object.create(Clientes.prototype); // Copiar o Clonar las funciones de Clientes

// Notar que se perdio el constructor de Persona
Persona.prototype.constructor = Clientes;

// Instanciar Persona
const hrvg = new Persona ('Valenzuela', 500000, 966299793);
console.log(hrvg);

// Como Persona tiene las funciones heredadas de cliente
// entonces las ocuparemos
console.log(hrvg.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function() {
    return `El teléfono es ${this.telefono}`;
}

console.log(hrvg.mostrarTelefono());