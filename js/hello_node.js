console.log("Hello World!");
console.log("Test");

// Deklaration und Initialisierung der Variablen
// !!!!ACHTUNG!!!!!
// Das var-keyword benutzt man heute nicht mehr! Es gibt keine Ausnahmen!
var x = 10;

// Ganz normales deklarieren und initialisieren eine Variablen
// Variable ist mutable (modifizierbar)
let y = "Hello Antikapitalister Untergrund!"
let y2 = "!!!";
// Concatenation // Verkettung
let q = y + y2;
console.log(q);

// Variable ist unmutable (nicht veränderbar[e Referenz])
const z = true;


// String Interpolation
console.log(`Test Interpolation ${x} und dann noch ${z}`);

greeting("Hier könnte Ihre Werbung stehen!");

// In JavaScript gibt es zwar Datentypen, werden aber nicht vom Interpreter überprüft.
// Heißt: Keine Typensicherheit // No Strong-Typing
// Bevor der Interpreter irgendeine Anweisung ausführt, wenn man das Script startet, werden alle function-Definitions an den Anfang des Scripts geschoben - Quasi, als erstes werden die Funktionen "ausgeführt" oder besser "deklariert".
// Dieser Prozess nennt sich "Hoisting"
function greeting(message) {
    console.log("Hallo und Wilkommen!");
    console.log(`Schönes Wetter haben wir, übrigens... \n${message}`);
}


// Boolean
// 0 oder 1; true oder false

const my_bools = false;
if (my_bools){
    console.log("Dieser Text wird niemals ausgegeben, weil my_bool false ist.");
}

// String

let text1 = "123";
let text2 = new String("123");
let text3 = null;

console.log(text1 == text2);
console.log(text1 === text2);
console.log(text3);

let null_wert = get_emoji("falscher wert");
console.log(null_wert);
let guter_wert = get_emoji("happy");
console.log(guter_wert);
get_emoji()

function get_emoji(feeling){
    if (feeling == "sad"){
        return "😥";
    }
    if (feeling == "happy"){
        return "😁";
    }
    return null;
}

let now = new Date();
console.log(now.toDateString());
console.log(now.toLocaleDateString());
console.log(now.toString());
console.log(now.toLocaleString());
console.log(Date.now());
let zahl_als_datum = Number.toLocaleDateString;
console.log(zahl_als_datum);

class Weinbergschnecke{
    constructor(name, schleimmenge){
        this.name = name;
        this.schleimmenge = schleimmenge;
    }

    get reichweite(){
        return this.schleimmenge / 10;
    }

    schlunzen(){
        if (this.schleimmenge >= 10){
            console.log(`${this.name} schlunzt 1 Meter nach vorne.`);
            this.schleimmenge = this.schleimmenge - 10;
        }
        else{
            console.log(`${this.name} hat nicht genug Schleim und kann sich nicht mehr bewegen.`);
        }
    }
}

const schnegge = new Weinbergschnecke("Josef", 30);
console.log(schnegge.name);
console.log(schnegge.reichweite);
while(schnegge.schleimmenge >= 10){
    schnegge.schlunzen();
}
schnegge.schlunzen();
console.log(schnegge.schleimmenge);
console.log(schnegge.name);