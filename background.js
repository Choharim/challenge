const body = document.querySelector("body");

const imgeUrlArray = ["https://www.visitnsw.com/sites/visitnsw/files/styles/landscape_992x558/public/2019-11/Christmas%20Day%20Celebration%20at%20Lilianfels%20Resort%20and%20Spa_0.jpeg?itok=iG39pjdM",
"https://cdn.friendsoftheearth.uk/sites/default/files/styles/hero_image/public/media/images/wooden-christmas-decorations.jpg?h=119335f7&itok=5nxnzked",
"https://i2-prod.edinburghlive.co.uk/incoming/article19164631.ece/ALTERNATES/s1200c/0_GettyImages-1212595221.jpg",
"https://ak.picdn.net/shutterstock/videos/12729008/thumb/3.jpg"];

function randomImage(){
  const imageCount = imgeUrlArray.length;
  const randomNumber = Math.floor(Math.random()*imageCount);
  
  body.style.background = `url("${imgeUrlArray[randomNumber]}")`;
}

function init(){
  randomImage();
}
init();