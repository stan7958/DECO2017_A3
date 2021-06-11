const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button")
var taskInput = document.getElementById("taskInput");
var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");
var tasklist = document.getElementById("tasklist");

button.addEventListener("click", function(event){
  event.preventDefault();
  let taskIn = taskInput.value;
  let dueDate = dueDateInput.value;
  let completionInput = completionTimeInput.value;
  let estimatedTime = estimatedTimeInput.value;
  let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
  addTask(taskIn,dueDate,priorityRating,completionInput,estimatedTime,"half")
  console.log(taskList)
})

var taskList = [];

/*var task = {
  name:0,
  duedate:  0,
  priority: 0,
  estimatedtime: 0,
  status: 0,
}
*/

function addTask(nam,due,prior,dueTime,estdtime,stat) {
  let task = {
   name:nam,
   duedate:  due,
   priority:prior,
   dueTime: dueTime,
   estimatedtime: estdtime,
   status: stat,
  };
 taskList.push(task)
 renderTask(task);  
}

function renderTask(task){
  //Create elements
 let item = document.createElement("li");
 //item.innerHTML = "<div class=testDiv>" "</div>";
 item.innerHTML = "<div class=testDiv>" + "<p>" + task.name + "<br>" + task.duedate + "<br>" + task.priority + "<br>" + task.dueTime + "<br>" + task.estimatedtime + "<br>" + task.status + "</p>" + "</div>";
 
 tasklist.appendChild(item);

  //extra task elements
  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("Delete Task");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton);

  //event listeners for elements
 delButton.addEventListener("click", function(event) {
  event.preventDefault();
  item.remove();
})
  //clear the input form
form.reset();
}