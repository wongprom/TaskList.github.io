// Get Elements From index.html
const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load All Event Listeners
loadAllEventListeners();

function loadAllEventListeners() {
  //Add task event
  form.addEventListener('submit', addTask);
}

//Add Task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add A Task');
  }

  e.preventDefault();
}
