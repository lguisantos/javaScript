// Callback são funções que são chamada a cada nova interação

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}=> ${nome}`)
}
fabricantes.forEach(imprimir);
//======================================================//

const nota = [2, 7, 3, 4, 45, 23, 645, 2, 1, 1, 0, 43];

// Sem callback
const nota = [9.8, 3, 4.5, 6, 7.7, 7, 6.9];
var _ = [];

function menos7(nota) {
  if (nota < 7) {
    _.push(nota);
  }
}
nota.forEach(menos7);
console.log(_);

// Usando callback
const notabaixa = nota.filter(nota => nota < 7);
console.log("nota", notabaixa);

function minValue(values) {
  values.sort();
  for (let i = 0; i < values.length; i++)
    values[i] == values[i - 1] ? values.splice(i - 1, 1) : null;
  console.log(values);
}

minValue([5, 7, 9, 5, 7]);
