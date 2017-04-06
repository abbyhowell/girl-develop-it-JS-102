var students = [
  'Anne',
  'Shayn',
  'Stephanie',
  'Suba',
  'Kelly',
  'Goshman',
];
function randomStudent() {
  var randomNumberBetween0And1 = Math.random();
  var highestNumber = students.length;
  var randomStudentIndex = Math.floor(
    randomNumberBetween0And1 * highestNumber
  );
  return students[randomStudentIndex];
}

var button = document.getElementById('clickSpot');

button.addEventListener('click', function() {
  var heading = document.getElementById('heading');
  heading.innerHTML = randomStudent().name;
});
