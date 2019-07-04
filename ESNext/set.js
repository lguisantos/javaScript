// estrutura de conjunto que não aceita repetição e não é indexada
const times = new Set()

times.add('Vasco')
times.add('Sao Paulo').add('Palmeiras')
console.log(times)

//Verificando o tamamho do objeto Set
console.log(times.size)

//Verificando se a informação está contida dentro do objeto Set
console.log(times.has('Vasco'))

//Excluindo um elemento do Set
times.delete('Palmeiras')
console.log(times.has('Palmeiras'))

// Set em um array
const nomes = ['Lucas', 'Raquel', 'Júlia', 'Jéssica', 'Lucas']
const set = new Set(nomes)
console.log(set )
