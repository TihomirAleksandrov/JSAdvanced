function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.getElementById('inputs').children[1].value);
      let bestRestaurant = {};
      let restaurants = [];

      for (let element of input) {
         let restStructure = element.split(' - ');
         let workers = restStructure[1].split(', ');
         workers = workers.map(x => x.split(' '));

         let restaurant = restaurants.find(x => x['name'] === restStructure[0]);
         
         if (restaurant) {
            restaurant['workers'].push(...workers);
            
         } else{
            restaurant = {
               name: restStructure[0],
               workers: workers
            };
         }

         let average = getAverage(restaurant['workers']);
         let bestSalary = getBestSalary(restaurant['workers']);

         restaurant['average'] = average;
         restaurant['best'] = bestSalary;
         

         if (!bestRestaurant['average']) {
            bestRestaurant = restaurant;
         } else{
            if (bestRestaurant['average'] < restaurant['average']) {
               bestRestaurant = restaurant;
            }
         }

         restaurants.push(restaurant);
      }

      let bestRestaurantText = `Name: ${bestRestaurant['name']} Average Salary: ${bestRestaurant['average'].toFixed(2)} Best Salary: ${bestRestaurant['best'].toFixed(2)}`;
      
      let bestWorkersText = '';

      for (let worker of bestRestaurant['workers'].sort((a, b) => b[1] - a[1])) {
         bestWorkersText += `Name: ${worker[0]} With Salary: ${worker[1]} `;
      }

      let restaurantOutput = document.querySelector('#bestRestaurant p');
      let workersOutput = document.querySelector('#workers p');

      restaurantOutput.textContent = bestRestaurantText;
      workersOutput.textContent = bestWorkersText.trim();
   }

   function getAverage(workers){
      let average = 0;
      for (let i = 0; i < workers.length; i++) {
         average += Number(workers[i][1]);
      }
      return Number((average / workers.length).toFixed(2));
   }

   function getBestSalary(workers){
      let best = 0;
      for (let i = 0; i < workers.length; i++) {
         if(Number(workers[i][1]) > best){
            best = Number(workers[i][1]);
         }
      }
      return best;
   }
}