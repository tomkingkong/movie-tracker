## Setup Postgresql

#### IMPORTANT: If you already have Postgresql on your computer for some reason, you will need to uninstall it
For information on how to do this read [this](https://postgresapp.com/documentation/remove.html)

#### What is Postgresql?
* PostgreSQL is a powerful, open source object-relational database system

#### Installation:
* Head over to [Postres.app](http://postgresapp.com/) to download and install PostgreSQL
* When you click `initialize`, you should now be able to see that postgreSQL is running
* To be able to use the command line tools, you will need to run the following commannd in your terminal to configure your $PATH `sudo mkdir -p /etc/paths.d && echo /Applications/Postgres.app/Contents/Versions/latest/bin | sudo tee /etc/paths.d/postgresapp`
* You will need to close your terminal window and re-open it for the changes to take effect
	
#### Creating our database
* Make sure you are in you `movie-tracker` project folder
* From the command line, run the following command to create a users database `psql -f ./database/users.sql`
* When you start up the server (`npm install` and `npm start`), you should now be able to visit `localhost:3000/api/users` and see the database with a single user (Taylor)
	
#### Press CMD-T to create a new tab in your terminal
* Type `psql`. This will get you into the interactive postgres terminal. From here you can run postgres and sql commands. You might get an error *psql: FATAL: database "username" does not exist* To resolve this error type *createdb 'somthing does not exist'*

#### [PSQL Commands](http://postgresguide.com/utilities/psql.html)
