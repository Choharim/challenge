const userNameContainer = document.querySelector(".userName-container");

const USER_NAME = "userName";

function showUserName(){
  const userName_LS = window.localStorage.getItem(USER_NAME);
  if(userName_LS){
    const greeting = document.createElement("span");

    userNameContainer.appendChild(greeting);
    greeting.classList.add("userName-greeting");

    greeting.innerText = greeting;
  }
}

function init(){
  showUserName();
  
}
init();