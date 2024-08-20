$(function () {

  var hoursEl = $('#hours');

  for (i = 0; i < 9; i++) {
    var divEl = $('<div>')
    var textArea = $('<textarea>')
    var button = $('<button>')
    var iEl = $('<i>')
    var hour = dayjs().hour(i + 9).minute(0)
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
    if (hour.isBefore(currentHour, 'h')) {
      divEl.addClass('past')
    } else if (hour.isSame(currentHour, 'h')) {
      divEl.addClass('present')
    } else {
      divEl.addClass('future')
    }

    // Adding compenents to the container
    divEl.append(hourLabel, textArea, button)
    hoursEl.append(divEl)

    //Event listener to save the info in the text boxes to localstorage
    button.on('click', function () {
      var todo = $(this).closest('.time-block').find('textArea').val()
      console.log(todo)
      var todoID = $(this).closest('.time-block').attr('id')
      console.log(todoID)
      localStorage.setItem(todoID, todo)
    })

    //Renders and keeps the info in the text boxes after refreshing the page
    divEl.each(function () {
      var todoID = $(this).attr('id')
      todos = localStorage.getItem(todoID)
      $(this).find('textarea').val(todos)
    })



  }

  // Displays the current day on the html
  var dayEl = $('#currentDay')
  var currentDay = dayjs().format('ddd, MMM DD, YYYY');
  dayEl.text(currentDay)
});


