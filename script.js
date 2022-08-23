const name = prompt("Welcome to GC mini golf! What is your name?");

let holes = 0;
while(holes != 3 && holes !=6) {
    holes = parseInt(prompt(`Hi ${name}!  Would you like to play 3 or 6 holes today?`));
}


let putts = 0
for(i = 0; i < holes; i++) {
    putts+= parseInt(prompt(`How many putts for hole ${i+1}? (par is 3)`));
}

let coursePar = 9;
if(holes === 6) coursePar = 18;

calculateTotal();

function calculateTotal() {
    const totalPar = coursePar - putts;
    if(putts > coursePar) console.log(`Nice try ${name}! Your total par was: +${totalPar}`);
    else if(putts  < coursePar) console.log(`Great job ${name}! Your total par was: -${totalPar}`);
    else if(putts  === coursePar) console.logt(`Good game ${name}! Your total par was: 0`);
}


