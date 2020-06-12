# README

## Musiccamp

Musiccamp is a music app for independent artists who want their music seen by the world, but do not have the means to do it because they are not part of a big label or haven't yet achieved fame. Musiccamp allows users to listen to the music and support the artist, this way the artist can continue to make music. 


Link to site:

* https://musiccamp.herokuapp.com/

Technologies used:

* Rails:
  * Rails is used as the backend for this project responsible for handling the models and the controllers for the artists, albums and songs created by a user. Rails also handles the creation of sessions which allows user to sign in and out of the site safely.
* PostgreSQL:
  * PostgreSQL is responsible for handling the queries made by a user. A user can browse for an specific album, song or user and the information will be returned so that it can be displayed in the frontend.
* React:
  * React is used as the frontend for this project and is responsible for the views part. React components load based on the information received from the backend so it can be displayed to the user.
* CSS:
  * CSS is used for the styling part of the views pages.
  
* AWS:
  * Aws contains all the music files, and photos of the app, so they don't have to be stored locally.
  
-------

## Challenges and solutions

* The most challenging part of the project was the use of asynchronous functions to fetch data. I avoided this, by displaying a message that the data was being loaded and once there data was fetched, it would appear on the page. Asynchronous functions are also used to manipulate data on the main page and make it re-render so that the page has a dynamic look. 


