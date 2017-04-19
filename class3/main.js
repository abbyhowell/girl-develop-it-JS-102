var unicorns;

function loadJSON(file, callback) {
  var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
  xobj.open('GET', file, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
     // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
     callback(xobj.responseText);
    }
  };
  xobj.send(null);
}


function getRandomThing(array) {
  var randomNumberBetween0And1 = Math.random();
  var highestNumber = array.length;
  var randomInteger = Math.floor(
    randomNumberBetween0And1 * highestNumber
  );
  return array[randomInteger];
}

function getImage() {
  var img = document.createElement('img');
  var unicorn = getRandomThing(unicorns);
  img.src = unicorn.svg.url;
  return img;
}

function handleClick(event) {
  if (event.target.childElementCount > 0) {
    return;
  }
  var today = new Date().getDate();
  if (event.target.innerHTML > today) {
    return;
  }
  var img = getImage();
  event.target.appendChild(img);
}

function getDay(num) {
  var day = document.createElement('div');
  day.classList.add('day');
  day.innerHTML = num;
  day.addEventListener('click', handleClick);
  return day;
}

function drawCalendar() {
  var container = document.getElementsByClassName('container')[0];
  var year = new Date().getFullYear();
  var month = new Date().getMonth() + 1;
  var daysInMonth = new Date(year, month, 0).getDate();

  for (var i = 1; i <= daysInMonth; i ++) {
    var day = getDay(i);
    container.appendChild(day);
  }
}

function getUnicornsThenDrawCalendar() {
  loadJSON('unicornData.json', function(data) {
    unicorns = JSON.parse(data).payload;
    drawCalendar();
  });
}

getUnicornsThenDrawCalendar();
