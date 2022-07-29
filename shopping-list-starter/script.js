let shoppingListItems = ["milk", "eggs", "bread"]

function addItem() {
    let item = document.getElementById("new-item-text").value;
    shoppingListItems.push(item);
    console.log(shoppingListItems);
    updateItems()
}

function updateItems() {
    let listElement = document.getElementById("shopping-list-items");
    listElement.innerHTML = "";
    shoppingListItems.forEach((item) => {
        let itemElement = document.createElement("li");
        itemElement.innerText = item;
        listElement.appendChild(itemElement);
    })
}

function clearList() {
    let listElement = document.getElementById("shopping-list-items");
    listElement.innerHTML = "";
    shoppingListItems.forEach((item) => {
        let itemElement = document.createElement("li");
        itemElement.innerText = item;
        listElement.remove;
    })
}