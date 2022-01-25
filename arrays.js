const a = [];
const b = [1, true, 'Hola', ['A', 'B', 'C', 'D', [1, 2, 3, 4]]]
const c = Array.of(1, 2 , 3, 4, 'hola')
const colores = ['verde', 'rojo', 'azul']

console.log(a)
console.log(b)
console.log(c)
console.log(b.length)
console.log(b[3][4][2])

colores.push('amarillo')

console.log(colores)

colores.forEach(function (elemento, indice){
    console.log(`<li id = ${indice}> ${elemento} </li>`)
})

