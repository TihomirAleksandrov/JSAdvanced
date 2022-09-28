function solve() {
  let toCamelCase = (input) => {
    convertedText = input.toLowerCase().split(' ').map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.substring(1, word.length)).join('');
    return convertedText;
  }

  let toPascalCase = (input) => {
    convertedText = input.toLowerCase().split(' ').map((word) => word[0].toUpperCase() + word.substring(1, word.length)).join('');
    return convertedText;
  }


  let text = document.getElementById('text').value;
  let type = document.getElementById('naming-convention').value;
  let convertedText = '';

  if (type === 'Camel Case') {
    toCamelCase(text);
  } else if(type === 'Pascal Case'){
    toPascalCase(text);
  } else{
    convertedText = 'Error!'
  }

  let result = document.getElementById('result');
  result.textContent += convertedText;
}