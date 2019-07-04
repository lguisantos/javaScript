const sequence = {
    _id: 1,
    get id() {
        return this._id++
    }
}

/**
 * @param {object} produtos Lista de produtos
 */
const produtos = {}

/**
 * 
 * @param {*} produto parametro de entrada
 * @param {function} salvarProduto função para salvar produtos no post
 */
function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

/**
 * Buscando o produto pelo ID
 * @param {number} id identificador do produto 
 */

function getProduto(id) {
    return produtos[id] || 'A lista de produtos está vazia!'
}

/**
 * Retorna todos os produtos
 * @param {} getProdutos busca o conteudo dentro do objeto produtos
 * @see www.google.com  
 */
function getProdutos() {
    return Object.values(produtos)
}
/**
 * Função para excluir produtos da lista
 * @param {number} id id enviado pela requisição para selecionar um produto
 */
function excluirProduto(id){
    delete produtos[id]
    return produtos
}

// Exportando nossas funções para poder utilizar em um módulo externo
module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto}