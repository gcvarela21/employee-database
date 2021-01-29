// These are Require Dependencies
const mysql = require("mysql");
const express = require("express");
const fs = require("fs");
const path = require('path');

// Initializing the express app
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
// needed for PUT POST requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//// include routes for local host to access on the browser
//require("")(app);

///// BELOW connect to my work bench sql data base ////////////////
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "task_saver_db"
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });

  ///// ABOVE connect to my work bench sql data base ////////////////
  
  require('');










// Setup listener and error catch (needs to be at the end of the js file)
app.listen(PORT, function(error) {
    if (error) {
        console.log('Something has gone wrong', error)
    } else {
        console.log("app/express is listening on PORT: " + PORT);
    }
}); 

