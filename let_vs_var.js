/* si declaramos variables con la palabra reservada var 
   no se va a repetar el comportamineto de bloque de una
   variables
*/ 
var musica = 'rock'
console.log(musica)

{
    var musica = 'pop'
    console.log(musica)
}

console.log(musica)

/* si declaramos variables con la palabra reservada let 
   si va a repetar el comportamineto de bloque de una
   variable
*/ 
let musica2 = 'balada'
console.log(musica2)

{
    let musica2 = 'ballenato'
    console.log(musica2)
}

console.log(musica2)

/* probando el console.table */
const employees = {
    leader: {
        id: '1',
        name: 'bremys',
        lastname: 'aguirre',
        email: 'bremys@gmail.com'
    },
    manager: {
        id: '2',
        name: 'sara',
        lastname: 'de aguirre',
        email: 'sara@gmail.com'
    },
    developer: {
        id: '3',
        name: 'luis',
        lastname: 'urango',
        email: 'luis@gmail.com'
    },
}

console.table(employees)