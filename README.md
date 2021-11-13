# Canopus
## Description 
Canopus was developed to help users know the state of the night sky in order to know if current conditions are favorable for seeing space objects. Users can search cities and then recall their searches in the history. There is also a newsletter sign up available to them.

## Table of Contents
  * [Installaition](#installation)
  * [Heroku App](#herokuapp)
  * [Featurs](#features)
  * [GitHub Repository](#githubrepository)
  * [Future Development](#futuredevelopment)
  * [Creator](#creator)
  * [Questions](#questions)

### Installation:
You can find this app deployed on Heroku [here.](https://github.com/krysmit/canopus)

If you want to run this project locally, the following must be installed on the command line:
* Package Manager - npm
* Express.js
* Nodemailer.js
* Nodemon
* Create a .env file and use crowdsource_db the DB Name.
* Log into mysql using "mysql -u root -p" and source the schema.
* Seed locally using "seeds/seed.js".
* Run the server from server.js using nodemon and you will find the locally deployed site running on port 3001

### Deployed Heroku App
https://github.com/canopus

![sign in page](./pictures/signin.jpg)
![search page](./pictures/search.jpg)
![history page](./pictures/history.jpg)

### Feautures: 
This application uses Nodemailer.js to capture a user's email and send an automatic reply. A RESTful API is in place when the user sets up a new profile and is able to log out and back in again. Sequalize and MySQL are used together to create the database that the login information is saved in.


### Future Development 
In the future, I would plan to build out the information brought in (moon phase, sunset time, etc.) and better define the state of the sky for viewing space objects. I'd also like to get the email entered for the newsletter to be saved and used to send a real newsletter.

### Github Repository
https://github.com/krysmit/canopus

### Deployed Heroku App
https://github.com/canopus

### Creator
Krystyn Smith (https://github.com/krysmit)