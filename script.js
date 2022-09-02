
  let currentTime = new Date();
  const currentTimeDisplayed = currentTime.toLocaleString();
  let p = document.createElement("p");
  var div =  document.getElementById('data');
  document.getElementById('data').append(p);
  p.innerHTML = currentTimeDisplayed;


function showForm() {
  var button = document.querySelector('#add-task');
  var form = document.querySelector('#form');

  form.style.display = 'block';
  button.style.display = 'none';
 


 
//h1.innerHTML = "pupa";
}

function addNewTask() {
  const data = new Date();
  const dataDodania = data.toLocaleString();
  const newTaskTitle =document.getElementById("new-task-title").value;
   const newTask =document.getElementById("new-task").value;
 let li = document.createElement("li");
   let h2 = document.createElement("h2");
 let p = document.createElement("p");
   let time = document.createElement("time");
   document.getElementById("quest-log").li.h2.innerHTML = newTaskTitle;
  document.getElementById("quest-log").li.time.innerHTML = dataDodania;
  document.getElementById("quest-log").li.p.innerHTML = newTask;
  document.getElementById("quest-log").append(li);
  document.getElementById("quest-log").li.append(h2);
  document.qgetElementById("quest-log").li.append(time);
  document.getElementById("quest-log").li.h2.innerHTML = newTaskTitle;
  document.getElementById("quest-log").li.time.innerHTML = dataDodania;
  document.getElementById("quest-log").li.p.innerHTML = newTask;
}
function consoleLogTime() {
  const data = new Date();

  const dataDodania = data.toLocaleString();

  console.log(dataDodania);
}

function changeColor(newColor) {
  const data = new Date();
  const dataDodania = data.toLocaleString();
  var elem = document.getElementById('kolory');
  elem.style.color = newColor;
  elem.innerHTML = dataDodania;
  
}
