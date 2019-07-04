function MyObject(){}
console.log(MyObject.prototype)

obj1 = new MyObject
MyObject.prototype.nome = 'Lucas'
MyObject.prototype.idade = 21   
MyObject.prototype.falar = function(){
    console.log(`Olá, meu nome é ${this.nome} e eu tenkho ${this.idade} anos de idade!` )
}

obj1.falar()

// todas as funções tem uma atributo prototype, Ex: MinhaFunção.prototype