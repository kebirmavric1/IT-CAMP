// // for(i = 0; i < 11; i++){
// //     if ( i !== 7){
// //         console.log(i);
// //     }

// // }


// // suma = 0;

// // for(i = 0; i < 18; i++){
// //     suma = suma + i;
// // }


// //  console.log(suma);

// //  broj = Number(prompt("Unesite broj"))
// // broj = 8
// // for(i=0; i<=broj;i+=2){
// //     console.log(i)
// // }

// // console.log("Unesi broj:8")

// // for(i = 9; i>0;i-- ){

// //     console.log(i)
// // }


// // bbrojeva=Number (prompt("Unesite broj brojeva"))
// // brParnih = 0;
// // brNeparnih = 0;

// // for(i = 0; i<bbrojeva; i++){
// //     broj=Number(prompt("Unesite broj"))

// //     if( broj % 2 === 0){
// //         brParnih++;
// //     } else{
// //         brNeparnih++;
// //     }
// // }

// // console.log("Br parnih", brParnih);
// // console.log("Br neparnih",brNeparnih);



// // 



// // // n = Number(prompt('Unesi koliko redova zelis'))
// // // znak = ' '
// // // for(i=0;i<n;i++) {

// // //     znak = znak + "*";
// // //     console.log(znak);

// // }


// unos = Number(prompt("Unesi broj"))
 
// a = 1;
// b = 1;

 
// for( i = 1; i<=unos;i++) {
// str = " "

// for( j = a ;j <= b;j++) { 

//    str += j + " "
    
//    a = j + 1;

// }
// b = a + i ;
// console.log(str);

// }








//-----------------------------------------------------------------




niz = [1, 2, 3, 4,20,30,40,50,12]
let unos = Number(prompt("koliko zelsi elemenata"))

for(i=0; i<unos; i++) {
    niz.pop();
}

console.log(niz)


function sum(a,b){
    console.log(a+b)
}


sum(20,30);
//------------------------------------------




n  = parseInt(prompt('Unesi broj'))

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

broj = arr.length - n

newWearr = arr.splice(broj)

console.log(newWearr);