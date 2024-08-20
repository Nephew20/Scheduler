// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

  var hoursEl = $('#hours');
  
  for(i=0; i<9; i++) {
    var divEl = $('<div>')
    var textArea = $('<textarea>')
    var button = $('<button>')
    var iEl = $('<i>')
    var hour = dayjs().hour(i+9).minute(0)
    var currentHour = dayjs()

    console.log('this works')

    //Text box for the days
    textArea.addClass('col-8 col-md-10 description').attr('rows', '3')
    
    //Save Button
    button.addClass('btn saveBtn col-2 col-md-1').attr('aria-label', 'save')

    iEl.addClass('fas fa-save').attr('aria-hidden', 'true')
    
    //Container for the text box, button and hour label
    divEl.addClass('row  time-block hour text-center ps-10').attr('id', hour.format('h A'))
    

    //Hour label
    var hourLabel = $('<div>').addClass('col-2 col-md-1 hour text-center').text(hour.format('h A'))

    button.append(iEl)

    //Time Comparison using dayJs
    if (hour.isBefore(currentHour, 'h')){
       divEl.addClass('past')
     } else if (hour.isSame(currentHour, 'h')) {
       divEl.addClass('present')
     } else {
       divEl.addClass('future')
     }
    
    // Adding compenents to the container
    divEl.append(hourLabel, textArea, button)
    hoursEl.append(divEl)
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  button.on('click', function () {
  
    localStorage.setItem(hour.format('h A'), textArea.val())
  })
}
  
  
  

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
  // Displays the current day on the html
  var dayEl = $('#currentDay')
  var currentDay = dayjs().format('ddd, MMM DD, YYYY');
  dayEl.text(currentDay)
});


