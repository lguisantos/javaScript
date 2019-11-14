// Funções auto-invocadas
// Tudo dentro de uma função auto-invocada é de escopo local

(function() {
  console.log("Será executada na hora!");
  console.log("Tudo aqui dentro é de escopo local!");
}) /*Invocando a funlçao =>*/();
