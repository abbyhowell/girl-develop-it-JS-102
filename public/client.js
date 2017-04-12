// client-side js
// run by the browser each time your view template is loaded

$(function() {
  $.get('/tarotFigures', function(tarotFigures) { 
    dealCards(tarotFigures);
  });
});

function dealCards(tarotPersons) {
  var cardFrames = document.getElementsByClassName('card');

  for (var i = 0; i < cardFrames.length; i ++) {
    var card = cardFrames[i];
    var randomTarotImage = getRandomItem(tarotPersons);
    card.innerHTML = "<img class='image' src=" + randomTarotImage.image + "/>";
    card.addEventListener('click', function(event) {
      event.target.className = 'card--clicked';
    });
  }
}


function getRandomItem(myArray) {
  var randomNumberBetween0And1 = Math.random();
  var highestNumber = myArray.length;
  var randomIndex = Math.floor(
    randomNumberBetween0And1 * highestNumber
  );
  var numberOfThingsToReturn = 1;
  // remove the item from the array so it can't be used twice
  var randomItem = myArray.splice(randomIndex, numberOfThingsToReturn)[0];
  return randomItem;
  
}
