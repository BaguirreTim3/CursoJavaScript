
fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(res => res.json())
    .then(datos => {
        let nombresPokemones = []
        datos.results.forEach(element => {
            const {name, url} = element
            //console.log(name)
            //console.log(url)
            nombresPokemones.push(name)
        });
        //console.log(nombresPokemones)
    })
    .catch(error => console.log(error))



const obtenerPokemones = async()=> {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const date = await res.json()
        const arraysNombre = date.results.map(poke => poke.name)
        const nombrePokemon = date.results.filter(poke => poke.name === 'bulbasaur')
        const newList = date.results.filter(poke => poke.name != 'bulbasaur')
        console.log(nombrePokemon)
        console.log(arraysNombre)
        console.log(newList)
        
        date.results.forEach (element => {
            
            const {name, url } = element
            //console.log(name)
            //console.log(url)
            
        });
    }catch (error) {
        console.log(error)
    }
} 


obtenerPokemones()