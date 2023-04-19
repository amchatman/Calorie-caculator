/* 1.Get input of Protein, Carbs and Fats
   2.Add total of Protein, Carbs and Fats in each section
   3.Get percentage of total for each input base on how items store
   4. Input: Example Description: Name , Protein: 0g, Carbs: 0, Fats: 0
   5. Get Current date Month, date, year 
   6.Caculate total
   */

 //Global Variables store current total
 let totalCalories = 0;
 let totalCarbs = 0;
 let totalProtein = 0;
 let totalFats = 0;

//Get current Month, Date, and Year
const currentDate = new Date();
const month = currentDate.getMonth();
const day = currentDate.getDate();
const year = currentDate.getFullYear();

//Array of Month names
const nameMonths = ['January','Feburary','March','April','May','June',
'July','August','Septmeber','October','November','December']

//Format today date as Month day, year
const todayDate = nameMonths[month] + " " + day + "," + year;
  document.getElementById('todayDate').innerHTML = todayDate;

//Create a dropdown menu
function dropDownMenu(){
   const dropdownForm = document.getElementById('calorieForm');

   if (dropdownForm.style.display === "none") {
     dropdownForm.style.display = "block";
   } else {
     dropdownForm.style.display = "none";
   }
 } 

//Create and define chart
const chartData = {
  labels: ['Carbs', 'Protein', 'Fats'],
  datasets: [{
    label: 'Total grams',
    data: [totalCarbs, totalProtein, totalFats],
    borderWidth: 1,
    backgroundColor: ['#06b6d4', '#3b82f6', '#fbbf24']
  }]
};
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
  type: 'doughnut',
  data: chartData,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
//Function that checks and update the total
function updateChartTotal(){
  myChart.data.datasets[0].data = [totalCarbs,totalProtein,totalFats];
  myChart.update();
}

//Form loader
window.addEventListener('load',() => {
  const calorieForm = document.querySelector("#calorieForm");
  const inputDescription = document.querySelector("#description")
  const inputCalories = document.querySelector("#calories");
  const inputCarbs = document.querySelector("#carbs");
  const inputProtein = document.querySelector("#protein");
  const inputFats = document.querySelector("#fats");
  const mealList = document.querySelector("#meal-list");

   calorieForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const descriptionValue = inputDescription.value;
      const calorieValue = parseInt(inputCalories.value);
      const carbsValue = parseInt(inputCarbs.value);
      const proteinValue = parseInt(inputProtein.value);
      const fatsValue = parseInt(inputFats.value);

      //Checks to see if there value in the input
      if(!descriptionValue || !calorieValue || !carbsValue || !proteinValue || !fatsValue){
        alert("Please feel out the info below");
      }else{
        console.log("Succes");
        myChart.data.datasets[0].data = [carbsValue, proteinValue, fatsValue];
        myChart.update();
      }
      // Add the values to the totals
      totalCalories += calorieValue;
      totalProtein += proteinValue;
      totalFats += fatsValue;
      totalCarbs += carbsValue;

      updateChartTotal();

      //Createing Element with DOM
      const meal_Container = document.createElement("div");
        meal_Container.classList.add("meal-container");

      const description_Content = document.createElement("div");
        description_Content.classList.add("description");
        description_Content.innerText = descriptionValue;

      const unorder_List = document.createElement("ul");
      const calorie_List = document.createElement("li");
      calorie_List.innerText = `Calories:${calorieValue}`;
       unorder_List.appendChild(calorie_List);

      const carbs_List = document.createElement("li");
      carbs_List.innerText = `Carbs:${carbsValue}`;
        unorder_List.appendChild(carbs_List);

      const protein_List = document.createElement("li");
      protein_List.innerText =`Protein:${proteinValue}`;
      unorder_List.appendChild(protein_List);

      const fats_List = document.createElement("li");
      fats_List.innerText = `Fats:${fatsValue}`;
      unorder_List.appendChild(fats_List);

      //Buttons
      const  button_container =  document.createElement("div");
      button_container.classList.add("button-container");

      const delete_Button = document.createElement("button");
      delete_Button.innerHTML = "Delete";
      button_container.appendChild(delete_Button);
      description_Content.appendChild(delete_Button);

      description_Content.appendChild(unorder_List);
      meal_Container.appendChild(description_Content); 
      mealList.appendChild(meal_Container);

      delete_Button.addEventListener('click',(e)=>{
        mealList.removeChild(meal_Container);
      });
   });
   myChart.data = chartData;
   myChart.update();
});

