function search() {
   let searchedItem = document.getElementById('searchText').value;
   let listArr = Array.from(document.querySelectorAll('#towns li'));
   let result = document.getElementById('result');

   let count = 0;

   for (let item of listArr) {
      if (item.textContent.includes(searchedItem)) {
         count++;
         item.style.fontWeight = 'bold';
         item.style.textDecoration = 'underline';
      } else{
         item.style.fontWeight = 'normal';
         item.style.textDecoration = 'none';
      }
   }

   result.textContent = `${count} matches found`
}
