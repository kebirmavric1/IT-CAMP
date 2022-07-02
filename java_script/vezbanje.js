    // let cysecor ='Subscribe na moj kanal!!!';

// let godine = 5.1;

// let mjesec = 3;

// let rezultat = godine + mjesec;

// let cysecor_broj_subs = 'Cysecor ima 45k subs';

// console.log(typeof(cysecor_broj_subs))

// console.log(cysecor_broj_subs);

// let neki_broj = 65;
// let drugi_broj = '5';

// drugi_broj = parseInt(drugi_broj);

// drugi_broj = '5'

// console.log(drugi_broj);


// let prvi_broj = 5;

// let drugi_broj = 10;

// let treci_tmp;
// console.log('Prvi broj:' + prvi_broj);
// console.log('Drugi broj:' + drugi_broj); 

// treci_tmp = prvi_broj;
// prvi_broj = drugi_broj;
// drugi    _broj = treci_tmp;
// console.log('Prvi broj:' + prvi_broj);
// console.log('Drugi broj:' + drugi_broj);


// const drugi_broj = 10;

// let ime = 'cysecor';
// let prezime = 'sigurnost';
// let godine = 18;
// console.log(ime);
// console.log(prezime);
// console.log(godine);

// godine *= 2;

// let recenica = ' Ja sam ' + ime + ' imam ' + godine + ' godina.';


// console.log(recenica);

// suma = 0

// for(i= 0; i<18;i++){
//     suma = suma + i;
//     console.log('zbir sume je',+ suma)
// }

// let prvi_broj = 10;
// let drugi_broj = 5;


// let rezultat = prvi_broj / drugi_broj;
// console.log(rezultat);


// let prvi_broj = 10;
// let drugi_broj = 5;
     
// let treci_broj = 7
// let cetvrti_broj = 8;

// console.log(prvi_broj > drugi_broj)
// console.log(treci_broj > cetvrti_broj);

// console.log((prvi_broj > drugi_broj)  || (treci_broj > cetvrti_broj));


// let prvi_broj = 5;
// let drugi_broj = 10;
// console.log(prvi_broj < drugi_broj);

// if(prvi_broj < drugi_broj){
//     console.log('Prvi broj je manji od drugog');
// } else{
//     console.log('Prvi broj nije manji od drugog');
// }


// let vrijeme = 21;

// if( vrijeme < 10){
//     console.log('Dobro Jutro');

// }else if( vrijeme <20){
//     console.log('Dobar dan');
// }else{
//     console.log('Dobro vece')
// }



// let mjesec = 6;

// if(mjesec === 1){
//     console.log('Januar');
// } else if(mjesec === 2) {
//     console.log('Februar');
// } else if(mjesec === 3 ) {
//     console.log('Mart')
// } else if(mjesec === 6) {
//     console.log('Jun');
// }


// let mjesec = 5;

// switch(mjesec){
//     case 1:
//     console.log('Januar');
//     break;
//     case 2:
//         console.log('Februar');
//         break;
//         case 4:
//             console.log('April');
//             break;
//             case 5:
//                 console.log('Maj');

// }
//---------------------------------------------------------------
// // 25 novcanica
//  let novcanica = 45;
//  // 10 eyra vrijednost jedne novcanice
//  let vrijednost_novcannice = 20

// //izbrojane novanice
// let izbrojane_novcanice = 0
// /*
//  broji novcanice sve dok je brojac manji od 
// broja novcanica
// */
//  while (izbrojane_novcanice < novcanica) {
// izbrojane_novcanice++;



//  }

//  console.log(izbrojane_novcanice * vrijednost_novcannice);



//++++++++++++++++++++++++++++++++++++++++++++++++++++
//drugi primer


// let novcanice = [10, 5, 20, 50, 5, 10, 100, 20, 50];
// let broj_novcanica = novcanice.length;
// let brojac = 0;



// while (brojac < broj_novcanica) {
//     console.log('----------------');
//     console.log('Uslov prosao');
//     console.log(`Novcanica na poziciji [${brojac}]: ${novcanice[brojac]}` );

    
//     brojac++;

// }

// if(brojac < broj_novcanica) {
//     console.log('broja je manji');
// }  else {
//     console.log('brojac nije manji');
// }

// console.log('brojac:' + brojac);






// bbbrojevi = Number(prompt("Unesite broj brojeva"))
// brParnih = 0
// brNeparnih = 0
// for (i = 0; i < bbbrojevi;i++) {
//  broj = Number(prompt("Unesi broj"))

