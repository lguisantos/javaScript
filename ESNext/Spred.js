// usando uma Spred
const funcionario = {name: 'Maria', salario: 1234.45}

//Pegando todos os atributos de funcionário
const clone = {ativo: true, ...funcionario}
console.log(clone)

// Usando Spred dentro de um array
const grupoA = ['João', 'Pedro', 'Glória']

//Pegando os atributos de grupoA
const grupoFinal = ['Maria', ...grupoA]
console.log(grupoFinal)