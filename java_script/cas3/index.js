broj = Number(prompt("Unesite broj"))
broj = 8
for(i=0; i<=broj;i+=2){
    console.log(i)
}


console.log("Unesi broj:8")

for(i = 9; i > 0;i-- ){

    console.log(i)
}

for(let i = 0;i < 6;i++){
    if(i<3){
    console.log("phyton")}
    else{
        console.log("je super")
    }
}

bbrojeva=Number (prompt("Unesite broj brojeva"))
brParnih = 0;
brNeparnih = 0;

for(i = 0;i < bbrojeva; i++){
    broj=Number(prompt("Unesite broj"))

    if( broj % 2 === 0){
        brParnih++;
    } else{
        brNeparnih++;
    }
}

console.log("Br parnih", brParnih);
console.log("Br neparnih",brNeparnih);


bbrojeva=Number(prompt("Unesite broj"))
brDel = 0

for(i = 0;i <= bbrojeva;i++){
   if(bbrojeva % i === 0){
   console.log(i)
brDel++
   }

}
if (brDel === 2) {
    console.log('broj je prost')
}
