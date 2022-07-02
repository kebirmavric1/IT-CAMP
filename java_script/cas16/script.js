// function nazivFunc() {
//     console.log('komanda fukncije');
//     console.log('komanda fukncije');
//     console.log('komanda fukncije');
//     console.log('komanda fukncije');
// }

// console.log("comanda");
// console.log("comanda");
// console.log("comanda");
// console.log("comanda");


// nazivFunc();

// console.log("comanda");
// console.log("comanda");

// function ispisMatriceO(arg1) {

//     for (let i = 0; i < matrica.length; i++) {
//         for (let j = 0; j < matrica[i].length ;j++) {

        
            
//         }
//     }


// }

// matrica = [
//     [1, 2, 3]  
//       [4, 5, 6]
// ]


// ispisMatrice(matrica);



//---------------------------------



function reverseNum (num) {

    num = String(num);
    res = "";

    for (let i = 0; i < num.length;i++) {
        res = num[i] + res;
    }
    return Number (res)
 
}

x = 32243;
outp = reverseNum(x)
console.log(outp);

//DRUGO RESENJE--------


function reverseNum (num) {

    num = String(num);
    res = "";

    for (let i = num.length - 1;i > 0;i--) {
        res = num[i] + res;
    }
    return Number (res)
 
}

x = 32243;
outp = reverseNum(x)
console.log(outp);



//TRECE RESENJE-------

 function reverseNum(num) {
    num = String(num).split("");


    for(let i = 0;i < num.length / 2;i++) {
        pomVar = num[i];
        num[i] = num[num.length - 1 - i];
        num[num.length -1 - i] = pomVar;

    
    }

    return Number(num.join(""));
 }


 x = 32243;

 outp = reverseNum(x)

 console.log(outp);