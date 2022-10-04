function addItem() {
    let input = document.getElementById('newItemText');

    let newElement = document.createElement('li');
    newElement.textContent = input.value;
    
    let deleteButton = document.createElement('a');
    deleteButton.href = '#';
    deleteButton.textContent = '[Delete]';
    newElement.appendChild(deleteButton);

    deleteButton.addEventListener('click', function(){
        deleteButton.parentNode.remove();
    })
    let list = document.getElementById('items');

    list.appendChild(newElement);

    input.value = '';
}