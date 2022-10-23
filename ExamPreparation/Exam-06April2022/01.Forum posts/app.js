window.addEventListener("load", solve);

function solve() {
  let postTitle = document.getElementById('post-title');
  let postCategory = document.getElementById('post-category');
  let postContent = document.getElementById('post-content');
  let inputsArr = [postTitle, postCategory, postContent];

  let publishButton = document.getElementById('publish-btn');
  let reviewList = document.getElementById('review-list');
  let publishedList = document.getElementById('published-list')

  publishButton.addEventListener('click', () => {
    if (inputsArr.some(x => !x.value)) {
      return
    } else{
      let postLi = document.createElement('li');
      postLi.classList.add('rpost');

      let postArticle = document.createElement('article');
      let titleHeader = document.createElement('h4');
      titleHeader.textContent = postTitle.value;
      let categoryParagraph = document.createElement('p');
      categoryParagraph.textContent = `Category: ${postCategory.value}`;
      let contentParagraph = document.createElement('p');
      contentParagraph.textContent = `Content: ${postContent.value}`;

      postArticle.appendChild(titleHeader);
      postArticle.appendChild(categoryParagraph);
      postArticle.appendChild(contentParagraph);

      let editButton = document.createElement('button');
      editButton.classList.add('action-btn', 'edit');
      editButton.textContent = 'Edit';
      let approveButton = document.createElement('button');
      approveButton.classList.add('action-btn', 'approve');
      approveButton.textContent = 'Approve';

      postLi.appendChild(postArticle);
      postLi.appendChild(editButton);
      postLi.appendChild(approveButton);
      reviewList.appendChild(postLi);

      for (let input of inputsArr) {
        input.value = '';
      }
    }
  })

  reviewList.addEventListener('click', (event) => {
    let currPost = event.target.parentElement;
    
    if (event.target.textContent === 'Edit') {
      let postInfo = Array.from(currPost.children[0].children);
      let postValues = postInfo.map(x => x.textContent);

      let titleInfo = postValues[0];
      let categoryInfo = postValues[1].split(': ')[1];
      let contentInfo = postValues[2].split(': ')[1];

      postTitle.value = titleInfo;
      postCategory.value = categoryInfo;
      postContent.value = contentInfo;

      currPost.remove();

    } else if (event.target.textContent === 'Approve') {
      publishedList.appendChild(currPost);
      currPost.children[1].remove();
      currPost.children[1].remove();
    }
  })

  let clearButton = document.getElementById('clear-btn');

  clearButton.addEventListener('click', () => {
    let postsArr = Array.from(publishedList.children);

    for (let post of postsArr) {
      post.remove();
    }
  })
}
