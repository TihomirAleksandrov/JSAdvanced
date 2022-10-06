function create(words) {
   let content = document.getElementById('content');
   
   for (let word of words) {
      let divElement = document.createElement('div');
      divElement.id = 'content';

      let paragraph = document.createElement('p');
      paragraph.style.display = 'none';
      paragraph.textContent = word;

      divElement.addEventListener('click', function(){
         paragraph.style.display = 'block';
      })

      divElement.appendChild(paragraph);
      content.appendChild(divElement);
   }
}