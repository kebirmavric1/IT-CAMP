// function klikni_me (){
//     console.log('kliknuto');
// }


// function klikni_me(a, b){


//     console.log(a + b);
// }

// klikni_me(20, 30);


// ///--------------------------------

// const klikni_me_nova = a  => {

//     console.log(a + 15);


// } 

// klikni_me_nova(100)



/////////////////////



// numbers = [0, 2, 5, 4, 6, 8]



// ; {

// for ( i = 0; i < numbers.length; i++);
// b += "-" + numbers[i]; 

// }

// console.log(b);




// str = [0, 2, 5, 4, 6, 8]
// novi_str = ""
// result = novi_str[0]

// for(i = 0;i < str.length;i++) {

//  if ( i % 2 ===0) {
// // novi_str += str [i] + "-"

// novi_str.push('-', str[i])

//  } else {
//      novi_str.push(str[i])
//  }

// }

// console.log(novi_str + (' '));

unos = "025468"
res = "";

for(i = 0; i< unos.length;i++) {
    console.log(unos[i]);
res += unos[i]
if (unos[i] % 2 ===0 && unos[i + 1] % 2 === 0) {
    res += "-"
} 

}

console.log(res);

/////-------------------------------------------------

//DRUGI ZADATAK...-///////////////////////////



niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
sum = " ";
prod = " ";

for(i = 1   ; i < niz.length;i++) {
sum += niz[i]
prod *= niz[i]


}

console.log(sum);
console.log(prod);

















//TRECI ZADATAK...///////////////////////////

niz = [1, 2, 3, 4, 1, 8, 6, 7, 8, 9, 1, 2, 3]

uniqeArr = [];

for(el of niz) {
    if (!uniqeArr.includes(el)) {
        uniqeArr.push(el)
    }
}

console.log(niz);
console.log(uniqeArr);




















