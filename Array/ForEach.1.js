const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

// aprovados.forEach((valor, indice, arrayCompleto) => {
//   console.log(`${indice + 1} ) ${valor}`);
// });

const exibirAprovados = nome => console.log(nome)

aprovados.forEach(exibirAprovados)