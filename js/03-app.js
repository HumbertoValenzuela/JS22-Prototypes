// 3. Creando un Prototype

function Clientes(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;vv
}
// Instancia de Clientes
const humberto = new Clientes('Humberto ', 400000);//Objeto de Cliente
console.log( humberto);

// Para Revisar. En chrome - inspeccionar - expandir _proto. Vemos que tenemos un constructor (nombre, saldo)

// ¿Como podemos agregar funciones al tipo de Objeto Clientes
// y que sean exclusivas en las instancias de Clientes

// agregar nombre del Tipo de Objeto. Clientes
// .prototype aca estamos en el constructor
// agregar una nueva propiedad proto tipoCliente
// Esto será = a una función

// Nota: No ocupar ArrowFunction al Crear Proto, mejor function
// ¿Por qué?
// Esto pasa porque si quieres acceder al nombre y saldo. Tenemos que utilizar la sintaxis de this.
// y la propiedad que quieras acceder.
// Estas funciones buscan en el objeto actual mientras que el ArrowFunction se va hacia la ventana global y marcará mensaje undefined
Clientes.prototype.tipoCliente = function () {
    //Al revisar veremos otra función llamada tipoCliente seguido de constructor (nombre, saldo) 
    console.log('Desde mi nuevo Proto!!');  
    
    // Como este function accede a las propiedades del objeto actual
    console.log('Objeto Actual Clientes ' + this.saldo)

    // Opción que clasifica a los Clientes
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

// ¿Cómo utilizar la función Proto? Es igual que una función
humberto.tipoCliente();// Tenemos un método

// Para ver el return tipo
console.log(humberto.tipoCliente()); // Platinum

// Crear otro proto 
Clientes.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo de Cliente: ${this.tipoCliente()}`
}

console.log(humberto.nombreClienteSaldo());


Clientes.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira
}
humberto.retiraSaldo(100000);
console.log(humberto.nombreClienteSaldo());

// -----------------------------------------------
function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

// crear una nueva instancía de Empresa
const hrvg = new Empresa('Rodolfo', 100, 'Programador');
console.log(hrvg);
// Al revisar Empresa, no va a tener el prototype de Clientes
// es decir, la función tipoCliente es exclusivo de Clientes
// y las instancias de Empresa no podrán ocupar tipoCliente

// ¿Qúe conseguimos con esto? 
// De esta forma tenemos separación
// Un código más ordenado
// Expandiendo el _proto_ sabremos que métodos tenemos disponibles para utilizar