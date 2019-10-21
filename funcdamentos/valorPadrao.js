// Estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c;
}
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0, 0));

// Estratégia 1 para gerar valor padrão
function soma2(a, b, c) {
  a = a !== undefined ? a : 1;
  b = 1 in arguments ? b : 1;
  c = isNaN(c) ? 1 : c;

  return a + b + c
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0, 0));

// Valor padrão a versão do ES2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(2, 2, 2))

// Exercício 
function openOrSenior(data) {
  const status = new Array();
  for (let i = 0; i < data.length; i++) {
    data[i][0] >= 55 && data[i][1] >= 7 ? status.push('Senior') : status.push('Open')
  }
  return status
}

openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])//,['Open', 'Senior', 'Open', 'Senior']
openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]])//,['Open', 'Open', 'Open', 'Open']
openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]])//,['Senior', 'Open', 'Open', 'Open']
