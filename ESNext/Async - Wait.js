const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, resp => {
            let resultado = ''

            resp.on('data', dados => {
                resultado += dados
            })

            resp.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}

// Recurso do ES8
// O objetivo deste recurso é simplificar o uso de Promises..
// A palavra async é obrigatória, caso contrário o wait não irá funcionar
let obterAlunos = async () =>{
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA, turmaB, turmaC)
}// Retorna um objeto AsyncFunction 

obterAlunos()
          .then(alunos => alunos.map( a => a.nome))
          .then(nomes => console.log(nomes))