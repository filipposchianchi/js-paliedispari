// Una funzione per capire se la parola è palindroma

var parola = prompt("Inserisci la tua parola");

palindroma(parola);

// function palindroma(parola) {
//     if (parola === parola.split('').reverse().join()) {
//         document.getElementById("parola").innerHTML = "La parola " + parola + " è palindroma.";
//         return console.log("parola palindroma");
//     }
//     else  {
//         document.getElementById("parola").innerHTML = "La parola " + parola + " non è palindroma.";
//         return console.log("parola non palindroma")
//     }
// }

function palindroma(parola) {

    var parolaContrario = "";

    for (var j = parola.length - 1 ; j >= 0; j--) {
        parolaContrario += (parola[j]);
    }

    if (parolaContrario === parola) {
        document.getElementById("parola").innerHTML = "La parola " + parola + " è palindroma.";
        return
    } else {
        document.getElementById("parola").innerHTML = "La parola " + parola + " non è palindroma.";
        return
    }
}
