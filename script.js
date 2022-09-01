function showForm() {
  var button = document.querySelector('#add-task');
  var form = document.querySelector('#form');

  form.style.display = 'block';
  button.style.display = 'none';
}

function addNewTask() {
  const data = new Date();
  const branch =     0;
  const dataDodania = data.toLocaleString();
  const newTaskTitle =document.querySelector("#new-task-title").value;
   const newTask =document.querySelector("#new-task").value;
 let li = document.createElement("li");
   let h2 = document.createElement("h2");
 let p = document.createElement("p");
   let time = document.createElement("time");
   console.log(newTaskTitle);
  console.log(newTask);
  console.log(dataDodania);
  document.querySelector("#quest-log").append(li);
  document.querySelector("#quest-log").li.append(h2);
  document.querySelector("#quest-log").li.h2.innerHTML({newTaskTitle});
  document.querySelector("#quest-log").li.time.innerHTML({dataDodania});
  document.querySelector("#quest-log").li.p.innerHTML({newTask});
}
function consoleLogTime() {
  const data = new Date();

  const dataDodania = data.toLocaleString();

  console.log(dataDodania);
}

function changeColor(newColor) {
  var elem = document.getElementById('kolory');
  elem.style.color = newColor;
  elem.innerHTML = 'Skrypt działa!';
  console.log('kolor został zmieniony');
}
