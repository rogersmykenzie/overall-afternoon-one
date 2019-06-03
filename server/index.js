const express = require('express'); //Our server framework
const massive = require('massive'); //Connects our db to our server
const controller = require('./controller'); //Imports our controller functions
require('dotenv').config(); //Allows us to use .env

const app = express(); //app is our actual server

massive(process.env.CONNECTION_STRING).then(db => { //We connect to our database and then...
    app.set('db', db); //We store that connection to our database for late
    console.log("Database Connected") //Log to the console "Database Connected"
})

app.use(express.json()); //This allows us to use req.body

app.post('/api/song', controller.addSong) //An endpoint. When a post request is made here...
                                          //We run the addSong function

const {SERVER_PORT} = process.env; //We get the SERVER_PORT variable from .env

app.listen(SERVER_PORT, () => console.log(`Listening on Port ${SERVER_PORT}`)); //Here we actually run our server