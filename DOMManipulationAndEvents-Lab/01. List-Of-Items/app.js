function addItem() {
    let input = document.getElementById('newItemText');

    let newElement = document.createElement('li');
    newElement.textContent = input.value;
    let list = document.getElementById('items');

    list.appendChild(newElement);

    input.value = '';
}