let tasks = [];
const tasksList = document.getElementById("list");
const addTaskInputBox = document.getElementById("add-task");

 
   var count = 0;
function addTodo (task) {
 
  count++;
  let itemcount= document.getElementById('count').innerHTML = `Total items: ${count} `;
  var att5= document.createAttribute("name");
  att5.value= `${count}`;
    
  

   
     
  tasks.push(task);

  renderList();
  
}

function deleteTodo (taskId) {

 
  count--;
  let itemcount= document.getElementById('count').innerHTML = `Total items: ${count} `;
  var att5= document.createAttribute("name");
  att5.value= `${count}`;
    




  const newTasks = tasks.filter(function (task) {
    
    
    return task.id !== taskId;
    
  });
  
  tasks = newTasks;
  renderList();
}

function renderList() {
  tasksList.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement('li');
    const task = tasks[i];

    li.innerHTML = `
      <input type="checkbox" id="${task.id}" />
      <label for="${task.id}">${task.text}</label>
      <button data-taskId="${task.id}" data-test="test" class="delete">Delete</button>
    `;
    tasksList.appendChild(li);
    addTaskInputBox.value = '';
  }
 
}

function checkTodo (taskId) {
  const taskIndex = tasks.findIndex(function (task) {
    return task.id === taskId
  });

  tasks[taskIndex].done = !tasks[taskIndex].done;
}

function handleClick(event) {
  console.log(event.target.className);
  if (event.target.className === 'delete')  {
    const taskid = Number(event.target.dataset.taskid);
    deleteTodo(taskid);
  }
}

function initialize() {
  document.addEventListener('click', handleClick);
  document.addEventListener('keyup', function (e) {
    const text = e.target.value;
    if (e.key === 'Enter') {
    console.log("initialize -> text", text)

        const task = {
          text: text,
          id: Date.now(),
          done: false
        }

        addTodo(task);
    }
    
  });
  renderList();
}

initialize();