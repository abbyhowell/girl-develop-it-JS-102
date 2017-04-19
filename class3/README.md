The goal for today's class is to make an advent calendar with HTML, CSS,
and JavaScript. Each day of the month, when clicked, reveals a photo (or a link
or some other delight).


Search the web for photo apis.

1. Write a function that puts 31 boxes inside a container box.
2. Instead of 31 days, how about the number of days in the current month?
  http://stackoverflow.com/a/1184359/2801117
3. Write the number of each date inside each month.
4. When a date is clicked, display an image inside it.
5. How do you figure out which date is today? http://stackoverflow.com/a/12845130/2801117
6. Only reveal cards whose date has already passed.


More options for your project:

* Make a matching game (once two boxes are clicked, check to see if they have the same image, and if not, flip them back over.)

* Make a clueless-style outfit generator (three boxes on top of each other for
  the different parts of the outfit: each box cycles through an array of pictures,
  clicking switches that picture)

* Instead of spending a lot time making a list of photos, maybe there is a photo
   api you can use. I searched the web for photo apis and used this sample one at https://developers.gettyimages.com/en/trytheapi.html. I saved the response
   in a file called apiResponse.json. I figure I can load its contents with an
   XMLHttpRequest:
   http://stackoverflow.com/a/34579496/2801117.
