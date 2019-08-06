// ****************************************************************************************
// importando a biblioteca, este framework é usado para:
// Gerenciar as requisições de diferentes requisições e rotas e URLs.
// Combinar com mecanismos de renderização de "view" para gerar respostas inserindo dados em modelos.
// Definir as configurações comuns da aplicação web, como a porta a ser usada para conexão e a localização
// dos modelos que são usados para renderizar a resposta.
// Adicionar em qualquer ponto da requisição um "middleware" para interceptar processar ou pré-processar e tratamentar à mesma.
// ****************************************************************************************

const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir')

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true }
);

//Buscando todas as models criadas
requireDir('./src/models')

// Rotas    
app.use('/api', require('./src/routes'));

app.listen(3000)