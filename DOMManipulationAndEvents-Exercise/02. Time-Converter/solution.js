function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let buttons = Array.from(document.querySelectorAll("input[type='button']"));

    for (let button of buttons) {
        button.addEventListener('click', function(event){
            let value = event.currentTarget.parentElement.querySelectorAll('input[type=text]')[0].value;
           
            if (event.currentTarget.id === 'daysBtn') {
                hours.value = Number(value) * 24;
                minutes.value = hours.value * 60;
                seconds.value = minutes.value * 60;
            } else if(event.currentTarget.id === 'hoursBtn'){
                days.value = Number(value) / 24;
                minutes.value = Number(value) * 60;
                seconds.value = minutes.value * 60;
            } else if(event.currentTarget.id === 'minutesBtn'){
                hours.value = Number(value) / 60;
                days.value = hours.value / 24;
                seconds.value = Number(value) * 60;
            } else if(event.currentTarget.id === 'secondsBtn'){
                minutes.value = Number(value) / 60;
                hours.value = minutes.value / 60;
                days.value = hours.value / 24;
            }
        });
    }
}