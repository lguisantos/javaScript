const pai = {
    nome: "Pedro",
    cabelo: "Ruivo"
}

// criando uma classe com herança do pai
const filha = Object.create(pai, {
    nome: {value: " Karine ", writable: false, enumerable: true},  
})

console.log(`A ${filha.nome} tem o cabelo ${filha.cabelo} igual ao cabelelo do pai!`)