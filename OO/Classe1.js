class Lancamento{
    constructor(nome = "Genérioco", valor = 0){
        this.nome = nome
        this.valor = valor
    }
    
}

class Financeiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento("Salário:", 95000)
const contaLuz = new Lancamento("Conta de Luz:", -300)
const contaAgua = new Lancamento("Conta de água:", -203)
const divCarro = new Lancamento("Parcela de carro:", -3000)
const divCasa = new Lancamento("Parcela da Mansão:", -12000)

const contas = new Financeiro(12, 2019)
contas.addLancamentos(salario, divCasa)
console.log(contas.sumario())