const userNameContainer = document.querySelector(".userName-container"),
greetingContainer = userNameContainer.querySelector(".greeting"),
userNameGreeting = greetingContainer.querySelector(".userName-greeting"),
userNameModiBtn = greetingContainer.querySelector(".userName-modiBtn"),
userNameForm = userNameContainer.querySelector(".userName-form"),
userNameInput = userNameForm.querySelector(".userName-input");

const USER_NAME = "userName";

function showUserName(){
  const userName_LS = window.localStorage.getItem(USER_NAME);
  if(userName_LS){
    greetingContainer.classList.add("show");
    userNameGreeting.innerText = `Welcome ${userName_LS} ^__^`;
    userNameModiBtn.addEventListener("click",modiNaming);
  }else{
    greetingContainer.classList.remove("show");
    userNameForm.classList.add("show");
    saveUserName();
  }
}

function modiNaming(){
  greetingContainer.classList.remove("show");
  userNameForm.classList.add("show");
  userNameInput.value = USER_NAME;
}
function saveUserName(){

}


function init(){
  showUserName();
}
init();