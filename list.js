const listForm = document.querySelector(".list-form"),
listInput = document.querySelector(".list-input"),
listToDos = document.querySelector(".list-todos");

const TODOS = "toDos";
let toDosArray = [];

function saveToDos(){
  localStorage.setItem(TODOS,JSON.stringify(toDosArray));
}

function delToDo(event){
  const clickedDel = event.target;
  const clickedDiv = clickedDel.parentNode;
  const clickedID = clickedDiv.id;
  const showToDos = listToDos.childNodes;

  if(listInput.value !== ""){
    return;
  }
  clickedDiv.remove();
  let showCount = 1;
  showToDos.forEach(function(todo){
    todo.id = showCount;
    showCount++;
  });
  const delIndex = toDosArray.findIndex(function(todo){
    return todo.id === parseInt(clickedID);
  });
  toDosArray.splice(delIndex,1);
  let todoCount =1;
  toDosArray.forEach(function(obj,index){
    obj.id = todoCount;
    obj.todo = toDosArray[index].todo;
    todoCount++;
  });
  saveToDos();
  ///////실제 아이디 다시 순서대로 바꿔야함.
}

function modiToDo(event){
  const clickedModi = event.target;
  const clickedDiv = clickedModi.parentNode;
  const clickedID = clickedDiv.id;
  const clickedToDo = clickedDiv.firstChild.innerText;
  const showToDos = listToDos.childNodes; 

  if(listInput.value !== ""){
    return;
  }
 
  clickedDiv.remove();
  listInput.value = clickedToDo;
  
  let showCount = 1;
  showToDos.forEach(function(todo){
    todo.id = showCount;
    showCount++;
  });
  const refreshArray = toDosArray.filter(function(todo){
    return todo.id !== parseInt(clickedID);
  });
  let todoCount = 1;
  refreshArray.forEach(function(obj,index){
    obj.id = todoCount;
    obj.todo = refreshArray[index].todo;
    todoCount++;
  });
  toDosArray = refreshArray;
  saveToDos();
  ///////실제 아이디 다시 순서대로 바꿔야함.
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
  div.id = todoID;
  const todoObj = {
    id : todoID,
    todo
  };
  toDosArray.push(todoObj);
  saveToDos();
  modiBtn.addEventListener("click",modiToDo);
  delBtn.addEventListener("click",delToDo);
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
