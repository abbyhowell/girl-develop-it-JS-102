// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/tarotFigures", function (request, response) {
  response.send(tarotFigures);
});


// Simple in-memory store for now
var tarotFigures = [
  {
    name: "The Fool",
    image: "https://cdn.glitch.com/4dba94c1-c9a7-4496-a0cc-2034ef465575%2Fthe-fool-tarot.jpg?1491444210655",
    meaning: "New Beginnings, Optimism, Trust",
    description: "The Fool is a journeyer of life, who sets out on his grand adventure without a map, trusting that life will lead him in right direction and everything will turn out splendidly! He represents the adventurous, joyful and carefree spirit within all of us.",
  },
  {
    name: "The Magician",
    image: "https://cdn.glitch.com/4dba94c1-c9a7-4496-a0cc-2034ef465575%2Fthe-magician-tarot.jpg?1491444216253",
    meaning: "Manifestation, Personal Power, Creativity",
    description: "The Magician tarot card appears to remind you that you have the power, skill and focus to create a successful and meaningful life for yourself. Often, we can feel powerless in our own lives and believe that success and achievement are reserved for those who are driven and goal-oriented. However, the magician is here to tell us that we all have the ability to tap into that focused, creative energy, even if we are not the go-getter type.",
  },
  {
    name: "The High Priestess",
    image: "https://cdn.glitch.com/4dba94c1-c9a7-4496-a0cc-2034ef465575%2Fthe-high-priestess-tarot.jpg?1491444214335",
    meaning: "Inaction, Going Within, The Subconscious",
    description: "The High Priestess tarot card is one of the more mystifying cards of the Major Arcana, full of secrets and mysteries as she beckons you to explore the unknown depths of your soul. We all have a rich, deep, dark inner landscape which we call the subconscious and unconscious and it is through the exploration of these levels of consciousness that we find solutions, insights and inspiration.",
  },
  {
    name: "The Empress",
    image: "https://cdn.glitch.com/4dba94c1-c9a7-4496-a0cc-2034ef465575%2Fthe-empress1.jpg?1491444208004",
    meaning: "Creativity, nurturing and abundance!",
    description: "When you look at The Empress, you can tell right away that she is one laid back lady! Her relaxed posture and the stars around her head suggest that she is cool and calm – perhaps even a little “spaced out”. The trees and wheat that surround her are growing without her having to strive and sweat – she takes it easy while nature unfolds around her.",
  },
  {
    name: "The Emperor",
    image: "https://cdn.glitch.com/4dba94c1-c9a7-4496-a0cc-2034ef465575%2Fthe-emperor-tarot.jpg?1491444205630",
    meaning: "Structure, Stability, Rules and Power",
    description: "The Emperor is the fifth Major Arcana card in the Tarot and he is confident, courageous, grounded and knows exactly who he is. While he enjoys the structure of a well laid plan and the stability of a strong will, the Emperor isn’t as boring and rigid as one might initially assume. The Emperor is a rebel at heart, one who may go against the grain of society and make his own rules to follow, rather than someonelse’s.",
  },
  {
    name: "The Hierophant",
    image: "https://cdn.glitch.com/4dba94c1-c9a7-4496-a0cc-2034ef465575%2Fthe-hierophant-tarot.jpg?1491444212534",
    meaning: "Institutions, tradition, society and its rules",
    description: "The Hierophant represents the institutions and belief systems in our lives – school, church, corporate culture, patriarchy, consumerism, government – and the influence they have on us. The Hierophant tarot card can also represent society in general, with its expectations, rules and social script.",
  },
];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
