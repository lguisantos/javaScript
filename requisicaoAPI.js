// // utilizando uma Promisse
// var minhaPromisse = function() {
//   return new Promise(function(resolve, reject) {
//     const req = new XMLHttpRequest();
//     req.open("GET", "https://api.github.com/users/lguisantos");
//     req.send(null);

//     req.onreadystatechange = function() {
//       //verificando o retorno da minha requisição
//       if (req.readyState === 4) {
//         //verificando o status do retorno
//         if (req.status === 200) {
//           resolve(JSON.parse(req.responseText));
//         } else {
//           reject("Erro na requisição");
//         }
//       }
//     };
//   });
// };

// var resultado = minhaPromisse()
//   // É chamado pelo resolve quando a requisição da certo;
//   .then(function(response) {
//     console.log(response);
//   })
//   // É chamado quando da um erro na requisilção
//   .catch(function(error) {
//     console.log(error);
//   });

//Fazendo requisição com o axios (facilitando as coisas)

axios
  .get("https://api.github.com/users/lguisantos")
  .then(function(resolve) {
    console.log(resolve);
  })
  .catch(function(reject) {
    console.log(reject);
  });
