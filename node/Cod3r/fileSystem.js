const fs = require('fs')

// a constante __dirname le o seu caminho atual
const caminho = __dirname + '/employee.json'

// Lendo o arquivo de forma síncrona
const conteudo = fs.readFileSync(caminho, 'utf-8')
// console.log(conteudo)

// Lendo o arquivo de forma assíncrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    for (let i = 100; i < 110; i++) {
        console.log(`${config[i].email} : ${config[i].first_name}`)
    }
})

const config = require('./employee.json')
//console.log(config)

//lendo os arquivos contidos dentro do diretório
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})
