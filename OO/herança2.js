/*const avo = {
   car: "Lamborghini",
   colorEyes: "blue",
   height: 1.90,
   lastName: "Manteuffel",
   QI: 170,
   bloodType: "O-"
}

const pai = {
    __proto__: avo,
    name: "Gilbert",
    age: 45,
    car: "Maseratti"
}

const filho = {
    __proto__: pai,
    name: "Friedrich",
    age: 21
}

console.log(filho.car)

*/
//=================================//=========================//==================

// Exemplo de herança

const car = {
    velCurrency: 0,
    velMax: 300,

    acelerationMore(aceleration){
        if(this.velCurrency + aceleration <= this.velMax){
            this.velCurrency += aceleration
        }else{
            this.velCurrency = this.velMax
        }
    },
    status(){
        return `${this.velCurrency}Km/H de ${this.velMax}Km/H`
    }
}


const ferrari = {
    __proto__: car,
    model: "F40",
    velMax: 324,
    status(){
        return `${this.model} : ${super.status()}`
    }
}

const volvo = {
    __proto__: car,
    model: "V40",
    status(){
        return `${this.model} : ${super.status()}`
    }
}   

//Sefunda forma para estabelecer a Herança
// Object.setPrototypeOf(ferrari, car)
// Object.setPrototypeOf(volvo, car)

volvo.acelerationMore(254)
console.log(volvo.status())

ferrari.acelerationMore(300)
console.log(ferrari.status())
