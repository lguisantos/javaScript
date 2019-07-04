// o nosso require guarda cache, sendo assim, tudo que for feito dentro do contadora será refletido no contadorB
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

//Porém, quando usamos uma função "()" na frente do nosso require, estamos criando uma nova função a toda chamada
// logo o valor de contadorC não interfere no valor de contadorD
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorC.inc()
contadorC.inc()
contadorA.inc()
contadorA.inc()

console.log(contadorA.valor, contadorB.valor);

console.log(contadorC.valor, contadorD.valor)