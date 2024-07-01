const form = document.querySelector("#task-form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");
const addBtn = document.querySelector(".add-task");
const select = document.querySelector("select");

// Clear input
// taskInput.value = '';
// form.addEventListener("submit", runEvent);
// Keydown
// taskInput.addEventListener('keydown', runEvent);
// Keydown
// taskInput.addEventListener('keyup', runEvent);
// Keypress
// taskInput.addEventListener('keypress', runEvent);
// Focus
// taskInput.addEventListener('focus', runEvent);
// Blur
// taskInput.addEventListener('blur', runEvent);
// Cut
// taskInput.addEventListener('cut', runEvent);
// Paste
// taskInput.addEventListener('paste', runEvent);
// Input
// taskInput.addEventListener('input', runEvent);
// Change
// select.addEventListener('change', runEvent);

function runEvent(e) {
  e.preventDefault();
  console.log(`EVENT TYPE: ${e.type}`);
  console.log(e.target.value)
  // heading.innerHTML = e.target.value;

  // alert("do not try to paste the text")
}
