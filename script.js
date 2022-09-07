const day = new Date();
document.querySelector(".day").innerHTML = day.getDate();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const month = new Date();
document.querySelector(".month").innerHTML = months[month.getMonth()];

const year = new Date();
document.querySelector(".year").innerHTML = year.getFullYear();

const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const week = new Date();
document.querySelector(".week").innerHTML = weeks[week.getDay()];



// Create a new list item when clicking on the "Add" button
const todoListForm = document.querySelector('.todo-list-form');
todoListForm.addEventListener('submit', addTasks);

function addTasks() {
  const writtenTasksValue = document.querySelector(".written_tasks").value;
  const li = document.createElement("li");
  li.classList.add('task');
  const span = document.createElement("span");
  const inputValue = writtenTasksValue;
  const task = document.createTextNode(inputValue);
  span.appendChild(task);
  li.appendChild(span);
  const deleteButton = document.createElement("button");
  deleteButton.textContent = 'Delete';
  li.append(deleteButton);

  if (inputValue === '') {
    alert("Please write something!");
  } 
  else {
    document.getElementById("tasks").appendChild(li);
  }
  todoListForm.reset();

  deleteButton.addEventListener('click',function(){
    this.parentNode.remove();
    });
};

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  } else if(ev.target.tagName === 'SPAN') {
    ev.target.parentElement.classList.toggle('checked');
  }
});





    



