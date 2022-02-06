var currentDate = moment().format('MMMM Do YYYY, h:mm a');
var now = document.getElementById('currentDay');
now.innerHTML = currentDate;



var taskAreaTask = document.getElementsByClassName('taskAreaTask');
var currentHour = parseInt(moment().format('HH'));
for (var element of taskAreaTask) {

    var taskHour = parseInt(element.getAttribute('data-hour'));

    if (taskHour < currentHour) {
        element.classList.add('past')
    }
    else if (taskHour == currentHour) {
        element.classList.add('present')
    }
    else {
        element.classList.add('future')
    }
}

$(".saveBtn").on("click", function () {
    var value = taskAreaTask
    var key = document.getElementsByClassName('hours')
    localStorage.setItem("saveBtnEl", value)
})
