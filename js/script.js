const ol = document.createElement('ol');

let shoppingItems = [];
const listContainer = querySelector(".list-container")
const clearButton = querySelector(".clearButton");

function addNew(){
    
    let inputValue = document.querySelector("#add-item").value;
    const li = document.createElement('li');
    li.innerHTML = inputValue;
    ol.appendChild(li);
    document.querySelector(".list-container").appendChild(ol);
    inputValue = '';
}

function reload(){
    window.location.reload()
}