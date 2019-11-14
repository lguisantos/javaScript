const nums = [1, 2, 3, 4, 45]

//O map é usado para transformar um array para outro array de mesmo tamanho
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

const sequence = [1, 2, 3, 4, 5, 6];

const exponetial = e => {
  if (e % 2 == 0) {
    return e ** 12;
  }
  return e
};
const result = sequence.map(exponetial);
// console.log(result);
