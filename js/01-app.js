// 1. Veamos que es el Proto y crear un tipo de objeto Nuevo
// Los prototypes estan relacionados con los Objetos
// Todos los Objetos tienen un Prototype

// Tenemos dos formas de crear objetos en JS, Object Literal

const cliente = {
     nombre:'humberto',
     saldo: '500'
}
console.log( cliente);
console.log(typeof cliente);

// Cada objeto tiene un _proto. Todo lo que esta en el _proto
// son funciones exclusivas del objeto 

// Object Reutilizable. Object Constructor

function clientes(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const humberto = new clientes('Humberto', 400);
console.log( humberto);

// Los dos se ven similares, sin embargo este último es reutilizable 