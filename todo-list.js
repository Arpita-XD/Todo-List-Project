document.addEventListener("DOMContentLoaded", loadPage);

function addTask() {
  let input = document.getElementById("todo-input");
  let errorMessage = document.getElementById("error-message");
  
  if (input.value.trim() === "") {
    errorMessage.textContent = "*Please enter a task";
    errorMessage.style.display = "block";
    return;
  } else {
    errorMessage.style.display = "none"; // Hide error message if input is valid
  }

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(input.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  displayTasks();
  input.value = "";
}

function displayTasks() {
  let taskList = document.getElementById("todo-taskList");
  taskList.innerHTML = "";
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.textContent = `${index + 1}. ${task}`;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      if (confirm("Are you sure you want to delete this task?")) {
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        displayTasks();
      }
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

function loadTasks() {
  displayTasks();
}

function loadPage() {
  let username = localStorage.getItem("username");
  if (!username) {
    window.location.href = "login-todos.html";
    return;
  }

  document.getElementById("welcome-message").textContent = `Welcome, ${username}!`;
  loadTasks();
}

function logout(){
  document.getElementById("logout-button");
  localStorage.clear();
  window.location.href = "login-todos.html"
}

// document.addEventListener("DOMContentLoaded", loadTasks);

// function addTask() {
//   let input = document.getElementById("todo-input");
//   if (input.value.trim() === "") {
//     alert("Please enter a task");
//     return;
//   }

//   let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//   tasks.push(input.value);
//   localStorage.setItem("tasks", JSON.stringify(tasks));

//   displayTasks(input.value);
//   input.value = "";
// }

// function displayTasks(task) {
//   let taskList = document.getElementById("todo-taskList");
//   // taskList.innerHTML = "";
//   // let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//   // tasks.forEach((task, index) => {
//     let li = document.createElement("li");
//     li.textContent = task;

//     let deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.onclick = function () {
//       if (confirm("Are you sure you want to delete this task?")) {
//         tasks.splice(index, 1);
//         localStorage.setItem("tasks", JSON.stringify(tasks));
//         displayTasks();
//       }
//     };

//     li.appendChild(deleteButton);
//     taskList.appendChild(li);
//   // });
// }

// function loadTasks() {
//   checkUserInfo();
//   displayTasks();
// }

// function checkUserInfo(){
// let username = localStorage.getItem("username");
// if (!username) {
//   window.location.href = "Login_Todos.html";
//   return;
// }

//   let welcomeMsg = document.getElementById("welcome-msg");
//   welcomeMsg.textContent = "Welcome"
// }
