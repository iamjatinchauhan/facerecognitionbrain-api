# facerecognitionbrain-api
Image Face Recognition application - Detect Faces in the given Image using machine learning API. 


## [Live Preview](https://smart-facerecognitionbrain.herokuapp.com/)
[![Demo1 - facerecognitionbrain](./demos/Demo1-facerecognitionbrain.gif)](https://smart-facerecognitionbrain.herokuapp.com/)


## To run this Project:
1.  Clone this repo
2.  Go to project directory
3.  Install dependencies - Run `npm install`
4.  Run app `npm start`


**This Repository is Back-end of Face Recognition Brain project, front-end for this project can be found [here](https://github.com/mrjatinchauhan/facerecognitionbrain)**

## Tools Used
- [ReactJs](https://reactjs.org/) javascript framework used for frontend
    ```
    npx create-react-app facerecognitionbrain
    cd facerecognitionbrain
    npm start
    ```
- [Tachyons](https://tachyons.io/) library used for design.
- [Tilt.js](https://www.npmjs.com/package/react-tilt) Animated objects library having lightweight parallax tilt effect.
    ```
    $   npm install –save react-tilt
    ```
- [Flaticon](https://www.flaticon.com/) vector icon is used.
- [Particle.js](https://vincentgarreau.com/particles.js/) Js library for Particles animated background.
    ```
    $   npm install react-particles-js
    ```
- [CSS3 Background Patterns Gallery](http://lea.verou.me/css3patterns/) using Madras css pattern .
- [Clarifai](https://docs.clarifai.com/api-guide/predict/images) Image Recognition API.
    ```
    $   npm install clarifai
    ```
- [Cors](https://www.npmjs.com/package/cors) for front-end and back-end connection.
    ```
    $   npm install cors
    ```
- [KnexJs](https://knexjs.org/#Installation-node) used for database connection with back-end.
    ```
    $   npm install knex --save
    #   Then add (adding a --save) flag:
    $   npm install pg
    ```
- [Bcrypt](https://www.npmjs.com/package/bcrypt-nodejs) for Password hashing.
- [NodeJs](https://nodejs.org/en/) for Backend Server so that it can run outside the browser. 
- [ExpressJs](https://expressjs.com/) web application framework on top of Node.js that provides a robust set of features for web.
- [PostgreSQL](https://www.postgresql.org/) is used for Handling Database.
- Web App deployed at [Heroku](https://heroku.com/)

#### Table made in Psql datbase
```SQL
-- create table users

CREATE TABLE users (
id serial PRIMARY KEY,
name VARCHAR(100),
email text UNIQUE NOT NULL,
entries BIGINT DEFAULT 0,
joined TIMESTAMP NOT NULL);


-- create table login

CREATE TABLE login (
id serial PRIMARY KEY,
hash varchar(100) NOT NULL,
email text UNIQUE NOT NULL);
```

## Contributing
Pull requests are welcome. Feel free to `fork` this repo.