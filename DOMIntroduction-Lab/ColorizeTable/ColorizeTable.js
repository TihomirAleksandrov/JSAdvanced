function colorize(){
    let elements = document.querySelectorAll('tr:nth-of-type(2n)');
    let elementsArray = Array.from(elements);

    elementsArray.forEach(x => {
        x.style.backgroundColor = 'teal';
    })
}