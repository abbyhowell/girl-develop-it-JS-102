function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

function getCuteness() {
  httpGetAsync('https://www.reddit.com/r/aww/top.json', function(data) {
    var data = JSON.parse(data);
    var cutePosts = data.data.children;
    console.log(cutePosts);
  });
}

var button = document.getElementById('clickSpot');

button.addEventListener('click', getCuteness);
