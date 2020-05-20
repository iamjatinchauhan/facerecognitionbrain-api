const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      }
    }
});


const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res) => {res.send('it is working!');})
app.post('/Signin', signin.handleSignin(db, bcrypt))
app.post('/register',(req, res) => {register.handleRegister(req, res, db, bcrypt) }) //dependencies injection
app.get('/profile/:id', (req,res) => {profile.handleProfileGet(req, res, db)})
app.put('/image', (req,res) => {image.handleImage(req, res, db)})
app.post('/imageurl', (req,res) => {image.handleApiCall(req,res)})

app.listen(process.env.PORT || 3000, () => {   //listens server request localhost:3000
    console.log(`Example app listening on port ${process.env.PORT}`);
})


/*          ROUTES

/   -->   res = this is working
/Signin --> POST   success/fail         (used POST as https, hidden from man in the middle attack)
/register   --> POST = user
/profile/:userId    --> GET = user
/image  --> PUT --> user                (return updated of some sort. like picture post)

*/

/*
req. params. An object containing parameter values parsed from the URL path. 
For example if you have the route /user/:name , then the "name" from the URL path wil 
be available as req.params.name .

*/