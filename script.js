const daysId = document.getElementById("days");
const hoursId = document.getElementById("hours");
const minutesId = document.getElementById("minutes");
const secondsId = document.getElementById("seconds");

const election = "20 February 2027";

function countDown () {
    const electionDate = new Date(election);
    const currentDate = new Date();

    const diff = electionDate - currentDate;

    const days = Math.floor(diff/ 1000/ 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff/ 1000) % 60;
    
    daysId.innerHTML = days;
    // hoursId.innerHTML = hours;
    // minutesId.innerHTML = minutes;

    if (hours < 10) {
        hoursId.innerHTML = "0" + hours;
    } else {
        hoursId.innerHTML = hours;
    }

    if (minutes < 10) {
        minutesId.innerHTML = "0" + minutes;
    } else {
        minutesId.innerHTML = minutes;
    }
    
    if (seconds < 10) {
        secondsId.innerHTML = "0" + seconds;
    } else {
        secondsId.innerHTML = seconds;
    }


    
}

setInterval(countDown, 1000);