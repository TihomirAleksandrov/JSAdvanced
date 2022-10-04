function attachGradientEvents() {
    let gradient = document.getElementById('gradient-box');

    gradient.addEventListener("mousemove", function(event) {
        let result = document.getElementById('result');

        let maxWidth = event.target.clientWidth;
        let currPosition = event.offsetX;

        let percentage = Math.floor((currPosition / maxWidth) * 100);

        result.textContent = `${percentage}%`;
    })
}