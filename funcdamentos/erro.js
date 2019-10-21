function tratarErro(err) {
    throw new Error('Alguma coisa deu errado!')
}

function teste(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (err) {
        tratarErro(err);
    } finally {
        console.log('Terminamos a tratativa de erro!');
    }
}
const obj = { name: 'Lucas' }
teste(obj)

