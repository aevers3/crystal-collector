# Crystal Collector

## The Challenge
Create a front-end game that tracks and adds to a user's score as they select crystals with hidden values. To win the game, the user's total score must match a random value without going over.

## The Solution
This app displays 4 crystals onscreen for the user. Each crystal has a randomly-assigned hidden value that will not change over the course of the game. When a crystal is selected, the value will be added to the user's score, which is also displayed onscreen. The target number will be displayed as well, but the user will need to deduce the hidden values of at least some of the crystals to ensure they land on the target number. If the score goes above the target number, the game is lost and a new game is started.

As an added feature, the images used for the crystals changes with each new game. This was accomplished by adding an array of local image URLs, from which 4 are randomly selected at the start of the new game. I implemented this feature to help signify changing crystal values at the start of a new game, and to make the page a bit more visually interesting.

Technologies used: HTML5, CSS3, JS, jQuery.

This app is currently deployed at https://aevers3.github.io/crystal-collector/.
