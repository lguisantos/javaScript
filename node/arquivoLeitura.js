const fs = require('fs')

const produtos = {
    nome: 'Lucas',
    idade: 21,
    profissao: 'Programador'
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produtos), err =>{
    // caso err seja null, então será mostrada a mensagem.
    console.log(err || 'Arquivo Salvo com sucesso!');
});