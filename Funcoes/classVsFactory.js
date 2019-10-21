//Usando uma classe
class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Lucas')
p1.falar()

// Usando uma função factory
const pessoa = nome => {
    return {
        falar: ()=>{
            console.log(`Meu nome é ${nome}`)
        }
    }
}

const p2 = pessoa('testando')
p2.falar()