// ES8: Object.values/ Object.entries

//Pegando os valores do objeto
const obj = {a: 1, b:2, c:3}
console.log(Object.values(obj))

//Pegando Chave e Valor de um objeto
console.log(Object.entries(obj))

// Podemos criar Classes
class animal{}
class Cachorro extends animal{
    latir(){
        return 'au au au!'
    }
}

console.log(new Cachorro().latir())