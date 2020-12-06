const listForm = document.querySelector(".list-form"),
listInput = document.querySelector(".list-input"),
listToDos = document.querySelector(".list-todos");

const TODOS = "toDos";
const toDosArray = [];

function saveToDos(){
  localStorage.setItem(TODOS,JSON.stringify(toDosArray));
}

function showToDo(todo){
  const div = document.createElement("div");
  const li = document.createElement("li");
  const modiBtn =  document.createElement("button");
  const delBtn =  document.createElement("button");

  listToDos.appendChild(div);
  div.appendChild(li);
  div.appendChild(modiBtn);
  div.appendChild(delBtn);

  modiBtn.innerHTML = `<i class="fas fa-arrow-circle-left"></i>`;
  delBtn.innerHTML = `<i class="far fa-times-circle"></i>`;
  li.innerText = todo;

  const todoID = toDosArray.length + 1;
  div.classList.add(todoID);
  const todoObj = {
    id : todoID,
    todo
  };
  toDosArray.push(todoObj);
  saveToDos();
}

function submitListForm(event){
  event.preventDefault();
  const listInputValue = listInput.value;

  if(listInputValue !== ""){
    showToDo(listInputValue);
    listInput.value = "";
  }
}

function init(){
  const str_toDos_LS = localStorage.getItem(TODOS);
  const pars_toDos_LS = JSON.parse(str_toDos_LS);
  
  if(pars_toDos_LS !== null){
    pars_toDos_LS.forEach(function(todo){
      showToDo(todo.todo);
    });
  }
  
  listForm.addEventListener("submit",submitListForm);
}
init();
