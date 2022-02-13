//Ejemplos TypeScript

//tipos de datos
const nombreUsuario: string = "Bresar";
const contactoLinkedIn: number = 52;
const esPublico: boolean = true
const nombre: string[] = ["alicia", "bob", "javier", "andres"]
const edades: number[] = [18, 19, 24, 5]
const sonAdultos: boolean[] = [true, true, true, false]
const datosPersoles: any[] = ["bremys", "aguirre", 37, true]
const datos: unknown[] = ["sara", "perez", 24, true]


//Funciones

function suma(a:number, b:number){
    return a + b
}

function resta(a:number, b:number): number{
    return a + b
}

let ninja: {nombre: string, edad: number} = {
    nombre:'bremys',
    edad: 37
}

console.log(ninja)
console.log(nombre)

//types aliases

type ninja = {
    nombre: string,
    edad: number
};


let sara: ninja = {
    nombre: 'sara luz perez',
    edad: 37
}

let bremys: ninja = {
    nombre: 'bremys aguirre',
    edad: 34
}


console.log(bremys, sara)