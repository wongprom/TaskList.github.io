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

  //Create li Element
  const li = document.createElement('li');
  //Add A Class
  li.className = 'collection-item';
  //Create Text Node And Append It To li
  li.appendChild(document.createTextNode(taskInput.value));
  //Create New Link Element. The X To The Right
  const link = document.createElement('a');
  //Add A class To The New Element. class secondary-content Needs To Get The Icon To The Right Of A List Item When You Use The Front-End FrameWork Metirializer
  link.className = 'delete-item secondary-content';
  //Add Icon To The html
  link.innerHTML = '<i class = "fa fa-remove"></i>';
  //Append The link To li
  li.appendChild(link);

  //Append li To ul
  tasklist.appendChild(li);

  //Clear Input After Adding A Task
  taskInput = '';

  e.preventDefault();
}
