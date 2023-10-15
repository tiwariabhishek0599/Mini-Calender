let monthName = document.getElementById("month");
let dayName = document.getElementById("dayName");
let day = document.getElementById("date");
let year = document.getElementById("year");
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
"Saturday"];


  let date = new Date();
  monthName.innerText = monthNames[date.getMonth()];
  dayName.innerText = dayNames[date.getDay()];
  day.innerText = date.getDate();
  year.innerText = date.getFullYear();


