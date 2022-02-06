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

console.log($(".taskAreaTask").map(function () {
    
    Object.values($(this).attr("data-hour")).text=1
    

}))

/* need data-hour
** taskAreaTask input
** need local storage
** 
** getitem from local storage
** correspond that to the map items fro the getattribute so the html is the value of the object from localstorage
*/

$(".saveBtn").on("click", function (event) {
    event.preventDefault()
    var saveTask = $(this).siblings()[1].value
    //var value = JSON.stringify(taskAreaTask)
    var key = event.target.getAttribute('data-hour')
    console.log(key, event.target)
    localStorage.setItem(key, saveTask)
})
