
function getImage(src) {
  var img = document.createElement("img");
  img.src = src;
  return img;
}

function displayImage(container) {
  var image = getImage('/images/unicorn.jpg');
  container.appendChild(image);
}

function buildCalendar() {
  var container = document.getElementsByClassName('container')[0];
  for (var i = 1; i < 31; i ++) {
    var day = document.createElement('div');
    day.classList.add('day'); //add class so CSS gets applied

    container.appendChild(day); // put the box on the screen

    day.addEventListener('click', function() {
      displayImage(event.target); //when clicked, put an image inside
    });
  }
}

buildCalendar(); // when the page loads, call the function to build the calendar
