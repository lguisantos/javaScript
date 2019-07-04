// abrindo o array para podermos passar vários valores => "...nomes"
module.exports = function(...nomes){
     return nomes.map(nome => `${nome}, Boa Semana! `)
}