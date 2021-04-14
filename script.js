var cognomeUtente = prompt("Inserisci il tuo cognome")
var listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
var datiFiltrati = []
var cognomeInserito = datiFiltrati.push(cognomeUtente);
var primaLettera = cognomeUtente.slice(0, 1);
var restoParola = cognomeUtente.slice(1);
cognomeUtente = primaLettera.toUpperCase() + restoParola;

var i = 0;

listaCognomi.sort();
while (i < listaCognomi.length) {
    var cognomeUtente = listaCognomi[i];
    var cognomeEsistente = false

    for (var j = 0; j < datiFiltrati.length; j++){
        var cognomeInserito = datiFiltrati[j];

        if (cognomeUtente === cognomeInserito) {
            cognomeEsistente = true
        }
    }

    datiFiltrati.sort();
    if (!cognomeEsistente) {
        datiFiltrati.push(cognomeUtente)
    }

    i++
}
console.log("array originale", listaCognomi)
console.log("array filtrato", datiFiltrati)


