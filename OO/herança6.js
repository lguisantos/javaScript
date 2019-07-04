
function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID 
}

const aula1 = new Aula("IoT", 200)
const aula2 = new Aula("Python", 0001)
//console.log(aula1, aula2)

// Simulando o comando new
function novo(f, ...params){
    // primeiro o new cria um objeto vazio
    const obj = {}
    // depois é atribuido o prototype da função que esta sendo instanciada para o objeto dentro do new
    obj.__proto__ = f.prototype
    // é aplicado a função apply para executar a função que esta sendo instanciada
    // passando como parametros o objeto criado e os parâmetros que a função esta recebendo
    f.apply(obj, params)
    // após todos os passos é retornada a função ja pronta
    return obj
}

// testando
const aula3 = novo(Aula, "Análise e desenvolvimento de sistemas", 46542456856)
console.log(aula3)