// if (broj  % 2 === 0) {
//     brParnih++
// } else {
//     brNeparnih++
// }
// console.log(brParnih, "Broj je paran");
// console.log(brNeparnih, "Broj je neparan");

// }

// brbrojeva = Number (prompt("Unesi neki broj"))
// brDel = 0

// for (i = 0; i <brbrojeva;i++) {
//     if (brbrojeva % i === 0) {
//       console.log(i);
//       brDel++  
// }
// }
//  if (brDel === 2) {
//     console.log("Broj je prost");
//  }
 

// function klikni_me(a, b){

//    console.log(a + b);
// }

// klikni_me(20, 30);    

// //---------------------------

// // const  klikni_me_nova = () => {
// //     let a = 5
// //     let b = 10;
// //     console.log(a + b);
// // }
// // klikni_me_nova();

// const klikni_me_nova = (a, b) =>   console.log(a + b);
// klikni_me_nova(100, 500)



// const klikni = (dugme) => {
//     console.log(dugme.innerText);
// }


// let btns = document.querySelectorAll('button');

//  btns.forEach(function(btn) {
//       //Event listener koji ceka za klik za svaki btn
//     btn.addEventListener("click", function(event){
//         let clicked_btn = event.target
//         console.log(clicked_btn.innerText);
//     });
    
// });

// let link = document.querySelector('#link');
// link.addEventListener("click",(event) => {
// console.log(event.target);
// } )

// // btn.addEventListener("click", function(){
// //     console.log("KLIKNUO");
// // });



// brojac = 0;
// sum = 0

// kolicina = parseInt(prompt("Unesi vrednost"))
 
// while (brojac < kolicina) {
//     sum += brojac
//     brojac++
// }
// console.log(sum);

suma = 0;

for (let i = 0; i < 21 ;i++) {
    suma = suma + i;
    console.log(suma);

}
console.log(suma);



suma = 0;

for(let i = 0;i <21; i+=2) {
    suma += i

    console.log("nakon broja", i + " zbir je", suma);
}


n = Number(prompt("Unesi koliko znakova zelis"))
 znak = ''
  for (let i = 0;i < n;i++) {
    znak = znak + "*"
    console.log(znak);

  }

unos = Number(prompt("Unesi broj"))
a = 1;
b = 1;

for(let i = 1 ; i <= unos;i++) {
    str = ""
    for (j = a; j <= b;j++) {
        str += j + " ";
        a = j + 1;
    }
    b = a + i;
    console.log(str);
}

brojac = 1;

while (brojac < 100) {
    if (brojac % 3 === 0 && brojac % 5 === 0) {
        console.log("fizzbuzz");
    } else if (brojac % 3 === 0) {
        console.log("fizz");
    } else if (brojac % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(brojac);
    }
    brojac++
}

// while (true) {
// operator = Number(prompt("Unesi operator"))
 
//    if (operacija === "exit" || operacija === "0") {
//     console.log('kraj programa');
   
// }
// br1 = Number(prompt('Unesi prvi broj'))
// br2 = Number(prompt('Unesi drugi broj'))


// switch (operacija) {
//     case  "+" :
//     console.log("Zbir dva broja je", br1 + br2);
//     break;
//  case "-": 
//  console.log('Razlika dva broja je', br1 - br2);
//  break;
//  case "*":
//     console.log("Proizvod dva broja je", br1 * br2);
//     break;
//     case "/":
//         console.log("Kolicnik dva broja je", br1 / br2);
//         break;

// }

// }

arr = [NaN, 1, 15, false, -22, '', undefined, 47, null]

novi = []

for ( el of arr) {
    if(el) {
        novi.push(el)
        
    }
    
}
console.log(novi);


arr1 = [1, 2, 3]
arr2 = [2, 30, 1]
arr3 = arr1.concat(arr2);
arr4 = [];


for (let i = 0; i <arr3.length;i++) {
    if (!arr4.includes(arr3[i])) {
        arr4.push(arr3[i])
        
    }
    
}
console.log(arr4);

unos = Number (prompt("Unesi koliko nizova zelis"))
n = Number (prompt("Unesi brojeve niza"))

arr = []

for (i = 0; i <unos;i++) {
    arr.push(n)
}
 console.log(arr);




 niz1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
 ]

 for (let i = 0; i < niz1.length;i++) {
    red = ""
    for(let j = 0; j < niz1[i].length;j++) {
        red += niz1 [i][j] + ""
        
    }
    console.log(red);

 
 }
 
 