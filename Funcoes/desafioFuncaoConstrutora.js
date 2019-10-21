function Desafio(nome = 'Insira um nome'){
       this.nome = nome;    
       
       this.falar = () =>{
         console.log(`Meu nome é ${this.nome}`)
     }
}

const p1 = new Desafio()
p1.falar()