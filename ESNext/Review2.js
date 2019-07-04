//Arrow Function, o return é implícito quando a função permanece em uma única linha
const soma = (a, b) => a + b

//Arrow function (this), em uma arrow function o this sempre aponta para exports ou module.exports dentro do node
//Em uma função normal o escopo do this pode variar
const lexico1 = () => console.log(this === module.exports)
lexico1()

// operador Rest, ele te da a possibilidade de inserir vários parâmetros na chamada da função
function total(...numeros){
    let total = 0
    numeros.forEach( n => total += n)
    return total
}

console.log(total(1, 2, 3, 4, 5, 6))
