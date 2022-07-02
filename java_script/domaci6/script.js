numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

nRed1 = 0;
nRed2 = 0;
nRed3 = 0;

for (i = 0; i < numbers.length; i++) {
  red = " ";

  for (j = 0; j < numbers[i].length; j++) {
    red += numbers[i][j] + "";
  }
  console.log(red);

  nRed1 += numbers[i][0];
  nRed2 += numbers[i][1];
  nRed3 += numbers[i][2];
}

console.log(nRed1, nRed2, nRed3);

// DRUGI PRIMER ZADATKA SA ZBIROM KOLONAAA---

arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  

]
suma = []
for (let i = 0; i < arr.length; i++) {
  s = 0;
  for (let j = 0;j < arr[i].length;j++) {
    console.log(arr [j][i]);
    s += arr[j][i]
  }
  suma.push(s)
}
arr.push(suma)
console.log(arr);

//--------------------------------------

//PRVI PRIMER PRIMARNE DIJAGONALE

 arr = [
     [1, 2, 3],
     [4, 5, 6],
     [7, 8, 9],

 ]

 for (let i = 0; i < arr.length; i++) {
     red = "";

    for ( let j = 0; j < arr[i].length;j++) {
             if ( i === j) {
                red += arr[i][j] + " ";

             } else  {
                 red += "  ";
             }

    }
  console.log(red);
//   console.log(arr);

 }

//DRUGI PRIMER SEKUNDARNE DIJAGONALE


 arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],

]

for ( let i = 0; i < arr.length;i++) {
red = "";
for (let j = 0; j < arr[i].length;j++) {
  if (i + j === arr.length - 1) {
    red += arr [i][j]
  } else {
    red += "  ";
  }
}
console.log(red);
}

