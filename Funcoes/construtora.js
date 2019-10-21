function Carro(velocidadeMaxima = 200, delta = 20) {
  // atrinuto privado
  let velocidadeAtual = 0;

  //Metodo publico
  this.acelerar = () => {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    }
  };

  //Metodo Publico
  this.getVelocidadeAtual = () => {
    return velocidadeAtual;
  };
}

const ferrari = new Carro(350, 50);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();

console.log(ferrari.getVelocidadeAtual());
