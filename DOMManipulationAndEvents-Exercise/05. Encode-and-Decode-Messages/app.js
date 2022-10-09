function encodeAndDecodeMessages() {
    let input = document.querySelectorAll("textArea[placeholder='Write your message here...']")[0];
    let receiver = document.querySelectorAll("textArea[placeholder='No messages...']")[0];

    let encodeButton = input.parentElement.getElementsByTagName('button')[0];
    let decodeButton = receiver.parentElement.getElementsByTagName('button')[0];

    let encodedMessage = '';
    let decodedMessage = '';

    encodeButton.addEventListener('click', function () {
        let inputText = input.value;

        for (let i = 0; i < inputText.length; i++) {
            let charASCIIValue = inputText.charCodeAt(i) + 1;
            encodedMessage += String.fromCharCode(charASCIIValue);
        }
        
        receiver.value = encodedMessage;
        input.value = '';
        encodedMessage = '';
    });

    decodeButton.addEventListener('click', function () {
        for (let i = 0; i < receiver.value.length; i++) {
            let charASCIIValue = receiver.value.charCodeAt(i) - 1;
            decodedMessage += String.fromCharCode(charASCIIValue);
        }

        receiver.value = decodedMessage;
        decodedMessage = '';
    });
}