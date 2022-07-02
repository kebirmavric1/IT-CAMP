// apoens = [25, 10, 5, 2, 1]
// amount = 46;
// i = 0

// money = []

// while (amount > 0) {

//     if (amount - apoens[0] >= 0) {
//         amount -= apoens[i]
//         money.push(apoens[i])
//     } else {
//         i++
//     }
// }

// console.log(money);




class Auta {
    constructor(m,g,c,b,pot){
        this.marka = m;
        this.godiste=g;
        this.cena=c;
        this.boja = b;
        this.potrosnja = pot;
    }
}

asd = {
    nekiProp: 'asdadasdas'
}

let mojAuto = new Auta("Audi",2010,13000,'Crna','Dizel')

console.log(mojAuto)
console.log({...mojAuto})
console.log(Object.assign({},mojAuto,asd))