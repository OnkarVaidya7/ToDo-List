let task = document.getElementById("task");
let taskList = document.querySelector(".task-list");

function addTask() {
  let newTask = task.value;
  if (newTask != "") {
    let li = document.createElement("li");
    li.innerHTML = newTask;

    let span = document.createElement("span");
    span.innerHTML = "X";
    li.appendChild(span);
    taskList.appendChild(li);
    console.log(newTask);
  } else {
    alert("ENTER A TASK");
  }
  saveData();
  task.value = "";
}

taskList.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName == "LI") {
      event.target.classList.toggle("checked");
      saveData();
      console.log("clicked on li tag");
    } else if (event.target.tagName == "SPAN") {
      event.target.parentElement.remove();
      saveData();
      console.log("Clicked in cross");
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", taskList.innerHTML);
}

function fetchData() {
  taskList.innerHTML = localStorage.getItem("data");
}
fetchData();

let hr, mn, sec, ms, time;
let abc = document.getElementById("abc");
function updateTime() {
  let tm = new Date();
  hr = tm.getHours();
  mn = tm.getMinutes();
  sec = tm.getSeconds();

  abc.innerHTML = hr + ":" + mn + ":" + sec;
}
setInterval(updateTime, 1000);

let  dd, mm, yy, date;
let xyz = document.getElementById("xyz");
function updateDate() {
  let dt = new Date();
  dd = dt.getDay();
  mm = (dt.getMonth()+1);
  yy = dt.getFullYear();
  
  xyz.innerHTML = dd + "/" + mm + "/" + yy;
}
setInterval(updateDate, 1000);
