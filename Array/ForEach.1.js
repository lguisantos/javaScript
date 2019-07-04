const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

console.log('lista de aprovados')
aprovados.forEach(function (nome, indice) {
  console.log(`${indice + 1}) ${nome}`)
})
console.log()
// Using a arrow function with only one parameter
aprovados.forEach(nome => console.log(nome))