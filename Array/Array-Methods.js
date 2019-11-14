const pilotos = ['Alonso', 'Vettel', 'Raikkonen', 'Massa']
// o Method pop retira o ultimo elemento do array
pilotos.pop()
console.log(pilotos)

// Adicionando um elemento
pilotos.push('Verstappen')

// O method shift retira o primeiro elemento da lista
pilotos.shift()

// O method unshift adiciona um elemento na primeira posição do array
pilotos.unshift('Hamilton')

// Adicionar um elemento com splice
pilotos.splice(2, 0, 'Botta', 'Massa')

// Removendo elementos com splice
pilotos.splice(3, 1)

// O method slice retorna um novo array a partir do indice 
// O slice pega um pedaço do array
const algunsPilotos1 = pilotos.slice(2)

const algunsPilotos2 = pilotos.slice(1, 4)
