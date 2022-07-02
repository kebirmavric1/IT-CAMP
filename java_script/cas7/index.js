// for(let i = 0; i <3; i++)
// for( let j = 0; j < 2;j++)
//---------------------------------
while(true)  {
operator = Number(prompt('Unesite operator'));
if (operacija === "exit" || operacija === "0") {
    console.log("kraj programa");
}
br1 = Number(prompt('Unesi prvi broj:'));
br2  =  Number (prompt('Unesi drugi broj:'));


switch (operacija)  {
     case "+":

     console.log("Zbir je:", br1 + br2);
     break;
     case "-":
         console.log("Razlika je", br1 - br2);
         break;
         case "*":
             console.log("Proizvod je", br1 * br2);
             break;
             case "/":
                 console.log("Kolicnik je", br1 / br2);
                 break;
        

}

}

