const carrinho = [
    '{"nome" : "Borracha", "preco" : 3.45}',
    '{"nome" : "Caderno",  "preco" : 13.90}',
    '{"nome" : "Kit de lapis", "preco" : 41.22}',
    '{"nome" : "Caneta", "preco" : 7.50}'
]

// retornando apenas o preço do json
var obj = json => JSON.parse(json)
var preco = produto => produto.preco

const result = carrinho.map(obj).map(preco)
console.log(result)