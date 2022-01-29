const web = {
    nombre: 'bremys',
    link: {
        enlace:'www.bremys.com'
    },
    redesSociales:{
        youtube:{
            enlace: 'www.youtube.com/bremysAG',
            nombre: 'bremysAG'
        },
        facebook:{
            enlace : 'www.facebook.com/bremysaguirre@hotmail.com',
            nombre: 'bremysAG/facebook'
        }
    }
}

console.log(web.redesSociales.facebook.enlace)

const {enlace, nombre} = web.redesSociales.youtube

console.log(enlace)
console.log(nombre)