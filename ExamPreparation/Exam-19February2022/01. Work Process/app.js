function solve() {
    let firstName = document.getElementById('fname');
    let lastName = document.getElementById('lname');
    let email = document.getElementById('email');
    let birthDate = document.getElementById('birth');
    let position = document.getElementById('position');
    let salary = document.getElementById('salary');
    let hireButton = document.getElementById('add-worker');

    let inputsArr = [firstName, lastName, email, birthDate, position, salary];

    let tbody = document.getElementById('tbody');

    let budgetMessage = document.getElementById('sum');
    let salaryBudget = 0;

    hireButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (inputsArr.some(x => !x.value)) {
            return;
        } else{
            let tRow = document.createElement('tr');
            
            for (let i = 0; i < inputsArr.length; i++) {
                let tData = document.createElement('td');
                tData.textContent = inputsArr[i].value;
                tRow.appendChild(tData);
            }

            let buttonsData = document.createElement('td');

            let fireButton = document.createElement('button');
            fireButton.classList.add('fired');
            fireButton.textContent = 'Fired';

            let editButton = document.createElement('button');
            editButton.classList.add('edit');
            editButton.textContent = 'Edit';

            buttonsData.appendChild(fireButton);
            buttonsData.appendChild(editButton);

            tRow.appendChild(buttonsData);
            tbody.appendChild(tRow);

            salaryBudget += Number(salary.value);
            budgetMessage.textContent = salaryBudget.toFixed(2);
            
            for (let input of inputsArr) {
                input.value = '';
            }
        }
    });

    tbody.addEventListener('click', (event) => {
        if (event.target.textContent === 'Edit') {
            let dataArr = Array.from(event.target.parentElement.parentElement.children);
            let dataValuesArr = dataArr.map(x => x.textContent);

            for (let i = 0; i < inputsArr.length; i++) {
                inputsArr[i].value = dataValuesArr[i];
            }

            event.target.parentElement.parentElement.remove();

            salaryBudget -= Number(salary.value);
            budgetMessage.textContent = salaryBudget.toFixed(2);
        } else if(event.target.textContent === 'Fired'){
            let currWorkerInfo = event.target.parentElement.parentElement;
            let currSalary = Number(currWorkerInfo.children[5].textContent);
            
            currWorkerInfo.remove();

            salaryBudget -= currSalary;
            budgetMessage.textContent = salaryBudget.toFixed(2);
        }
    })
}
solve()