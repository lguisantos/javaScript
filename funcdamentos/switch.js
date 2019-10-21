const testeSwitch = nota => {
    switch (Math.floor(nota)) {
        case 10:
            console.log(`${nota} => Parabéns, eu não esperava nada menos de você!`);
            break;
        case 9:
            console.log(`${nota} => Está na média, mas da para melhorar`);
            break;
        case 8: case 7: case 6: case 5: case 4:
            console.log(`${nota} => Tenho certeza que se você se esforçar mais vai conseguir chegar no 10!`);
            break;
        case 3: case 2: case 1: case 0:
            console.log('Affs, Ta fodido!');
            break;
        default:
            console.log('Nota inválida!');
    }
}
testeSwitch();