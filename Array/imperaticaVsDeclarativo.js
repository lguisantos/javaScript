/*const alunos = [
    {nome: "Joao", nota: 8.0},
    { nome: "Maria", nota: 10.0 }
]

// Código imperativo
// todas as funções são executadas ao mesmo tempo
let total1 = 0
for(let i=0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Código imperativo
// Maior reuso do código, cada função tem um objetivo específico
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)*/
