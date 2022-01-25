const a = new Object()

const b = {

}

const bremys = {
    nombre: 'bremys',
    apellido: 'aguirre',
    edad: 37,
    pasatiempos: ['futbol', 'cine', 'iglesia'],
    soltero: false,
    contacto: {
        email: 'bremysromero85@gmail.com',
        twitter: '@bremysromero',
        movil: 3016612575
    },
    saludar: function(){
        console.log('Hola :)')
    },
    
    decirMiNombre: function(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}` )
    }

}


console.log(bremys.pasatiempos)
console.log(bremys.pasatiempos[1])
console.log(bremys.contacto)
console.log(bremys.contacto.twitter)
bremys.saludar()
bremys.decirMiNombre()
console.log(Object.keys(bremys))
console.log(Object.values(bremys))
console.log(bremys.hasOwnProperty('nombre'))
console.log(bremys.hasOwnProperty('nacimiento'))
console.log(a)
console.log(b)