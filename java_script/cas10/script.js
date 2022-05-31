// arr = [NaN, 0, 15, false, -22, '', undefined, 47, null]

// novi = [];

// for(el of arr) {
//    if (el) {
//        novi.push(el);
//    }
// }

// console.log(novi);



///----------------------------------------//


arr1 = [1, 2, 3]
arr2 = [2, 30, 1]
arr3 = arr1.concat(arr2);
arr4 = [];

for (i = 0; i <arr3.length;i++) {

if (!arr4.includes(arr3[i]))  {

arr4.push(arr3[i]) ;
}
}

console.log(arr4);





// //--------------------



// unos =parseInt(prompt("Unesi velicinu niza"));
// num = parseInt(prompt("Unesite vrednost u nizu"));

// arr =  []

// for (i = 0;i < unos;i++) {
//     arr.push(num)
// }

// console.log(arr);