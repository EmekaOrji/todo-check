let todoList = document.querySelectorAll("li"); // This represents each todo

// The following is where the whole functionality of the app will be
todoList.forEach(e => {
  let listText = e.querySelector(".task");
  let btnDone = document.createElement("button");
  e.appendChild(btnDone);
  btnDone.innerHTML = "<i class='fas fa-check'></i>";
  btnDone.addEventListener("click", () => {
    done();
  });
  
  // The function that should create a line-through on the task that is clicked on
  function done() {
    listText.classList.toggle("checked");
    btnDone.classList.toggle("btnDone");
  }
});