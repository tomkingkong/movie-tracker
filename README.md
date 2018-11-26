## Movie Tracker

This project is working off the The Movie DB API (https://www.themoviedb.org/documentation/api)  
The idea of the project is to be able to sign in as a user and save favorite movies.

Using Postgres as a backend, we set up a separate client-side application (use create-react-app), to sit alongside this one.

### Collaborators
[Chris Boyen](https://github.com/chrisboylen "Chris Boyen")  
[Tom King](https://github.com/"tomkingkong")  
[Megan Haubelt](https://github.com/Haub "Megan Haubelt")

### Tech Used
React
Redux
Router
Jest/Enzyme

## Projeict Setup

* Clone down this repo and run `npm install`
[See postgresSETUP for database setup help](https://github.com/tomkingkong/movie-tracker/blob/master/postgresSETUP.md)
* Run `npm start` - visit `localhost:3000/api/users` - you should see a json response with a single user.

### Screenshots

<img src="https://raw.githubusercontent.com/tomkingkong/movie-tracker/master/src/images/hankstracker1.png" />
<img src="https://raw.githubusercontent.com/tomkingkong/movie-tracker/master/src/images/hankstracker2.png" />


### Functional Goals
* Pull most recent movies from MovieDB API.
* Display each movie on root index `/`
* Be able to sign in on page `/login` and redirect user to `/`
  * Flash "Email and Password do not match" - if password is incorrect
* Ability to create a user.
  * Flash "Email has already been used" - if email has been taken
* The user has the ability to sign out. 
* Each movie should be displayed with a favorite button.
* If the user is not signed in and clicks on a favorite button the user will be prompted with the request to create an account.
* Validate favorites before adding to db. Aka does that user already have the movie stored as favorites. There should be no duplicates. 
* If the user visits `/favorites` they should see a list of all their favorite movies.
* The user should be able to delete favorites from `/favorites` or `/`.
* Favorite movies should have a visual indication on `/`.

