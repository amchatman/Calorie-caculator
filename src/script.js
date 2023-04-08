/* 1.Get input of Protein, Carbs and Fats
   2.Add total of Protein, Carbs and Fats in each section
   3.Get percentage of total for each input base on how items store
   4. Input: Example Description: Name , Protein: 0g, Carbs: 0, Fats: 0
   5. Get Current date Month, date, year 
   */

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

//console.log("HELLO");

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
      const calorieValue = inputCalories.value;
      const carbsValue = inputCarbs.value;
      const proteinValue = inputProtein.value;
      const fatsValue = inputFats.value;
    
      //Checks to see if there value in the input
      if(!descriptionValue || !calorieValue || !carbsValue || !proteinValue || !fatsValue){
        alert("Please feel out the info below");
      }else{
        console.log("Succes");
      }
      //Createing Element with DOM
      const meal_Container = document.createElement("div");
        meal_Container.classList.add("meal-container");

      const description_Content = document.createElement("div");
        description_Content.classList.add("description");
        description_Content.innerText = descriptionValue;

      const unorder_List = document.createElement("ul");
        const calorie_List = document.createElement("li");
          calorie_List.innerText = calorieValue;

        const carbs_List = document.createElement("li");
          carbs_List.innerText = carbsValue;

        const protein_List = document.createElement("li");
          protein_List.innerText = proteinValue;

        const fats_List = document.createElement("li");
          fats_List.innerText = fatsValue;

      //Append Unorder List, List, and Div
      description_Content.append(unorder_List);
      meal_Container.appendChild(description_Content);
      unorder_List.appendChild(calorie_List);
      unorder_List.appendChild(carbs_List);
      unorder_List.appendChild(protein_List);
      unorder_List.appendChild(fats_List);
      mealList.appendChild(meal_Container);

   })
})