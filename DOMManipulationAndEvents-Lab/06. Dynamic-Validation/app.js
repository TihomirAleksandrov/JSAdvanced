function validate() {
    let input = document.getElementById('email');
    let pattern = /[a-z]+@[a-z]+.[a-z]+/g;

    input.addEventListener('change', function(event){
        if(!input.value.match(pattern)){
            event.target.classList.add('error');
        } else {
            event.target.classList.remove('error');
        }
    })
}