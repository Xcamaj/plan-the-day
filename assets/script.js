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

var key = document.getElementsByClassName('hours')
var value = document.getElementsByClassName('taskAreaTask')

localStorage.setItem(key, value);
 
 


// function saveTasks(){
// var tasks = document.getElementsByClassName('hour')
// console.log(tasks)
// }
// // var value = taskHour


// localStorage.setItem(tasks, value)
// }
// console.log(localStorage)
// // localStorage.getItem(tasks, value)






// console.log(taskHour)
// console.log({taskAreaTask});
// console.log(currentHour);
