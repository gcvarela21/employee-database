// These are Require Dependencies
const mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

///// BELOW connect to my work bench sql data base ////////////////
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "work_force_db"
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });

  ///// ABOVE connect to my work bench sql data base ////////////////


//////////////////////////////////////////////////////////////////////////////////////////
///////// Below is the Inquirer at Work  ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
function launchWorkForce() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View Work Force",
        "Start Over"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "View Work Force":
        viewWorkForce();
        break;
        case "Start Over":
          launchWorkForce();
          break;
      }
    });
}

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
function viewWorkForce() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like view?",
      choices: [
        "View Everything",
        "Start Over"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "View Everything":
          viewAll();
          break;

      case "Start Over":
          launchWorkForce();
          break;
      }
    });
}
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
function viewAll() {
connection.query("SELECT * FROM staff", function (err, res) {

  var table = new Table({
      //You can name these table heads chicken if you'd like. They are simply the headers for a table we're putting our data in
      head: ["id", "department_id", "department_name", "role_id", "title", "salary", "employee_id", "first_name", "last_name"],
      //These are just the width of the columns. Only mess with these if you want to change the cosmetics of our response
      colWidths: [5, 5, 20, 5, 20, 10, 10, 10,10]
  });

  // table is an Array, so you can `push`, `unshift`, `splice`
  for (var i = 0; i < res.length; i++) {
      table.push(
          [res[i].id, res[i].department_id, res[i].department_name, res[i].role_id, res[i].title, res[i].salary, res[i].employee_id, res[i].first_name, res[i].last_name],
      );
  }
  console.log(table.toString());
  // launchWorkForce();
});
}

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
function viewDepartment() {

}
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
function viewRoles() {

}
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
function viewEmployees() {

}
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
launchWorkForce();




///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
////////////// My Junk ///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//  SELECT * FROM work_force_db.staff;
// SELECT * FROM work_force_db.departments;
// SELECT * FROM work_force_db.roles;
// SELECT * FROM  department;
// SELECT * FROM  roles;
// SELECT * FROM  staff;



///////
          //"Edit Work Force"
      // case "Edit Work Force":
      //   editWorkForce();
      //   break;

        // "View Work Force by Department",
        // "View Work Force by Role",
        // "View Work Force by Employees",

      // case "View Work Force by Department":
      //     viewDepartment();
      //     break;

      // case "View Work Force by Role":
      //     viewRoles();
      //     break;
      
      // case  "View Work Force by Employees":
      //     viewEmployees();
      //     break;

