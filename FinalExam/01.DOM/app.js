window.addEventListener("load", solve);

function solve() {
  let firstName = document.getElementById('first-name');
  let lastName = document.getElementById('last-name');
  let age = document.getElementById('age');
  let title = document.getElementById('story-title');
  let genre = document.getElementById('genre');
  let story = document.getElementById('story');
  let inputsArr = [firstName, lastName, age, title, genre, story];
  let publishButton = document.getElementById('form-btn');
  let previewList = document.getElementById('preview-list');

  publishButton.addEventListener('click', () => {
    if (inputsArr.some(x => !x.value)) {
      return;
    } else{
      let storyLi = document.createElement('li');
      storyLi.classList.add('story-info');

      let storyArticle = document.createElement('article');
      let nameHeader = document.createElement('h4');
      nameHeader.textContent = `Name: ${firstName.value} ${lastName.value}`;
      let ageParagraph = document.createElement('p');
      ageParagraph.textContent = `Age: ${age.value}`;
      let titleParagraph = document.createElement('p');
      titleParagraph.textContent = `Title: ${title.value}`;
      let genreParagraph = document.createElement('p');
      genreParagraph.textContent = `Genre: ${genre.value}`;
      let storyParagraph = document.createElement('p');
      storyParagraph.textContent = story.value;
      storyArticle.appendChild(nameHeader);
      storyArticle.appendChild(ageParagraph);
      storyArticle.appendChild(titleParagraph);
      storyArticle.appendChild(genreParagraph);
      storyArticle.appendChild(storyParagraph);

      let saveButton = document.createElement('button');
      saveButton.classList.add('save-btn');
      saveButton.textContent = 'Save Story';
      saveButton.disabled = false;
      let editButton = document.createElement('button');
      editButton.classList.add('edit-btn');
      editButton.textContent = 'Edit Story';
      editButton.disabled = false;
      let deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-btn');
      deleteButton.textContent = 'Delete Story';
      deleteButton.disabled = false;

      storyLi.appendChild(storyArticle);
      storyLi.appendChild(saveButton);
      storyLi.appendChild(editButton);
      storyLi.appendChild(deleteButton);

      previewList.appendChild(storyLi);

      for (let input of inputsArr) {
        input.value = '';
      }

      publishButton.disabled = true;
    }
  })

  previewList.addEventListener('click', (event) => {
    if (event.target.textContent === 'Edit Story') {
      
      let storyElementsArr = Array.from(event.target.parentElement.children[0].children);
      let storyInfoArr = storyElementsArr.map(x => x.textContent);
      let storyContent = storyInfoArr[4];
      let namesInfo = storyInfoArr[0].split(': ');
      let splitNames = namesInfo[1].split(' ');

      let firstName = splitNames[0];
      let lastName = splitNames[1];

      storyInfoArr = storyInfoArr.slice(1, 4);
      let editInfoArr = [];

      editInfoArr.push(firstName, lastName);
      
      for (let info of storyInfoArr) {
        let splitInfo = info.split(': ');
        editInfoArr.push(splitInfo[1]);
      }

      editInfoArr.push(storyContent);

      for (let i = 0; i < inputsArr.length; i++) {
        inputsArr[i].value = editInfoArr[i];
      }

      event.target.parentElement.remove();
      
      publishButton.disabled = false;
    } else if(event.target.textContent === 'Save Story'){

      let mainDiv = document.getElementById('main');
      let divChildren = Array.from(mainDiv.children);

      for (let child of divChildren) {
        child.remove();
      }

      let saveHeader = document.createElement('h1');
      saveHeader.textContent = "Your scary story is saved!";

      mainDiv.appendChild(saveHeader);

    } else if(event.target.textContent === 'Delete Story'){
      event.target.parentElement.remove();

      publishButton.disabled = false;
    }
  })
}
