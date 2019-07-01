const obj = {a: 1, b:2, c:3, soma(){
    return a + b + c
}}
console.log('Obj antes de se convertido para JSON:',obj)

// convertendo o obj para JSON
console.log('Obj convertido para JSON:',JSON.stringify(obj))
// convertendo um JSON para um Objeto
console.log(JSON.parse('{"a":1,"b":2,"c":3}'))