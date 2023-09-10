const currentTime=document.querySelector('[data-testid="currentUTCTime"]');
const currentDay = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const weekday=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const currentDayOfTheWeek=()=>{
    const d = new Date().getUTCDay(); 
    let day = weekday[d];
    currentDay.textContent=day;
}

currentDayOfTheWeek();

function currentTimeInMillisecond(){
    const newDate = new Date().getTime();
    currentTime.textContent= newDate; 
}

setInterval(currentTimeInMillisecond, 1000);