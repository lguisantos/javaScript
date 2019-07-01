// setando a porta que iremos usar
const port = 5000
// usando o framework express
const express = require('express')
const app = express()
// chamando o arquivo com as nossas funções
const banco = require('./bancoDeDados')

// chamando biblioteca para fazer um parse na nossa requisição
const body = require('body-parser')

app.use(body.urlencoded({extended: true}))


// usando funcções Middleware
// uma função Middle é uma função com 3 parâmetros "(requisição, resposta, proximaFunção)"
app.get('/produtos', (request, response, next) => {
    response.send(banco.getProdutos())
})

app.get('/produtos/:id', (request, response, next) => {
    response.send(banco.getProduto(request.params.id))
})

app.delete('/produtos/:id', (request, response, next) => {
    response.send(banco.excluirProduto(request.params.id))
})

app.post('/produtos', (request, response, next) => {
    const produto = banco.salvarProduto({
        nome: request.body.nome,
        preco: request.body.preco
    })
    response.send(produto) // quando for enviado para a web, as informações serão convertidas em JSON
})

// executando servidor
app.listen(port, () => {
    console.log(`O Servidor executando na porta ${port}.`)
})

