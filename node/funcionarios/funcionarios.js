var url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
// a biblioteca axios é usada para fazer requisições http de um servidor remoto
var axios = require('axios');

var chineses = function(f){return f.pais === 'China'}
var mulheres = function(f){return f.genero === 'F'}
// usando uma função de agregação
var menorSalario = function(funcio, funcioAtual){
    return funcio.salario < funcioAtual.salario ? funcio: funcioAtual
}

axios.get(url).then(response => {
    var funcionarios = response.data;
  //  console.log(funcionarios)

var func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
  console.log(func)
});

