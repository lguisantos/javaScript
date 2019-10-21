const pessoa = {
  saudacao: "Bom dia!",
  falar() {
    try {
      console.log(saudacao);
    } catch {
      console.log(
        "Para acessar um método fora da função, precisa,os colocar o 'this'"
      );
    }
  }
};

pessoa.falar();
// usando um bind
// a função bind define um contexto fixo para a o this da função
// logo o this da função falar, sempre será o objeto pessoa, nuca vai variar;
const falarDePessoas = pessoa.falar.bind(pessoa);
///////////////////////////////////////////////////////////////////////////////////////////////////

function Pessoa() {
  this.idade = 0;

  const self = this;
  setInterval(function() {
    self.idade++;
    console.log(self.idade);
  }/*.bind(this)*/, 1000);
}

new Pessoa