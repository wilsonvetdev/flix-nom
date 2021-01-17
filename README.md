# Flix-Nom

This is a side project I did to practice using hooks since it is best practice now compared to using class components. 
The single page application allows a user to search for movies with the search field, and also allows add movies to a nomination list.
The nomination list is automatically saved to their browser, so even if they refresh or leave the page - the list stays on the browser until they remove the movies.

# Tech

* React(Components, Hooks)
* Semantic UI React for a little bit of styling
* localStorage for saving nomination list
* Heroku - deployment
* API - http://www.omdbapi.com/

# Set-Up

1. Clone this repo to your local machine -- git clone < git repository >
2. cd into the flix-nom repo
3. Run $ npm install -> installs required dependencies
4. Run $ npm start -> starts a server and the app should launch 

# Features

1. User is able to search for movies
2. User is able to add/remove movies to/from nomination list
3. Nomination list is automatically saved to localStorage
4. A banner pops up on the browser once there are five nominations
5. Updates to the search terms automatically updates the result list
6. A user can't nominate the same movie more than once
