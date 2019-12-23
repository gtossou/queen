// day number to string
const dayToString = function (weekDay){
    return days[weekDay-1]
}

// month number to string
const monthToString = function (currentMonth){
    return months[currentMonth]
}

// add trailing zero for time
const checkTrailingzero = function(number){
    if (parseInt(number).toString().length==2){
        return parseInt(number);
    }
    else{
        return "0"+parseInt(number);
    }
}

// tick second
const tickSecond=function(){
    let today=new Date();
    // check user format 
    if (toggleValue=="locale"){
        document.querySelector(".seconds").innerHTML=checkTrailingzero(today.getSeconds());
    }
    else{
        pmAm=today.toLocaleString('en-US').split(" ",)[2]
        document.querySelector(".seconds").innerHTML=checkTrailingzero(today.getSeconds())+" "+pmAm;
    }
}

// tick minute
const tickMinute=function(){
    let today=new Date();
    document.querySelector(".minutes").innerHTML=checkTrailingzero(today.getMinutes());
}

// tick hour
const tickHour=function(toggleValue){
    let today=new Date();
    // check user format
    if (toggleValue=="locale"){
    document.querySelector(".hours").innerHTML=checkTrailingzero(today.getHours());
    }
    else{
        today=today.toLocaleString('en-US')
        hourUS=(today.split(':')[0].split(",",)[1])
        document.querySelector(".hours").innerHTML=checkTrailingzero(hourUS);
    }
}

// tick day
const tickDay=function(){
    let today=new Date();
    document.querySelector(".day").innerHTML=dayToString(today.getDay());
}

// tick month
const tickMonth=function(){
    let today=new Date();
    document.querySelector(".month").innerHTML=dayToString(today.getMonth());
}

const toggleFunction = function(toggleValue){
    if (toggleValue=="locale"){
        toggleValue="US"
    }
    else{
        toggleValue="locale"
    }
    return toggleValue;
}
const months=["January","February","March","April","May","June","July","August","September","October","November","December"]
const days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

// vars
let toggleValue="locale";
const today=new Date();

// BODY DIV
const bodyDiv=document.createElement("div");
bodyDiv.classList.add("bodyDiv");
document.body.appendChild(bodyDiv);

// TIME DIV
const timeDiv=document.createElement("div");
timeDiv.classList.add("timeDiv");

let timeHtml = `<p class="timeP">
                <span class="hours">${checkTrailingzero(today.getHours())}</span>
                <span>:</span>
                <span class="minutes">${checkTrailingzero(today.getMinutes())}</span>
                <span class="seconds">${checkTrailingzero(today.getSeconds())}</span>
                </p>`;
timeDiv.innerHTML=timeHtml;
bodyDiv.insertAdjacentElement("beforeend",timeDiv)

// DATE DIV
const dateDiv=document.createElement("div");
dateDiv.classList.add("dateDiv");
let dateHtml = `<p class="dateP"><span class="day">${dayToString(today.getDay())}</span> - <span class="month">${monthToString(today.getMonth())}</span> <span class="date">${today.getDate()}</span></p>`;
dateDiv.innerHTML=dateHtml;
bodyDiv.insertAdjacentElement("beforeend",dateDiv)

setInterval(function(){
    tickSecond();
    tickMinute();
    tickHour(toggleValue);
}, 1000); 
butto=document.querySelector(".togButton");
console.log(butto);
butto.addEventListener('click', function(){
    toggleValue=toggleFunction(toggleValue)
});

