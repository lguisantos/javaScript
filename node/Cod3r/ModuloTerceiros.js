//quando trabalhamos com arquivos de terceiros, precisamos carregar a biblioteca lodash
// quando nos referenciamos a uma biblioteca, usamos o "_" como referencia
const _ = require('lodash')

// executando uma função que retorna um numero entre 1 e 1000 em um intervalo de 2 segundos
setInterval(()=> console.log(_.random(1, 100)), 2000)

// instalamos o nodemon através do npm para fazer as atualizações dinamicamente