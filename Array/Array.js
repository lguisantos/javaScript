// Primeira forma de criar um Array, não é recomendado
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

// Adicionando elementos no Array
// 1°, mais usado para substituir um elemento em uma posição dentro do Array 
aprovados[3] = "Lucas"

//2°, apropriado para adicionar um elemento dentro do Array
aprovados.push('Rafael')
console.log(aprovados[3])
console.log(aprovados[4])
console.log(aprovados.length)

// Ordenando
aprovados.sort()
console.log(aprovados)
// A função SPLICE serve para adicionar valores em um índice,
// remover elementos de 1 array e tambem remover e adicionar elementos ao mesmo tempo
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)