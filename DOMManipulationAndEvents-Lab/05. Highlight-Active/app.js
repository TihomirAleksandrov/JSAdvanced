function focused() {
    let targets = document.querySelectorAll('input');

    let focus = function (event){
        event.target.parentNode.classList.add('focused');
    }

    let unfocus = function (event){
        event.target.parentNode.classList.remove('focused');
    }

    for (const target of targets) {
        target.addEventListener('focus', focus);
        target.addEventListener('blur', unfocus);
    }
}