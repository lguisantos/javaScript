
const nums = [1, 2, 3, 4, 45] 

//O map é usado para transformar um array para outro array de mesmo tamanho
//O map é um for com propósito 
//Neste exemplo iremos ler o primeiro array e gerar outro array com o dobro dos valores do primeiro
let result = nums.map(function(element, index){
    return element ** index
})



// Funções arows
const soma = e => e + 10
const triplo = e => e * 3
const convertReal = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(triplo).map(soma).map(convertReal)
console.log(resultado)

