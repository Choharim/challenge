const greetingContainer = document.querySelector(".greeting"),
userNameGreeting = document.querySelector(".userName-greeting"),
userNameModiBtn = document.querySelector(".userName-modiBtn"),
userNameForm = document.querySelector(".userName-form"),
userNameInput = document.querySelector(".userName-input");

const USER_NAME = "userName";


function saveUserName(name){
  localStorage.setItem(USER_NAME,name);
}

function modiNaming(event){
  const userName_LS = localStorage.getItem(USER_NAME);
  event.preventDefault();
  greetingContainer.classList.remove("show");
  userNameForm.classList.add("show");
  userNameInput.value = userName_LS;
}

function submitUserName(event){
  event.preventDefault();
  const name = userNameInput.value;
  if(name !== ""){
    saveUserName(name);
    showUserName(name);
  }
  userNameInput.value = "";
}

function showUserName(name){
  const userName_LS = localStorage.getItem(USER_NAME);
  if(userName_LS === null){
    greetingContainer.classList.remove("show");
    userNameForm.classList.add("show");
  }else {
    greetingContainer.classList.add("show");
    userNameForm.classList.remove("show");
    userNameGreeting.innerText = `Welcome ${userName_LS} ^__^`;
  }
}

function init(){
  showUserName();
  userNameForm.addEventListener("submit",submitUserName);
  userNameModiBtn.addEventListener("click",modiNaming);
}
init();