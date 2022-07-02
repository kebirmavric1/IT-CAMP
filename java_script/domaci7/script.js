nizz = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

let brMax = -500; // -INFINITY
let trenutna = 0;

for (i = 0; i < nizz.length;i++) {

    trenutna = Math.max (nizz[i], trenutna + nizz[i]);

    brMax =Math.max(trenutna,brMax)
}

console.log(brMax);


// -----------------------------------DRUGI ZADATAK




strs = ["flower", "flow", "flight"]

prefix = " ";

for (let i = 0; i < strs.length; i++) {
    p = "";

    for ( let j = 0; j <strs[i].length; j++) {

        if (prefix [j] !== strs[i][j]) {
            break;
        }

        p += prefix [j];

    }

    prefix = p;

}

console.log(prefix);