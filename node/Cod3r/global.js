// Tudo d=que esta dentro de global, todos os arquivos conseguem ler
// Não é uma boa prática fazer isso

// Colocamos o freeze para que o objeto não possa ser mudado
global.minhaFuncao = Object.freeze({ 
    nome: 'Lucas',
    idade: 21,
    empresa: 'Deloitte'
})