var array = [
  
{nota: 21},
{nota: 22},
{nota: 23},
{nota: 24},
{nota: 25},
{nota: 26},
{nota: 27},
{nota: 28},
{nota: 29},
{nota: 12},
{nota: 23},
{nota: 54},
{nota: 76},
{nota: 34},
{nota: 4},
{nota: 1},
{nota: 55},
    {nota: 2}
];

var calc = array.map(array => array.nota).reduce(function(acumulad, atual){
    return acumulad + atual
})

console.log(calc)
