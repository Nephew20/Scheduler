// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  var hoursEl = $('#hours');
  
  for(i=0; i<9; i++) {
    var divEl = $('<div>')
    var textArea = $('<textarea>')
    var button = $('<button>')
    var iEl = $('<i>')
    var time = dayjs().hour(i+9).minute(0).format('h A')
    var currentTime = dayjs()

    textArea.addClass('col-8' ,'col-md-10', 'description')
    textArea.attr('rows', '3')
    
    button.addClass(['btn', 'saveBtn', 'col-2', 'col-md-1'])
    button.attr('aria-label', 'save')

    iEl.addClass(['fas', 'fa-save'])
    iEl.attr('aria-hidden', 'true')
 
    divEl.addClass('row', 'time-block', 'col-2', 'col-md-1', 'hour', 'text-center', 'py-3')
    divEl.text(time)
     
    if (currentTime.isBefore(time, 'h')) {
      divEl.css('color', 'past')
    } else if (dayjs().isSame(time, 'h')) {
      divEl.css('color', 'present')
    } else if (dayjs().isAfter(time, 'h')) {
      divEl.css('color', 'future')
    }
    
    hoursEl.append(divEl)
    divEl.append(textArea)
    button.append(iEl)
    divEl.append(button)
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


