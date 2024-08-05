const inputField = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputField.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputField.value;
    listContainer.appendChild(li);

    let icon = document.createElement("span");
    icon.innerHTML = "\u00d7";
    li.appendChild(icon);
  }
  inputField.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
