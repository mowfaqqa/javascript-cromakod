// localStorage & sessionStorage

// localStorage
// saving items in the localstorage
// localStorage.setItem("name", "Muwaffaq");
// localStorage.setItem("age", "30");

// const students = [
//   {
//     name: "Aliyu Madaki",
//     level: 200,
//     dept: "computer science",
//   },
//   {
//     name: "Fatima Ahmed",
//     level: 200,
//     dept: "computer science",
//   },
//   {
//     name: "Kabiru Musa",
//     level: 200,
//     dept: "computer science",
//   },
// ];

// used to convert other data types to string
// JSON.stringify();
// localStorage.setItem("students", JSON.stringify(students));

// get items from localStorage
// const firstname = localStorage.getItem("name");
// const age = localStorage.getItem("age");
// const getstudents = localStorage.getItem("students");
// const convertedDataType = JSON.parse(getstudents)
// console.log(convertedDataType)

// remove items
// localStorage.removeItem("age");

// clear localStorage completely
// localStorage.clear();

// sessionStorage
// add item
// sessionStorage.setItem("password", "P@55wording");

// get items

// const password = sessionStorage.getItem("password");
// console.log(password);

// remove items
// sessionStorage.removeItem("password");

// clear items entirely
// sessionStorage.clear();

const form = document.getElementById("task-form");
const taskInput = document.querySelector("#task");
const collection = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");

// listen for a submit event
form.addEventListener("submit", runevent);
document.addEventListener("DOMContentLoaded", getTasks);

function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.map((task, index) => {
    // created the li element
    const li = document.createElement("li");
    li.className = "collection-item";
    li.innerText = task;
    // creating link
    const a = document.createElement("a");
    a.classList = "delete-item secondary-content";
    a.innerHTML = "<i class='fa fa-remove'></i>";

    li.appendChild(a);
    collection.appendChild(li);
  });
}
function runevent(e) {
  e.preventDefault();

  const formValue = taskInput.value;

  // created the li element
  const li = document.createElement("li");
  li.className = "collection-item";
  li.innerText = task;
  // creating link
  const a = document.createElement("a");
  a.classList = "delete-item secondary-content";
  a.innerHTML = "<i class='fa fa-remove'></i>";

  li.appendChild(a);
  collection.appendChild(li);

  //save to localstorage
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(formValue);
  localStorage.setItem("tasks", JSON.stringify("tasks"));
}

// logic for clear all tasks
//event listener for clear-task button
clearBtn.addEventListener("click", runClearTask);

function runClearTask(e) {
  e.preventDefault();

  localStorage.clear();
}

//delete items
// add event listener to collection element
collection.addEventListener("click", deleteTask);

function deleteTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    e.target.parentElement.parentElement.remove();
  }

  const taskItem = e.target.parentElement.parentElement;
  // remove from local storage
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach((task, index) => {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });
}
