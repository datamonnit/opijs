const input = document.querySelector("input"),
      h2 = document.querySelector("h2");
      
if (localStorage.getItem('someData')){
    h2.innerHTML = localStorage.getItem('someData');
}

input.addEventListener('keyup', display);

function display(){
    localStorage.setItem('someData', input.value);
    h2.innerHTML = localStorage.getItem('someData');
}