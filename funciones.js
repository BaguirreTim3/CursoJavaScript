//funcion que no recibe parametros pero que retorna un valor

function estaFuncionDevuelveUnValor(){
    return 'Este es el valor que devuelve esta funcion'
}


let salida = estaFuncionDevuelveUnValor()
console.log(salida)


//funcion que recibe parametros y retorna un valor

function saludarUsuario(nombre = ' '){
    return `Hola ${nombre} como estas`

}

let nom = 'bremys aguirre r'

let saludo = saludarUsuario(nom)
console.log(saludo)

function ingresarDatos(nombre, apellido, edad){
    datosUsuario = {
        nombre,
        apellido,
        edad,  
    }
    date.push(datosUsuario)
}

let date = [];
ingresarDatos('bremys', 'aguirre', 37)
ingresarDatos('sara', 'perez', 24)
ingresarDatos('samuel', 'aguirre', 3)
ingresarDatos('evangeline', 'perez', 2)

console.log(date)

//funcion espresada
const funcionExpresada = function(){
    console.log('esto es una funcion expresada')
}

funcionExpresada()


