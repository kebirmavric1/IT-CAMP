// //PRVI ZADATAK

//  let novac = [25, 10, 5, 2, 1]

//  const TargetCoins = (provera, arr) => {
//     let suma = 0;

//     output = []
//     for (i = 0; i < arr.length;i++) {
//         suma += arr[i]
//         if(suma <= provera) {
//         output.push(arr[i])
//         } else if (suma > provera){
//             suma -= arr[i]
//         }
//     }
//     if (provera === suma) {
//         return console.log("potrosen novac", output);
    
//     } else {
//         return console.log("Nemate odgovarajuci novavc")
//     }

//  }
 
 
 
 
 
 
//DRUGI ZADATAK
/*
b = Number (prompt("Unesi neki broj"))
niz = [];


function perfektan (broj) {

    for (i = 0; i < broj;i++) {
        if (broj % i === 0) {
            niz.push(i)
        }
        
    }

    z = niz.reduce((prevValue,curentValue) => prevValue + curentValue)

    if((z + broj) / 2 === broj) {
        console.log("broj " + broj + " je PERFEKTAN");
    } else {
        console.log("broj " + broj + " nije PERFEKTAN");
    }
}

perfektan(b)




*/






//TRECI ZADATAK-----------



str=  "thequickbrownfoxjumpsoverthelazydog"
// str2 = "thequickbrownfxjmpsvlazydg"

S_str = str.split("")
console.log(S_str)
string=""

for (i = 0; i <S_str.length; i++) {

    for (j =i +1; j < S_str.length;j++) {
        if (S_str[i]=== S_str[j]) {
            console.log(S_str[j], "Duplikat");
            S_str.splice(i, 1)
        }
    }
}

let novi =[...new Set (S_str)]
novi.join('')
console.log(novi);