// var mysql = require("mysql");
// var inquirer = require("inquirer");




//////////////////////////////////////////////////////////////////////////////////////////
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
  
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
 function viewAll() {
  connection.query("SELECT * FROM staff", function (err, res) {

    var table = new Table({
        //You can name these table heads chicken if you'd like. They are simply the headers for a table we're putting our data in
        head: ["id", "department_id", "department_name", "role_id", "title", "salary", "employee_id", "first_name", "last_name"],
        //These are just the width of the columns. Only mess with these if you want to change the cosmetics of our response
        colWidths: [5, 10, 20, 10, 20, 10, 10, 10,10]
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

//////////////////////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////////////////////

//  SELECT * FROM work_force_db.staff;
// SELECT * FROM work_force_db.departments;
// SELECT * FROM work_force_db.roles;
// SELECT * FROM  department;
// SELECT * FROM  roles;
// SELECT * FROM  staff;



  // function editWorkForce() {
  //   inquirer
  //     .prompt({
  //       name: "action",
  //       type: "rawlist",
  //       message: "What you like to edit?",
  //       choices: [
  //         "Make changes to departments",
  //         "Make changes to Roles",
  //         "Make changes to Employess",
  //         "Start Over"
  //       ]
  //     })
  //     .then(function(answer) {
  //       switch (answer.action) {
  //       case "Make changes to departments":
  //           changeDepartment();
  //           break;
  
  //       case "Make changes to Roles":
  //           changeRoles();
  //           break;
        
  //       case "Make changes to Employess":
  //           changeEmployees();
  //           break;

  //       case "Start Over":
  //           launchWorkForce();
  //           break;
  //       }
  //     });
  // }






















  
///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
  function multiSearch() {
    var query = "SELECT artist FROM top5000 GROUP BY artist HAVING count(*) > 1";
    connection.query(query, function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].artist);
      }
      runSearch();
    });
  }
  
  function rangeSearch() {
    inquirer
      .prompt([
        {
          name: "start",
          type: "input",
          message: "Enter starting position: ",
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        },
        {
          name: "end",
          type: "input",
          message: "Enter ending position: ",
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        }
      ])
      .then(function(answer) {
        var query = "SELECT position,song,artist,year FROM top5000 WHERE position BETWEEN ? AND ?";
        connection.query(query, [answer.start, answer.end], function(err, res) {
          for (var i = 0; i < res.length; i++) {
            console.log(
              "Position: " +
                res[i].position +
                " || Song: " +
                res[i].song +
                " || Artist: " +
                res[i].artist +
                " || Year: " +
                res[i].year
            );
          }
          runSearch();
        });
      });
  }
  
  function songSearch() {
    inquirer
      .prompt({
        name: "song",
        type: "input",
        message: "What song would you like to look for?"
      })
      .then(function(answer) {
        console.log(answer.song);
        connection.query("SELECT * FROM top5000 WHERE ?", { song: answer.song }, function(err, res) {
          console.log(
            "Position: " +
              res[0].position +
              " || Song: " +
              res[0].song +
              " || Artist: " +
              res[0].artist +
              " || Year: " +
              res[0].year
          );
          runSearch();
        });
      });
  }
  
  function songAndAlbumSearch() {
    inquirer
      .prompt({
        name: "artist",
        type: "input",
        message: "What artist would you like to search for?"
      })
      .then(function(answer) {
        var query = "SELECT top_albums.year, top_albums.album, top_albums.position, top5000.song, top5000.artist ";
        query += "FROM top_albums INNER JOIN top5000 ON (top_albums.artist = top5000.artist AND top_albums.year ";
        query += "= top5000.year) WHERE (top_albums.artist = ? AND top5000.artist = ?) ORDER BY top_albums.year, top_albums.position";
  
        connection.query(query, [answer.artist, answer.artist], function(err, res) {
          console.log(res.length + " matches found!");
          for (var i = 0; i < res.length; i++) {
            console.log(
              i+1 + ".) " +
                "Year: " +
                res[i].year +
                " Album Position: " +
                res[i].position +
                " || Artist: " +
                res[i].artist +
                " || Song: " +
                res[i].song +
                " || Album: " +
                res[i].album
            );
          }
  
          runSearch();
        });
      });
  }

 
