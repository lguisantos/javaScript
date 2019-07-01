const produto = [
    { nome: "Notebook", preco: 4999, fragil: true },
    { nome: "Iphone X", preco: 9000, fragil: true },
    { nome: "Maserati", preco: 500000, fragil: false },
    { nome: "Taça alemã", preco: 500, fragil: true },
    { nome: "Copo de adamantium", preco: 10, fragil: false}
]

// usando filter encadeado
var caro = produto => produto.preco >= 500
var fragil = produto => produto.fragil == false 

console.log(produto.filter(caro).filter(fragil)) 
