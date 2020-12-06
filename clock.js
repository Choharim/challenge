const clockContainer = document.querySelector(".clock-container"),
clock = clockContainer.querySelector(".clock"),
date = clockContainer.querySelector(".date");

function getTime(){
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const currentSecond = currentTime.getSeconds();
  const currentDate = new Intl.DateTimeFormat('ko-KR').format(currentTime);

  clock.innerText = `${currentHour <10 ? `0${currentHour}` : currentHour} : ${currentMinute <10? `0${currentMinute}` : currentMinute} : ${currentSecond <10 ? `0${currentSecond}` : currentSecond}`;
  date.innerText=`${currentDate}`;
}

function init(){
  setInterval(getTime,1000);
}
init();