// const conditions = document.getElementById('weather-condition');
const dayDetails = document.getElementById('day-month-time');
console.log(dayDetails);
// const tempDetails = document.getElementById('temp-details');

const getCurrentDay = () => {
    const dayArray = ["Sunday", "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
    const dateDetails = new Date();
    const day = dayArray[dateDetails.getDay()];
    return `${day} | `;
}

const getCurrentDetails = () => {
    const monthsArr = ['Jan','Feb','March','Aprail','May','June',"July",'August','Sept','Oct','Nov','Dec'];
    const currentDetails = new Date();
    const currentMonth = monthsArr[currentDetails.getMonth() ];
    const currentDate = currentDetails.getDate();

    let hours = currentDetails.getHours();
    let mins = currentDetails.getMinutes();

    hours = hours >= 12 ? hours - 12 : hours;
    hours = hours < 10 ? "0" + hours : hours;
    let am_pm = hours >= 12 ? "PM" : "AM";

    mins = mins < 10? "0" + mins : mins;

    return `${currentMonth} ${currentDate} | ${hours + ":" + mins + " " + am_pm} `;
}

dayDetails.innerText = getCurrentDay() + getCurrentDetails();