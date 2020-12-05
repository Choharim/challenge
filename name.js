const userNameContainer = document.querySelector(".userName-container");

const USER_NAME = "userName";

function showUserName(){
  const userName_LS = window.localStorage.getItem(USER_NAME);
  if(userName_LS){
    const userNameGreeting = document.createElement("span");
    const userNameModiBtn = document.createElement("button");

    userNameContainer.appendChild(userNameGreeting);
    userNameContainer.appendChild(userNameModiBtn);
    userNameGreeting.classList.add("userName-greeting");
    userNameModiBtn.classList.add("userName-modiBtn");
    userNameModiBtn.innerHTML = '<i class="fas fa-eraser"></i>';

    userNameGreeting.innerText = userName_LS;
  }else{
    saveUserName();
  }
}

function saveUserName(){
  const userNameForm = document.createElement("form");
  const userNameInput = document.createElement("input");

  userNameContainer.appendChild(userNameForm);
  userNameContainer.appendChild(userNameInput);
  userNameForm.classList.add("userName-form");
  userNameInput.classList.add("userName-input");
  userNameInput.placeholder = "What's your name?";

}

function init(){
  showUserName();
}
init();