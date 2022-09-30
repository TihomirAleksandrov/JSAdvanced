function solve() {
  let input = document.getElementById('input').value;
  let output = document.getElementById('output');

  let sentencesArr = Array.from(input.split('.').filter(x => x !== '' && x !== '\n'));

  while (sentencesArr.length > 0) {
    let text = sentencesArr.splice(0, 3).join('.') + '.';
    let paragraph = document.createElement('p');

    paragraph.textContent = text;
    output.appendChild(paragraph);
  }
}