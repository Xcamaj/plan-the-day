var currentDate = moment().format('MMMM Do YYYY, h:mm a');
var now = document.getElementById('currentDay');
now.innerHTML = currentDate;

var taskAreaTask = document.getElementsByClassName('taskAreaTask');
var currentHour = parseInt(moment().format('hh'));
console.log(currentHour)
for (var element of taskAreaTask) {
    console.log(element)
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





// console.log(taskHour)
// console.log({taskAreaTask});
// console.log(currentHour);
