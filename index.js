
function result() {
    document.getElementById("resultat").innerHTML = `
    `;
    var player = document.getElementById("numberOfPlayer").value;
    var column = document.getElementById("numberOfColumn").value;
    var line = document.getElementById("numberOfLine").value;
    var character = document.getElementById("numberOfCharacter").value;

    for (var j = 1; j <= player; j++) {
        let division = document.createElement("div");
        division.classList.add("divisionContaint");

        document.getElementById("resultat").appendChild(division);
        division.innerHTML = `<h4>Joueur ${[j]}:</h4>`;
        for (var i = 1; i <= character; i++) {
            var text = document.createElement("p");
            text.classList.add("paragraph");
            division.appendChild(text);
            var randomColumn = Math.round(Math.random() * (column - 1) + 1);
            var randomLine = Math.round(Math.random() * (line - 1) + 1);
            text.innerHTML = `Personnage ${i}:  C ${randomColumn} - L ${randomLine}`;
        }

    }

}

function reset() {
    document.getElementById("resultat").innerHTML = "";
    document.getElementById("numberOfPlayer").value = 1;
    document.getElementById("numberOfColumn").value = 1;
    document.getElementById("numberOfLine").value = 1;
    document.getElementById("numberOfCharacter").value = 1;
}



