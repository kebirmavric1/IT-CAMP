// a = Number(prompt('Unesite vrednost stranice'));
// b = Number(prompt('Unesite vrednost stranice'));
// c = Number(prompt('Unesite vrednost stranice'));

// console.log('Vrednost a stranice je' + a + 'CM.');
// console.log('Vrednost b stranice je' + b + 'CM.');
// console.log('Vrednost c stranice je' + c + 'CM.');

// if(a+b>c && b+c>a && c+a>b) {

// console.log('Ovaj trougao postoji.');

// if(a===b && b!==c){
// console.log('Trougao jednakokraki')
// }

//     if(b===c && c!==a) {
// console.log('Trougao jednakokraki');
// }
// if(c===a && a!==b) {
// console.log('Trougao je jednakokraki');
// }
// if(a===b && b===c) {
// console.log('Trougao je jednakostranican');
// }
// if(b===c && c===a) {
// console.log('Trougao je jednakostranican');
// }
// if(c===a && a===c) {
// console.log('Trougao je jednakostranican');
// } 
// if(a!==b && b!==c){
// console.log('Trougao je raznostranican');
// }

// }

broja_ucenik = Number(prompt('Unesite broj ucenika'))
n = Number(prompt('Unesite kriterijum za ispitivanje'))

for (i=1; i<broja_ucenik;i=i+n) {
    console.log('Ispitat ce se ucenik sa rednim brojem', i)
}
