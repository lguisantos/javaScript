// Função Factory é uma função 
// que cria novos objetos a partir da chamada dessa função
function criaPessoa(name, sobrenome, idade, cargo, nivel, empresa){
    return {
        name,
        sobrenome,
        idade,
        profissao:{
               cargo,
               nivel,
               empresa
        }
    }
}

console.log(criaPessoa("teste", "teste", 21, "Desenvolvedor", "Pleno", "Deloitte"))
