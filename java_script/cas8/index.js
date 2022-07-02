    // niz = [3, 5, 21, 83, 12, 93, 12, 43, 28, 63, 1];
    // sum = 0;

    // for(i = 0; i < niz.length; i++) {

    //     sum += niz [i];
    // }

    // console.log(sum);

    // console.log(sum / niz.length);



    // niz = [1, 2, 3];

    // console.log(niz);

    // niz.push("Novi Element");




    unos = parseInt(prompt("Koliko brojeva unosite"))
      brr = [];
    for ( i = 0;i < unos;i++) {
 br = parseInt(prompt("Unesite broj"))

 brr.push(br);
 console.log(brr);

    }






niz = [3, 5, 10, 1, 7];

br = [] ;

for(i = 0; i < niz.length; i++) {
    br.unshift(niz[i]) ;
}

console.log(br);



arr = [1,2,4,9,10]

upit = parseInt(prompt('Unesite broj za proveru'))
founded = false
for( i = 0;i <= arr.length;i++) {
 
     if(arr[i] === upit) {
         founded = true ;
         break
     }
}

 if (founded) {
     console.log('true');
 }    else   {
         console.log('false');
     }
 


     //-----------------------------------



     niz = [1, 2, 3, 4];
      novi = []
     unos = parseInt (prompt("Unesi neki broj"))

     for(i = 0; i < niz.length; i++) {
         if (niz[i] !== unos) {
         novi.push(niz[i]) }

     }

     console.log(novi);     