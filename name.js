const userNameContainer = document.querySelector(".userName-container");

const USER_NAME = "userName";

function showUserName(){
  const userName_LS = window.localStorage.getItem(USER_NAME);
  if(userName_LS){
   
  }else{
    saveUserName();
  }
}

function saveUserName(){

}


function init(){
  showUserName();
}
init();