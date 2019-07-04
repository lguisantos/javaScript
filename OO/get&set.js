const sequencia = {
    _valor: 1, // dizendo que deve ser usada apenas internamente (Private)
    
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }  
    },

    get valor(){
        return this._valor++
    }
}

sequencia.valor = 10
// buscando a função get e set
console.log(sequencia.valor, sequencia.valor)
