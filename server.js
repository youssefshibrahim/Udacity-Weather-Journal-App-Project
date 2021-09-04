// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Gloal variables
const serverPort = 7100;

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

// Require body-parser
const bodyParser = require('body-parser');

// Cors for cross origin allowance
const cors = require('cors');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// GET function based on arrow function that get and return the data to our project data object
app.get('/receiveAllData', (req, res) => res.send(projectData));

//POST Route function which will receive data and store it in our projectData.
app.post('/sendAllData', (req, res) => {
    projectData.date = req.body.date;
    projectData.newFeel = req.body.newFeel;
    projectData.temp = req.body.temp;
    res.end();
});

// Server listen function that show the server is running with our specified port.
app.listen(serverPort, () => {
    console.log(`My Serevr Is Running Through Port ${serverPort}`);
});

