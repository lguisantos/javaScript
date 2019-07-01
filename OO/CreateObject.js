// usando notação literal
    const object = {}
    console.log(object)

// Object em JS
const obj = new Object()

console.log(typeof(obj))

// Funções construtoras
function Produto(nome, preco, desconto){
    this.nome = nome
    this.getPrecoComDesconto = ()  =>{
        return preco * (1 - desconto)
    }
}

const p1 = new Produto("Caneta", 7.99, 0.15)
const p2 = new Produto("Notebook", 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função factory
function funcionario(nome, salario, faltas){
    return {
        nome,
        salario,
        faltas,
        getSalario(){
            return (salario / 30) * (30 - faltas)
        }
    }
}

const f1 = funcionario("João", 7900, 4)
const f2 = funcionario("Maria", 11400, 1)
console.log(f1.getSalario(),  f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = "Ana"
filha.idade = 20
filha.formacao = "Ensino Superior"
console.log(filha)