var currentDate = moment().format('MMMM Do YYYY, h:mm a');
var now = document.getElementById('currentDay');
now.innerHTML = currentDate;


var taskAreaTask = document.getElementsByClassName('taskAreaTask');
var currentHour = parseInt(moment().format('HH'));
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

var tasks = document.getElementsByTagName('h3')
var value = taskHour

localStorage.getItem(tasks, value)
localStorage.setItem(tasks, value)








// console.log(taskHour)
// console.log({taskAreaTask});
// console.log(currentHour);
