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
   const dropdownForm = document.getElementById('dropDownForm');

   if (dropdownForm.style.display === "none") {
     dropdownForm.style.display = "block";
   } else {
     dropdownForm.style.display = "none";
   }
 } 
 
//console.log("HELLO");