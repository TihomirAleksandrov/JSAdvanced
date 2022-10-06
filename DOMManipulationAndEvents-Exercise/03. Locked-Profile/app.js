function lockedProfile() {
    let main = document.getElementById('main');

    let profiles = Array.from(main.getElementsByClassName('profile'));

    for (let profile of profiles) {
        let button = profile.getElementsByTagName('button')[0];

        button.addEventListener('click', function(){
            let lockButton = profile.querySelectorAll('input[type=radio]')[0];

            if (!lockButton.checked) {
                let additionalInfo = profile.getElementsByTagName('div')[0];

                if (button.textContent === 'Show more') {
                    additionalInfo.style.display = 'block';
                    button.textContent = 'Hide it';
                } else if (button.textContent === 'Hide it'){
                    additionalInfo.style.display = 'none';
                    button.textContent = 'Show more';
                }
            }
        })
    }
}