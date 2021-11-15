let dice = 0;
let pisteet = 0;
let pelaajat = [
    {
        nimi: "Ismo", pisteet: 0
    },
    {
        nimi: "Riitta", pisteet: 0
    }

]

function heitaNoppa(){
    dice = Math.floor(Math.random() * 6) + 1;
    pisteet += dice;

    updateUI();
}

function updateUI(){
    document.getElementById('noppaluku').innerHTML = dice;
    document.getElementById("pisteet").innerHTML = pisteet;
}