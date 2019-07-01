const pessoa = {
    nome: "Lucas",
    idade: 21,
    peso: 90
}
// Lendo as chaves do objeto
console.log(Object.keys(pessoa))

// Lendo os valores do objeto
console.log(Object.values(pessoa))

// Lendo todo o conteúdo do objeto
console.log(Object.entries(pessoa)) 

// Percorrendo o conteudo do objeto usando "destructuring->([chave, valor])"
Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`)
})

Object.defineProperties(pessoa, 'nascimento', {
    enumerable: true,   // Atributo que permite ou não a propriedade ser listada
    writable: false,    // Atributo que permite ou não o propriedade ser alterada
    value: '07/12/1997' // Atributo que insere valor
})