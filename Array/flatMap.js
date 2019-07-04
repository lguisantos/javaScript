const escola = [{
    nome: "Sala B",
    alunos: [{
        nome: "Lucas",
        idade: 21,
        nota: 9.8
    }, {
        nome: "Valdez",
        idade: 22,
        nota: 3.0
    }, {
        nome: "Albert",
        idade: 19,
        nota: 7.9
    }],

    nome: "Sala C",
    alunos: [{
        nome: "Rebeca",
        idade: 18,
        nota: 4.5
    }, {
        nome: "Hugo",
        idade: 23,
        nota: 1.0
    }]
}]

var getNota = escola => escola.nota
console.log(getNota)
var getNotaTurma = turma => turma.alunos.map(getNota)
console.log(getNotaTurma)
var nota1 = escola.map(getNotaTurma)
console.log(nota1)