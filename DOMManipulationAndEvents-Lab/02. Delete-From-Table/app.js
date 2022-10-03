function deleteByEmail() {
    let searchedInput = document.getElementsByName('email')[0];

    let emails = Array.from(document.querySelectorAll('tr td:nth-of-type(2)'));

    let targetEmail = emails.find(x => x.textContent === searchedInput.value);

    let result = document.getElementById('result');

    if (targetEmail) {
        targetEmail.parentElement.remove();

        result.textContent = 'Deleted.'
    } else{
        result.textContent = 'Not found.'
    };

    searchedInput.value = '';
}