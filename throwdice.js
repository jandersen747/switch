
let one = 0;
let two = 0;
let three = 0;
let four = 0;
let five = 0;
let six = 0;
let x;
let throwDice;

/* x = math random giver et tilfældigt tal mellem 0-1. Math floor ganger tallet med 6 
og runder ned til nærmeste hele tal. så f.eks. 0.62 * 6 = 3.72 + 1 = 4.72. Det giver derfor 4. +1 gør derfor,
at man kan slå en 6'er, da 0.xx*6 altid højest vil være 5.x, og derfor = 5 */ 


throwDice = function() {
    x = Math.random();
    x = Math.floor(x * 6 + 1); //* 6 = antal muligheder, +1 =  math.random * 6 + 1//

switch (x) {
    case 1:
        one++;
    break;
    case 2:
        two++;
    break;
    case 3:
        three++;
    break;
    case 4:
        four++;
    break;
    case 5:
        five++;
    break;
    default:
        six++;
    break;

    
}

}


for (i = 0; i < 10; i++)
throwDice();




document.write("1's: " + one + "<br>");
document.write("2's: " + two + "<br>");
document.write("3's: " + three + "<br>");
document.write("4's: " + four + "<br>");
document.write("5's: " + five + "<br>");
document.write("6's: " + six + "<br>");

