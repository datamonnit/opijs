/* Local Storage Example */

let votes = { cats: 0, dogs: 0}

function reset(){
    votes.cats = 0;
    votes.dogs = 0;
    localStorage.removeItem('votes');
    init();
}

function init(){
    
    if (!localStorage.votes){
        localStorage.setItem('votes', JSON.stringify(votes));
    } else {
        votes = JSON.parse(localStorage.getItem('votes'));
    }

    updateUI();
}

function vote(id){
    if (id == 'cat') {
        votes.cats++;
    }
    if (id == 'dog') {
        votes.dogs++;
    }

    localStorage.setItem('votes', JSON.stringify(votes));

    updateUI();
}

function updateUI(){

    document.getElementById('dogs').innerHTML = votes.dogs;
    document.getElementById('cats').innerHTML = votes.cats;


}
