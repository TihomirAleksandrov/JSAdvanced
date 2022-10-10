function solve() {
  let inputArea = document.getElementsByTagName('textArea')[0];

  let generateButton = document.getElementsByTagName('button')[0];

  let tableBody = document.getElementsByTagName('tbody')[0];

  generateButton.addEventListener('click', function () {
    let inputJson = JSON.parse(inputArea.value);

    for (let input of inputJson) {
      let name = input.name;
      let img = input.img;
      let price = input.price;
      let decFactor = input.decFactor;

      let row = document.createElement('tr');

      let imgData = document.createElement('td');
      let image = document.createElement('img');
      image.src = img;
      imgData.appendChild(image);
      row.appendChild(imgData);

      let nameData = document.createElement('td');
      let nameParagraph = document.createElement('p');
      nameParagraph.textContent = name;
      nameData.appendChild(nameParagraph);
      row.appendChild(nameData);

      let priceData = document.createElement('td');
      let priceParagraph = document.createElement('p');
      priceParagraph.textContent = price;
      priceData.appendChild(priceParagraph);
      row.appendChild(priceData);

      let decData = document.createElement('td');
      let decParagraph = document.createElement('p');
      decParagraph.textContent = decFactor;
      decData.appendChild(decParagraph);
      row.appendChild(decData);

      let checkBoxData = document.createElement('td');
      let checkboxInput = document.createElement('input');
      checkboxInput.type = 'checkbox';
      checkBoxData.appendChild(checkboxInput);
      row.appendChild(checkBoxData);

      tableBody.appendChild(row);
    }
  });

  let buyButton = document.getElementsByTagName('button')[1];
  let outputField = document.getElementsByTagName('textArea')[1];

  buyButton.addEventListener('click', function () {
    let checkboxes = Array.from(document.querySelectorAll("input[type=checkbox]"));

    let furniture = [];
    let totalPrice = 0;
    let totalDecFactor = 0;

    for (let checkbox of checkboxes) {
      if (checkbox.checked) {
        let values = checkbox.parentElement.parentElement.getElementsByTagName('p');

        let product = values[0].textContent;
        furniture.push(product);

        let price = Number(values[1].textContent);
        totalPrice += price;

        let decFactor = Number(values[2].textContent);
        totalDecFactor += decFactor;
      }
    }

    let avgDecFactor = totalDecFactor / furniture.length;

    outputField.value += `Bought furniture: ${furniture.join(', ')}\n`;
    outputField.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    outputField.value += `Average decoration factor: ${avgDecFactor}`;
  });
}