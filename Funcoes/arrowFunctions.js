// Diferente da função normal, o this não varia quando usamos uma função arrow
// pois o this sempre equivale ao contexto em que a função foi escrita
function Pessoa(){
    this.idade = 0

    setInterval(()=>{
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa

// como podemos perceber, não precisamos chamar a função bind e
// nem criar um um contexto fixo como fizemos na aula passada

