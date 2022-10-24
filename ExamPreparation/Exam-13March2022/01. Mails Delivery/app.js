function solve() {
    let form = document.getElementsByTagName('form')[0];
    let recipientName = document.getElementById('recipientName');
    let title = document.getElementById('title');
    let message = document.getElementById('message');
    let mailsList = document.getElementById('list');
    let sentMails = document.getElementsByClassName('sent-list')[0];
    let deletedMails = document.getElementsByClassName('delete-list')[0];

    form.addEventListener('click', (event) => {
        event.preventDefault();
        let targetButton = event.target;

        if (!recipientName.value || !title.value || !message.value) {
            return;
        } else {
            if (targetButton.textContent === 'Add to the List') {
                createMail();
                resetInput();
            } else if (targetButton.textContent === 'Reset') {
                resetInput();
            }
        }
    })

    mailsList.addEventListener('click', (event) => {
        let targetButton = event.target;

        if (targetButton.textContent === 'Send') {
            sendMail(targetButton);
        } else if(targetButton.textContent === 'Delete'){
            deleteMail(targetButton);
        }
    })

    sentMails.addEventListener('click', (event) => {
        if (event.target.textContent === 'Delete') {
            let targetEmail = event.target.parentElement.parentElement;
            targetEmail.getElementsByClassName('btn')[0].remove();
            deletedMails.appendChild(targetEmail);
        }
    })

    function deleteMail(targetButton){
        let emailLi = document.createElement('li');

        let emailInfo = Array.from(targetButton.parentElement.parentElement.getElementsByTagName('h4'));
        let recipientParts = emailInfo[1].textContent.split(': ');

        let recipientSpan = document.createElement('span');
        recipientSpan.textContent = `To: ${recipientParts[1]}`;

        let titleSpan = document.createElement('span');
        titleSpan.textContent = emailInfo[0].textContent;

        emailLi.appendChild(recipientSpan);
        emailLi.appendChild(titleSpan);

        deletedMails.appendChild(emailLi);
        targetButton.parentElement.parentElement.remove();
    }

    function sendMail(targetButton){
        let emailLi = document.createElement('li');

        
        let emailInfo = Array.from(targetButton.parentElement.parentElement.getElementsByTagName('h4'));
        let recipientParts = emailInfo[1].textContent.split(': ');

        let recipientSpan = document.createElement('span');
        recipientSpan.textContent = `To: ${recipientParts[1]}`;

        let titleSpan = document.createElement('span');
        titleSpan.textContent = emailInfo[0].textContent;

        let buttonDiv = document.createElement('div');
        buttonDiv.classList.add('btn');
        let deleteButton = document.createElement('button');
        deleteButton.type = 'submit';
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'Delete';

        buttonDiv.appendChild(deleteButton);

        emailLi.appendChild(recipientSpan);
        emailLi.appendChild(titleSpan);
        emailLi.appendChild(buttonDiv);

        sentMails.appendChild(emailLi);
        targetButton.parentElement.parentElement.remove();
    }

    function createMail(){
        let emailLi = document.createElement('li');

        let titleHeader = document.createElement('h4');
        titleHeader.textContent = `Title: ${title.value}`;

        let recipientHeader = document.createElement('h4');
        recipientHeader.textContent = `Recipient Name: ${recipientName.value}`;

        let messageSpan = document.createElement('span');
        messageSpan.textContent = message.value;

        let buttonsDiv = document.createElement('div');
        buttonsDiv.id = 'list-action';

        let sendButton = document.createElement('button');
        sendButton.type = 'submit';
        sendButton.id = 'send';
        sendButton.textContent = 'Send';

        let deleteButton = document.createElement('button');
        deleteButton.type = 'submit';
        deleteButton.id = 'delete';
        deleteButton.textContent = 'Delete';

        buttonsDiv.appendChild(sendButton);
        buttonsDiv.appendChild(deleteButton);

        emailLi.appendChild(titleHeader);
        emailLi.appendChild(recipientHeader);
        emailLi.appendChild(messageSpan);
        emailLi.appendChild(buttonsDiv);

        mailsList.appendChild(emailLi);

    }

    function resetInput() {
        recipientName.value = '';
        title.value = '';
        message.value = '';
    }
}
solve()