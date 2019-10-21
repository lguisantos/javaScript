// Recurso novo, apenas disponível após ES2015

const pessoa = {
    nome: "Lucas",
    sobrenome: "Guimarães Santos",
    endereco: {
        logradouro: "Rua do caralho",
        numero: 01234
    }
}

// Extraindo atributos especificos
const { nome, sobrenome } = pessoa


// Renomeando os atributos
const { logradouro: l, numero: n } = pessoa.endereco
// console.log(l, n)

//Usando destructuring em funções

function ran({ min = null, max = null }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { min: 31, max: 403 }
console.log(ran(obj))