var cognomeUtente = prompt("Inserisci il tuo cognome")
var listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
var datiFiltrati = []
var cognomeInserito = datiFiltrati.push(cognomeUtente);

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


