const catalogo = require('./database/catalogo.json')
//console.log (catalogo)
// listar todos os filmes que estão em cartaz (listarTodosOsFilmesEmCartaz)

const listarTodosOsFilmesEmCartaz = ()=>{
    catalogo.forEach((filme)=> console.log (`Nome do filme : ${filme.titulo}`))
}

// buscar um filme específico pelo código dele (buscarFilme) -> parametro: codigo

const buscarFilme = (codigo) =>catalogo.find((filme)=> filme.codigo == codigo)

//console.log(catalogo.filter((filme)=> filme.codigo === 2))
// alterar o status de emCartaz (true -> false e se tiver false -> true) (alterarStatusEmCartaz) -> parametro: codigo

const alterarStatusEmCartaz = (codigo, callback) =>{
    let filme = callback(codigo)
    if(!filme){
        console.log("filme não encontrado!")
        return null;
    }
    filme.emCartaz == true ? filme.emCartaz = false : filme.emCartaz = true ;
    return filme;
}
//let filme =catalogo.find((filme)=> filme.codigo ==codigo)
//filme.emCartaz =! filme.emCartaz ´´´outro metodo 

console.log(alterarStatusEmCartaz(5, buscarFilme))
listarTodosOsFilmesEmCartaz()