## Project Name
Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Project Idea
The project idea is to creating an asynchronous web app that send a request to Web API then the API response to that request with a temperature. After that the app send a post to our server with all data, then the server responds with all data that it has and dynamically update the UI.

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.

## Project setup requirements
•	Install node js from its official website “https://nodejs.org/” to my pc.
•	node express package has been installed through "npm i express" command from terminal.
•	node cors package has been installed through "npm i cors " command from terminal.
•	node body-parser package has been installed through "npm i body-parser " command from terminal.
•	Get APIKEY by creating account through https://openweathermap.org/

## Code Explanation – Server Side
•	Start the server by using “node server.js command from terminal.
•	The server has been assigned a port number 7100.
•	There is Get function that is used to get the data and return it to our endpoint.
•	There is POST function which will receive data and store it in our endpoint.

## Code Explanation – Client side
•	There are three global variables has been defined as the following
    const baseURL , const apiKey  and  const serverLink.
•	There is an Event listener has been created with a call back function.
•	There is a Async Post function that will post data to our server
•	There is a Async function called  generative function which rebuild the weblink that enable us 
    to query weather web api database.
•	Async function which will Updating the UI of the app dynamically,
