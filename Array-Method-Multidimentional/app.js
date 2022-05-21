const automoviles = [
    {
        marca: 'BMW',
        modelo: 'Series 1 Sedán',
        tipo: 'lujo',
        precio: 580000
    },
    {
        marca: 'BMW',
        modelo: 'i3 2021',
        tipo: 'compacto',
        precio: 390000
    },
    {
        marca: 'Mercedes-Benz',
        modelo: 'GLA SUV',
        tipo: 'lujo',
        precio: 345000
    },
    {
        marca: 'Mercedes-Benz',
        modelo: 'AMG GT Coupé',
        tipo: 'deportivo',
        precio: 780000
    },
    {
        marca: 'Mercedes-Benz',
        modelo: 'Clase E Coupé',
        tipo: 'deportivo',
        precio: 690000
    },
    {
        marca: 'Mercedes-Benz',
        modelo: 'CLS',
        tipo: 'lujo',
        precio: 598000
    },

    {
        marca: 'BMW',
        modelo: 'Series 8 Coupé',
        tipo: 'deportivo',
        precio: 790000
    },
    {
        marca: 'Volkswagen',
        modelo: 'Vento 2021',
        tipo: 'austero',
        precio: 310000
    },
    {
        marca: 'Volkswagen',
        modelo: 'Polo 2021',
        tipo: 'compacto',
        precio: 245000
    },
    
] 

//EJERCICIO 1
console.log('~~~~ EJERCICIO 1 ~~~~')
automoviles.forEach(auto => {

    if(auto.tipo === 'lujo') {

        let totalLujo = 0;
        let precioCarro;
        for(let i = 0; i < 3; i ++) {
            
            precioCarro = automoviles[i].precio
            totalLujo = totalLujo + precioCarro
            
        }        
            console.log(`El precio a pagar por todos los automoviles de lujo es: $${totalLujo}`)                    
    }
    
});

// console.log(`El total a pagar por todos los carros de lujo es: $${totalLujo}`)

//EJERCICIO 2
console.log('~~~~ EJERCICIO 2 ~~~~')
let calificaciones = [
    [5,8,9,8,10,6,7,8],
    [9,4,7,6,8,6,10,8],
    [6,8,9,8,10,6,7,9],
    [8,8,10,8,9,6,7,8],
    [7,8,10,8,9,6,7,8],
    [4,8,10,8,5,6,7,8],
    [3,8,9,8,8,6,7,10],
    [5,8,9,8,6,6,10,6],
    [9,8,8,8,10,6,8,8],
    [6,8,10,8,9,6,7,8]
]

for(let i = 0; i < calificaciones.length; i ++){

    console.log('Calificacion de Estudiante')

    let suma = 0;
    let fila = calificaciones[i]
    fila.forEach (function(numero){
        suma += numero;
    });
    console.log(suma/8);

    console.log('~~~~~~~~')
    
}

//EJERCICIO 3
console.log('~~~~ EJERCICIO 3 ~~~')

const alumnos = ['Jorge', 'María', 'Jose', 'Ana', 'Luis', 'Ana', 'José', 'Jose', 'Sergio', 'Luis', 'Hugo', 'Paco', 'Luis', 'María', 'Paco']

let repetido = [];

let temporal = [];

alumnos.forEach((alumno, index) => {
    temporal = Object.assign([],alumnos)
    temporal.splice(index,1)


    if(temporal.indexOf(alumno)!== -1 && repetido.indexOf(alumno)==-1) {
        repetido.push(alumno)
    }
} )

console.log(`Alumnos que se repiten en la lista: ${repetido}`)
console.log(`Numero de veces reptido: ${repetido.length}`)



//EJERCICIO 4 
console.log('~~~~ EJERCICIO 4 ~~~')
const articulos = [
    {
        nombre: 'Shampoo',
        descripcion: 'Higiene Personal',
        precio: 60,        
    },
    {
        nombre: 'Acondicionador de Cabello',
        descripcion: 'Higiene Personal',
        precio: 40,        
    },
    {
        nombre: 'Pasta Dental',
        descripcion: 'Higiene Personal',
        precio: 20,        
    },
    {
        nombre: 'Cepillo de Dientes',
        descripcion: 'Higiene Personal',
        precio: 15,        
    },
    {
        nombre: 'Zapatos de Vestir',
        descripcion: 'Ropa',
        precio: 800,        
    },
    {
        nombre: 'Calzones',
        descripcion: 'Ropa Personal',
        precio: 30,        
    },
    {
        nombre: 'Camisa',
        descripcion: 'Ropa',
        precio: 250,        
    },
    {
        nombre: 'Reloj',
        descripcion: 'Joyeria',
        precio: 1800,        
    },
    {
        nombre: 'Paquete de Plumas',
        descripcion: 'Papeleria',
        precio: 30,        
    },
    {
        nombre: 'Cuaderno 100 hojas',
        descripcion: 'Papeleria',
        precio: 50,        
    },
] 

console.log('Arreglo ordenado de manera descendente por nombre')
const arrayOrdenadoNombre = articulos.sort((empleado1,empleado2) => {
    return (empleado1.nombre > empleado2.nombre) ? - 1 : 1
})
console.log(arrayOrdenadoNombre)

const arregloNuevo = articulos.slice()
console.log('Arreglo ordenado de manera ascendente por precio')
const arrayOrdenadoPrecio = arregloNuevo.sort((a,b) => {
    return a.precio - b.precio
})
console.log(arrayOrdenadoPrecio)

//EJERCICIO 5
console.log('~~~~ EJERCICIO 5 ~~~~')

let total = 0;
let precioArticulo
for(let i = 0; i < articulos.length; i++) {

    precioArticulo = articulos[i].precio
    total = total + precioArticulo   
}

console.log(`El total a pagar es: $${total}`)
console.log('Alumno: Jesús Eli Viveros Buenrostro')