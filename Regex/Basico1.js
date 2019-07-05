// extraindo um pedaço de uma string
// neste caso, só é retornado a primeira ocorrência
const string = `I found a love for me Darling just dive right in`
const regex = /love/
console.log(string.match(regex))

// extraindo todas as ocorrências
const palavra = 'pneumoultramicroscopicossilicovulcanoconiótico'
const regex2 = /an|am/g
console.log(palavra.match(regex2))

// extraindo todas as ocorrências verdadeiras ingnorando Maiúscula e Minúscula
const palavra2 = 'Johan, LUCAS, LuCas, jaburu, lucaS, LucaS, miguel'
const regex3 = /lucas/gi
const result = palavra2.match(regex3)
console.log(result)

//extraindo um pedaço sem saber o fim ou o começo
const palavra3 = 'have a fun at the bus link blink drink frink trinc mad had fat'
const regex4 = /.un.|.in.|.ad./g
const result2 = palavra3.match(regex4)
console.log(result2)

//extraindo todas as vogais de uma string
const texto = 'The quick brown fox jumps over the lazy dog.'
const regex5 = /[aeiou]/gi
const result3 = texto.match(regex5)
console.log(result3)

//colocando um intervalo
const texto2 = 'cat get hat bat mat fat nat kat'
const regex6 = /[a-z]at/g
const result4 = texto2.match(regex6)
console.log(result4)

// ignorando caracteres na hora da extração
const texto3 = 'Lucas Guimarães Santos_______________!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
const regex7 = /[^ãaeiou_!]/gi
const result5 = texto3.match(regex7)
console.log(result5)

// Ignorando todos os dígitos
let quoteSample = "2f32d34322f42d42s43fd5m234i5c2345e43.";
let myRegex = /[^\d{3}aeiou]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
console.log(result)

// identificando caracteres que se repetem 1 ou mais vezes dentro de uma string
const soccer = 'gooooooooooooooooooooooooooaaaal!'
const gPhrase = 'gut feeling'
const oPhrase = 'over the moon'
let goRegex = /go*/
console.log(soccer.match(goRegex))
console.log(gPhrase.match(goRegex))
console.log(oPhrase.match(goRegex))