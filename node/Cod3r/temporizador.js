// para podermos trabalhar melhor com temporizadores, vamos instalar npm i node-schedule
const schedule = require('node-schedule')

// a tarefa será execultada a cada 5 segundos, apartir das 12 horas, ignorando o dia do mês e o mês
// executando em uma terça(2), quarta(3)...
const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 2',  function(){
    console.log('Executando tarefa 1', new Date().getSeconds())
})

//Cancelando a primeira tarefa após 20 segundos de execução 
setTimeout(function(){
    tarefa1.cancel()
console.log('Cancelando tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
// Criando um intervalo de segunda a sexta
regra.dayOfWeek = [new schedule.Range(1,5)]
//será executada a partir das 12 horas
regra.hour = 12
//No segundo 30
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})