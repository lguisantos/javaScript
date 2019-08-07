const mongoose = require('mongoose')

const Product = mongoose.model('Product')

module.exports = {
    /**
     * @function index Função que lista todos os itens contidos no DB
     * @param {*} req 
     * @param {*} res 
     */
    async index(req, res){
        const products = await Product.find();
        return res.json(products)
    },

    /**
     * @function show Função que mostra os detalhes dos itens
     * @param {*} req 
     * @param {*} res 
     */
    async show(req, res){
        const product = await Product.findById();
    },

    /**
     * @function store Função que armazena novos registros no banco de dados
     * @param {*} req Requisição feita pelo cliente
     * @param {*} res Resposta enviada pelo servidor
     */
    async store(req, res){
        const product = await Product.create(req.body)
        return res.json(product)
    }
}