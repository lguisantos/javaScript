const ferrari = {
    modelo: "F40",
    velMax: 324
}

const volvo = {
    modelo: "V40",
    velMax: 200
}
// O __proto__ seria o nosso protótipo da onde o obejeto atual é Herdado, a classe "Pai"
// O __proto__ serve para buscar o objeto pai
console.log(ferrari.__proto__ )

// Todo objeto por padrão aponta para Object.prototype
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

// O Object.prototype é o nosso objeto de nível mais alto, não exitem heranças para ele
console.log(Object.prototype.__proto__)

