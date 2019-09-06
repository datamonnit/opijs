/* 
printToConsole - funktio tulostaa kamaa consoliin
*/
function printToConsole(newTitle){
    // Tähän koodia
    console.log(document.title);
    document.title = newTitle; // vaihdetaan title
    document.getElementById("mainHeader").innerHTML = newTitle; // vaihdetaan ensimmäinen h1-elementti
    console.log(document.title);
    return "Uusi title on nyt" + newTitle;
}


