// ¿cual es el problema que soluciona el prototype

// Object Reutilizable. Object Constructor

function Clientes(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}
// Instancia de cliente
const humberto = new Clientes('Humberto', 400);
console.log( humberto);

function formatearCliente(usuarios) {
    const {nombre, saldo} = usuarios;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;    
}
console.log(formatearCliente(humberto));

// supongamos que el proyecto va creciendo más y que ahora tiene empresas

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

// crear una nueva instancía de Empresa
const hrvg = new Empresa('Rodolfo', 100, 'Programador');

// Si yo quiero utilizar la función formatearCliente con la instacia de Empresa
console.log(formatearCliente(hrvg));// funciona

// Sin embargo los datos de Cliente y Empresa son diferentes. 
// porque tenemos tambien la categoria 
// Entonces comenzamos a crear funciones

function formatearEmpresa(empresa) {
    const {nombre, saldo, categoria} = empresa;
    return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`;    
}

console.log(formatearEmpresa(hrvg));
// Nos damos cuenta que estamos haciendo muchos ajustes, mientras esta creciendo el Proyecto

// el prototype podemos agregar funciones que son exclusivas de clientes
// y agregar funciones que son exclusivas de empresas.
// De esta forma solo expandes el prototype y podremos conocer todas las funciones que tiene disponibles