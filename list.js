const listForm = document.querySelector(".list-form"),
listInput = document.querySelector(".list-input"),
listToDos = document.querySelector(".list-todos");

const TODOS = "toDos";
const toDosArray = [];

function submitListForm(event){
  event.preventDefault();
}

function init(){
  const str_toDos_LS = localStorage.getItem(TODOS);
  const pars_toDos_LS = JSON.parse(str_toDos_LS);
  
  if(pars_toDos_LS !== null){
    pars_toDos_LS.forEach();
  }
  
  listForm.addEventListener("submit",submitListForm);
}
init();
