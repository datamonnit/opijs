/* 
laskin.js - sisältää laskin-sovelluksen tarvitsemat funktion
*/

let n1 = 0;
let n2 = 0;
let vastaus;
let toiminto = 'plus';

function asetaLaskutoimitus(){
    toiminto = document.getElementById("toiminto").value;
}

function asetaLuvut(){
    console.log("Asetetaan lukuen arvot!");
    n1 = Number(document.getElementById("luku1").value);
    n2 = Number(document.getElementById("luku2").value);
}

function laske(){
    /* if (toiminto == 'plus'){
        vastaus = laskePlus();
    } else if (toiminto == 'miinus'){
        vastaus = laskeMiinus();
    } else if (toiminto == 'kerto') {
        vastaus = laskeKerto();
    } else if (toiminto == 'jako') {
        vastaus = laskeJako();
    } else {
        alert("Yrität sumuttaa!");
    }
 */

    switch(toiminto) {
        case "plus":
            vastaus = laskePlus();
            break;
        case "miinus":
            vastaus = laskeMiinus();
            break;
        case "kerto":
            vastaus = laskeKerto();
            break;
        case "jako":
            vastaus = laskeJako();
            break;
        default:
            alert("Yritit sumuttaa!");
    }
    document.getElementById("vastaus").innerHTML = vastaus.toFixed(2);

}

function laskePlus(){
    return n1+n2;
}

function laskeMiinus(){
    return n1-n2;
}

function laskeKerto(){
    return n1*n2;
}

function laskeJako(){
    if (n2==0) {
        return "Nollalla ei voi jakaa! Sori!"
    }
    return n1/n2;
}