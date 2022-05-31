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


let novcanice = [10, 5, 20, 50, 5, 10, 100, 20, 50];
let broj_novcanica = novcanice.length;
let brojac = 0;



while (brojac < broj_novcanica) {
    console.log('----------------');
    console.log('Uslov prosao');
    console.log(`Novcanica na poziciji [${brojac}]: ${novcanice[brojac]}` );

    
    brojac++;

}

if(brojac < broj_novcanica) {
    console.log('broja je manji');
}  else {
    console.log('brojac nije manji');
}

console.log('brojac:' + brojac);





