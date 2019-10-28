// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha vinto.


var sceltaUser = prompt("Pari o dispari?");
var numeroUser = parseInt(prompt("Scegli un numero a 1 a 5"));

numeroPc = genNumPc();

document.getElementById("paridisp").innerHTML = "Hai scelto" + sceltaUser;
document.getElementById("tuonumero").innerHTML = "Il tuo numero è " + numeroUser;
document.getElementById("numeropc").innerHTML = "Il  numero del computer è " + numeroPc;

checkWin(numeroPc, numeroUser);


function genNumPc() {
    numGenerated = Math.floor(Math.random()* 5 +1);
    return numGenerated;
}

function checkWin (numeroPc, numeroUser ) {
    if (sceltaUser === "pari") {
        if ((numeroUser + numeroPc) % 2 === 0) {
            document.getElementById("vincitore").innerHTML = "Hai vinto!"
            return;
        } else {
            document.getElementById("vincitore").innerHTML = "Hai perso!";
            return;
        }
    } else if (sceltaUser === "dispari") {
        if ((numeroUser + numeroPc) % 2 === 0) {
            document.getElementById("vincitore").innerHTML = "Hai perso!";
            return
        } else {
            document.getElementById("vincitore").innerHTML = "Hai vinto";
            return
        }
    } else {
        document.getElementById("paridisp").innerHTML = "";
        document.getElementById("tuonumero").innerHTML = "";
        document.getElementById("numeropc").innerHTML = "";
        document.getElementById("vincitore").innerHTML = "Scelta non valida";

    }

}