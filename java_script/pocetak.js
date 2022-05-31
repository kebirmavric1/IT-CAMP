//false || false =false
// true && false=true
// false || true=false ||true
// false = true
// console.log(5 + 14); //19
// console.log('5' + 14);
// var1 =  -10;
// var2 = Boolean (var1);
// console.log(var2);
// console.log (0 || true);


// var3 = 'HELLO WORLD';

// var3 = prompt("Unesite vrednost");

// console.log( 2022 - var3);


// console.log("Hello World")
// for(i=1; i<=10; i++){
//     console.log("Unesite policu broj", i)
// }



// for(i = 0; i < 11; i++){
//     if ( i !== 7){
//         console.log(i);
//     }

// }

// suma = 0;

// for(i = 0; i < 18; i++){
//     suma = suma + i;
// }


//  console.log(suma);


// suma = 0

// for(i = 0; i < 21; i+= 2){
//     suma = suma + i;
//     console.log( "nakon broja",i,"zbir je", suma)
// }



// // broj =Number(prompt("Unesite broj"))
// broj = 8
// for(i=0; i<=broj;i+=2){
//     console.log(i)
// }


// console.log("Unesi broj:8")

// for(i = 9; i>0;i-- ){

//     console.log(i)
// }

// for(let i = 0;i<6;i++){
//     if(i<3){
//     console.log("phyton")}
//     else{
//         console.log("je super")
//     }
// }

// bbrojeva=Number (prom0pt("Unesite broj brojeva"))
// brParnih = 0;
// brNeparnih = 0

// for(i = 0; i<bbrojeva; i++){
//     broj=Number(prompt("Unesite broj"))

//     if( broj % 2 === 0){
//         brParnih++;
//     } else{
//         brNeparnih++;
//     }
// }

// console.log("Br parnih", brParnih);
// console.log("Br neparnih",brNeparnih);


bbrojeva=Number(prompt("Unesite broj"))
brDel = 0

for(i = 0; i<=bbrojeva;i++){
   if(bbrojeva % i === 0){
   console.log(i)
brDel++
   }

}
if (brDel === 2) {
    console.log('broj je prost')
}
