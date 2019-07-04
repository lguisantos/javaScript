// for of
for (let letra of 'Cod3r') {
    console.log(letra)
}

const assunto = ['Lucas', 'Maria', 'Rodolfo']

// for in, percorre o índice

for (let indice in assunto) {
    console.log(indice)
}

// for of, percorre os valores
for (let valor of assunto) {
    console.log(valor)
}

const assuntoMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: true }]
])

console.log('===============================')

console.log('Arrays completos:')
for(let assunto of assuntoMap){
    console.log(assunto)
}

console.log('===============================')

console.log('Apenas as chaves:')
for(let assunto of assuntoMap.keys()){
    console.log(assunto)
}