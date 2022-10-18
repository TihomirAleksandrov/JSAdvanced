function validate() {
    let input = document.getElementById('email');
    const validPattern = /^([a-z]+@{1}[a-z]+\.{1}[a-z]+)$/gm;

    input.addEventListener('change', (event) => {
        if (validPattern.test(event.target.value)) {
            event.currentTarget.removeAttribute('class');
        } else {
            event.currentTarget.classList.add('error');
        }
    })
}