// //convertendo uma String para Objeto
// var string = `{"nome":"Lucas", "idade": 21, "profissao": "Progrmador", "Empresa": "Deloitte"}`;

// var convertStringToJSON = JSON.parse(string);
// console.log(convertStringToJSON);
// console.log(convertStringToJSON.nome);

// const idade = function() {
//   return new Promise(function(resolve, reject) {
//     const idade = 20;
//     if (idade >= 18) {
//       console.log(resolve);
//     } else {
//       console.log("O usuário é menor de idade:", idade);
//     }
//   });
// };

// const result = idade()
//   .then(function(resolve) {
//     console.log('alguma coisa', resolve);
//   })
//   .catch(function(reject) {
//     console.log(reject);
//   });

const repositorio = function() {
  return new Promise(function(resolve, reject) {
    const user = document.querySelector("input").value;
    axios
      .get(`https://api.github.com/users/${user}`)
      .then(function(resolve) {
        console.log(resolve.data);
        const li = document.createElement("li");

        const textNode = document.createTextNode(
          `https://api.github.com/users/${user}`
        );
        li.appendChild(textNode);
        document.querySelector("#ul").appendChild(li);
      })
      .catch(function(reject) {
        console.log("erro na requisição:", reject);
      });
  });
};
