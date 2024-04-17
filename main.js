const numero = "#23"

let x = prompt("Inserisci il nome");
console.log(x);

let y = prompt("Inserisci il cognome");
console.log(y);

let z = prompt("Inserisci il tuo colore preferito");
console.log(z);

const password = x + y + z + "#24";

document.getElementById("password").innerHTML = `La tua password è: ${password}`;

alert ("La tua password è " + "" + "Lorenzo" + "D'Addazio" + "Nero" + "#23");

