let list = [];

function addItem(item){
    list.push(item);
    printList();
}

function printList(){
    let liElems = '';
    for(let i=0; i<list.length; i++){
        liElems = liElems + `<li>${list[i]}</li>`;
    }
    document.getElementById('shopList').innerHTML = liElems;
}

function removeItem(){
    list.pop();
    printList();
}