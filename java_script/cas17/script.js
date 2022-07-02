function firstLetterToUppercase(word) {
    wordArr[i] = wordArr[i].split(" ");
    wordArr[i] = [wordArr[i][0].toUpperCase()].concat(wordArr[i].slice(1));
    wordArr[i] = wordArr[i].join("");

}


recenica = "the"

//---------------------

//DRUGI ZADATAK


rec = "nekarec"

for(let i = 0; i < rec.length / 2;i++) {

    if(rec[i] !== rec[rec.length -1 - i]) {
        console.log("Nije polindrom");
        break;
    
    }

}



rec = "kapak"
// rec =  "nekarec"

isPalindrom = rec.split("").reverse().join("") === rec;

if(isPalindrom) {
    console.log("jeste");
} else {
    console.log("nije");
}