function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

// Usamos o then para retornar o resultado da Promise
//podemos encadear vários then seguidos, trazendo vários resultados
falarDepoisDe(3, 'Resolve')
                          .then(frase => frase.concat('?!?'))
                          // O resultado de um then sempre é passado para o then seguinte
                          .then(outraFrase => console.log(outraFrase))