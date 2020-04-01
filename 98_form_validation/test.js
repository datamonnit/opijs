var sallitutMaat = ['suomi','ruotsi','viro','venäjä']; //global

function checkTeksti(txt){
    // console.log(txt.length);
    console.log(txt.indexOf("@"));
}

function checkSotu(sotu){
    //ppkkvv{+,-,A}123X
    const vuosisata = sotu.substr(6,1);
    const vv = sotu.substr(4,2);
    const pp = sotu.substr(0,2);
    const kk = sotu.substr(2,2);
    
    
    if (vuosisata == '-') {
        vuosi = "19" + vv;
    } else if(vuosisata == 'A') {
        vuosi = "20" + vv;
    } else {
        vuosi = "18" + vv;
    }

    console.log("Syntymäaika on " + pp + "." + kk + "." + vuosi);

}

function tarkistaTarina(tarina) {

    console.log(tarina);
    return false;
}

function tarkistaEmail(email){
    email = email.trim();

    console.log(email.indexOf("@"));

    if (email.indexOf("@") > 0 && 
        email.indexOf(".") > 3 &&
        email.indexOf(".") < email.length-2) {
        return true;
    } else {
        return false;
    }
}

function tarkistaIka(ika){
    console.log(typeof ika);
    ika = parseInt(ika);
    console.log(typeof ika);
    if (isNaN(ika)) {
        alert('Syötit iäksi mitä sattuu');
        return false;
    }
    
    var uusiIka = ika + 100;
    alert('Sadan vuoden päästä olet ' + uusiIka + ' vuotias!');
}

function tarkistaMaa(maa){
    
    for(var i=0; i<sallitutMaat.length; i++) {
        if (maa == sallitutMaat[i]) {
            return true;
        }
    }

    return false;
}

function tarkistaLomake(e){
    e.preventDefault();

    var email = document.forms['myForm']['email'].value;
    if (tarkistaEmail(email) == false){
        // alert('Tarkista sähköpostiosite');
    }

    var tarina = document.forms['myForm']['tarina'].value.trim();
    if (tarkistaTarina(tarina) == false){
        // alert('Huono tarina');
    }

    var ika = document.forms['myForm']['ika'].value;
    if (tarkistaIka(ika) == false) {
        alert('Antamasi ikä on liian huono');
    }

    var maa = document.forms['myForm']['maa'].value.toLowerCase();
    if (tarkistaMaa(maa) == false) {
        alert('Antamaasi maata ei tueta');
    }
}