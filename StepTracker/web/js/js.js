//all Time hours:minute
function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100), seconds = Math.floor((duration / 1000) % 60), minutes = Math.floor((duration / (1000 * 60)) % 60), hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    return hours + ":" + minutes;
}

//only Hour
function hour(duration) {
    var milliseconds = parseInt((duration % 1000) / 100), seconds = Math.floor((duration / 1000) % 60), minutes = Math.floor((duration / (1000 * 60)) % 60), hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    hours = (hours < 10) ? "0" + hours : hours;
    return hours;
}

//full time on main screen
var time = '[{"timestamp":1560151980000,"steps":981},{"timestamp":1560161100000,"steps":103},{"timestamp":1560179640000,"steps":1911},{"timestamp":1560243749916,"steps":1404},{"timestamp":1560255089916,"steps":820}]';
var obj = JSON.parse(time);

var timee = 0;
for (var i = 0; i < obj.length; i++) {
    timee += obj[i].timestamp;
}
document.getElementById("time").innerHTML = msToTime(timee);


//linkForDay
function link(id) {
    localStorage.setItem("id", id);
    window.location = "http://localhost:8080/Fitness Tracker/dayDetailsScreen.html";
}

//allSteps
var time = '[{"timestamp":1560151980000,"steps":981},{"timestamp":1560161100000,"steps":103},{"timestamp":1560179640000,"steps":1911},{"timestamp":1560243749916,"steps":1404},{"timestamp":1560255089916,"steps":820}]';
var obj = JSON.parse(time);

var step = 0;
for (var i = 0; i < obj.length; i++) {
    step += obj[i].steps;
}
document.getElementById("step").innerHTML = step;



//allCalories
var call = '[{"timestamp":1560151980000,"steps":981},{"timestamp":1560161100000,"steps":103},{"timestamp":1560179640000,"steps":1911},{"timestamp":1560243749916,"steps":1404},{"timestamp":1560255089916,"steps":820}]';
var obj = JSON.parse(time);

var calories = 0;
for (var i = 0; i < obj.length; i++) {
    calories += obj[i].steps;
}
document.getElementById("cal").innerHTML = calories * 0.05;


function showDay() {
    document.getElementById("mon").innerHTML = "Monday";
}


//dateManual
function showDate1() {
    var myDate = new Date("07/10/2019");
    var mon = "Monday";

    document.getElementById("link").innerHTML = link(0);
    document.getElementById("day").innerHTML = mon;
    document.getElementById("date").innerHTML = (myDate.getUTCMonth() + 1) + ' ' + myDate.getDate() + ', ' + myDate.getUTCFullYear() + '.';
}

function showDate2() {
    var myDate = new Date("07/11/2019");
    var thue = "Thuesday";

    document.getElementById("link").innerHTML = link(1);
    document.getElementById("day").innerHTML = thue;
    document.getElementById("date").innerHTML = (myDate.getUTCMonth() + 1) + ' ' + myDate.getDate() + ', ' + myDate.getUTCFullYear() + '.';
}

function showDate3() {
    var myDate = new Date("07/12/2019");
    var wed = "Wednesday";

    document.getElementById("link").innerHTML = link(2);
    document.getElementById("day").innerHTML = wed;
    document.getElementById("date").innerHTML = (myDate.getUTCMonth() + 1) + ' ' + myDate.getDate() + ', ' + myDate.getUTCFullYear() + '.';
}

function showDate4() {
    var myDate = new Date("07/13/2019");
    var thur = "Thursday";

    
    document.getElementById("day").innerHTML = thur;
    document.getElementById("date").innerHTML = (myDate.getUTCMonth() + 1) + ' ' + myDate.getDate() + ', ' + myDate.getUTCFullYear() + '.';
}

function showDate5() {
    var myDate = new Date("07/14/2019");
    var fri = "Friday";

    
    document.getElementById("day").innerHTML = fri;
    document.getElementById("date").innerHTML = (myDate.getUTCMonth() + 1) + ' ' + myDate.getDate() + ', ' + myDate.getUTCFullYear() + '.';
}

//day time
function secToTime(timeInSeconds) {
    var pad = function (num, size) {
        return ('000' + num).slice(size * -1);
    },
            time = parseFloat(timeInSeconds).toFixed(3),
            hours = Math.floor(time / 60 / 60),
            minutes = Math.floor(time / 60) % 60,
            seconds = Math.floor(time - minutes * 60),
            milliseconds = time.slice(-3);

    return pad(minutes, 2) + ':' + pad(seconds, 2);
}

