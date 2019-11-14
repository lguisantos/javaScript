// // Lendo um arquivo JSON
const fileJSON = require("../dados");
// const onlyA = new Array

// const obj = fileJSON.map(function(data, index) {
//   name = data.first_name;
//   if (name.startsWith("A")) {
//       const filter = `${(name = JSON.stringify(name))} => ${index}`
//       onlyA.push(filter)
//     return ;
//   }
// });

// console.log(onlyA);

// Encapsulando maps
const arrayFilter = new Array();
const male = (people, index) => {
  if(people.gender == "Male") arrayFilter.push(`${people.first_name} => ${index}`)
};

const mapsEncapsulado = fileJSON.map(male);
console.log(arrayFilter);
