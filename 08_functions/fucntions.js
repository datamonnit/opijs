// Tarkista postinumeron oikeellisuus
function tarkastaPostiNumero(postinumero){
    // pituus 5 merkkiä, kaikki numeroita
    if (postinumero.length == 5 && !isNaN(postinumero)) {
        return true;
    } else { 
        return false;
    }
}

// Tarkista onko käyttäjän syntynyt ennen vuotta 1990
function ennen1990(hetu){
    // ppkkvv[+;-;A]zzzx
    // Poimi merkkijonosta vv ja vuosisata-merkki
    // Muodosta syntymävuosi

    // Testaa onko syntymävuosi pienempi kuin 1990
}


