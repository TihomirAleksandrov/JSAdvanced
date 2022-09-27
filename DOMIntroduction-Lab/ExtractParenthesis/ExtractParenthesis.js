function extract(id){
    let text = document.getElementById(id);

    let pattern = /\(([^(]+)\)/g;
    let matches = text.textContent.matchAll(pattern);

    let matchesArr = [];

    for (let match of matches) {
        matchesArr.push(match[1]);
    }

    return matchesArr.join('; ');
}