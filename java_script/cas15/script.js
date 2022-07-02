class Car {
    constructor(n,y,c) {
        this.color = c
        this.name = n
        this.year = y
    }
}



const myCAr = new Car ("FORD", "1999", "RED");
car2 = {...myCAr}
console.log(car2);
console.log(myCAr);


