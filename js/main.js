const arrayPizzas = [
    {id: 1, nombre: 'Napolitana', ingredientes: ['salsa de tomate', 'muzzarella', 'rodajas de tomate', 'ajo', 'perejil', 'aceitunas'], precio: '1500'},
    {id: 2, nombre: 'Fugazzeta', ingredientes: ['muzzarella', 'cebolla', 'aceitunas'], precio: '1050'},
    {id: 3, nombre: '4 Quesos', ingredientes: ['salsa de tomate', 'muzarella', 'provolone', 'parmesano', 'roquefort', 'aceitunas'], precio: '1500'},
    {id: 4, nombre: 'Roquefort', ingredientes: ['salsa de tomate', 'muzzarella', 'roquefort', 'aceitunas'], precio: '1350'},
    {id: 5, nombre: 'Vegetariana', ingredientes: ['muzarrella', 'salsa blanca', 'acelga', 'oregano', 'aceitunas'], precio: '1050'},
    {id: 6, nombre: 'Especial', ingredientes: ['salsa de tomate', 'muzzarella', 'jamon', 'rodajas de tomate', 'provenzal', 'huevo', 'morrones'], precio: '1150'},
    {id: 7, nombre: 'Muzzarella', ingredientes: ['salsa de tomate', 'muzzarella', 'rodajas de tomate', 'oregano', 'aceitunas'], precio: '950'},
    {id: 8, nombre: 'Calabresa', ingredientes: ['salsa de tomate', 'muzzarella', 'longaniza', 'aji molido', 'aceitunas'], precio: '1200'}
];

// ---id impar----
// const impar = arrayPizzas.filter((pizza) => pizza.id % 2 !== 0)
// console.log('Las pizzas con id impar son:')
// for (pizza of impar) {
//     console.log(`${pizza.nombre}`)
// }

// ----Pizzas menores a 600----
// const pizzas = arrayPizzas.some ( function(e) {
//     return e.precio <= 600;
// });
// console.log(pizzas ? 'hay pizzas menores a $600' : 'No hay pizzas menores a $600');

// ----Pizzas con sus ingredientes----
// arrayPizzas.forEach((pizza) => {
//     console.log(`La pizza ${pizza.nombre} tiene un valor de ${pizza.precio}`);
// });

// ----Ingredientes de cada pizza----
// arrayPizzas.forEach ((pizza) => {
//     console.log(`La pizza ${pizza.nombre}:`);
//     pizza.ingredientes.forEach((ingrediente) => {
//         console.log(`-${ingrediente}`);
//     })
// });

// Impar
function a() {
    const impar = arrayPizzas.filter((pizza) => pizza.id % 2 !== 0)
    console.log('Las pizzas con id impar son:');
    for (pizza of impar) {
        console.log(`${pizza.nombre}`);
    }
}

// Menores a $600
function b() {
    const pizzas = arrayPizzas.some ( function(e) {
        return e.precio <= 600;
    });
    console.log(pizzas ? 'Hay pizzas menores a $600' : 'No hay pizzas menores a $600');   
}

// Pizzas con sus ingredientes
function c() {
    arrayPizzas.forEach((pizza) => {
    console.log(`La pizza ${pizza.nombre} tiene un valor de ${pizza.precio} pesos`);
    });   
}

// Ingredientes de cada pizza
function d() {
    arrayPizzas.forEach ((pizza) => {
    console.log(`La pizza ${pizza.nombre}:`);
    pizza.ingredientes.forEach((ingrediente) => {
        console.log(`-${ingrediente}`);
    })
});
}

a();
b();
c();
d();
