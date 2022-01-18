let mensaje = "¿Te gusta hacer bromas junto con tu amigo? idiotas estupido Es un momento agradable enviar un mensaje de broma a tu amigo sin revelar tu identidad. Luego podrás probar algunos sitios web que te dan la oportunidad de enviar mensajes de texto anónimos a otros. Estos sitios web ofrecen servicios gratuitos sin ninguna demanda de registro. También ocultan su IP y ubicación, por lo que la persona que recibe los mensajes anónimos no podrá realizar el seguimiento."
let nuevoMensaje = mensaje.split(" ")

let palabrasNegativas = ['idiotas', 'estupido']
console.log(nuevoMensaje)
let palabra = 'que'
let contador = 0

for (let j = 0; j < palabrasNegativas.length; j++) {
    palabraNeg = palabrasNegativas[j]
    console.log(palabraNeg)
    for (let i = 0; i < nuevoMensaje.length; i++) {
        let elemento = nuevoMensaje[i].toLocaleLowerCase()
        if(elemento === palabraNeg){
            contador += 1
        }
        
    }
  
    
}

console.log(contador)