// pessoa -> 123 (endereço de memória)
const pessoa = {
    nome: "Pedro",
    idade: 23
}
// podemos mudar o valor do objeto, mas não o seu endereço de memória (pessoa)
// ou seja, podemos modificar o conteudo da objeto ja atribuido a constante
// mas não podemos atribuir outro objeto para a constante
pessoa.nome = "Lucas"
pessoa.idade = 21
console.log(pessoa)
