# employee-database

Manage your Company's Employees using Node, Inquirer, and MySQL

[**Walkthrough Video**](https://drive.google.com/file/d/1HQLdwwGpdxbT_BhZ5XMSdt34rIMZbL1V/view)

![Visual of the Terminal Table](https://github.com/gcvarela21/work_force.db/blob/main/referances/terminal.png?raw=true)
**You can find my project repository [Here](https://github.com/gcvarela21/work_force.db)**

## Table of Contents

* [Installation](#installation)
* [Summary](#summary)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

### Installation

[Node JS](https://nodejs.org/en/download/) needs to be installed on your computer.

**DEPENDANCIES:**

Step 1:
In order to install the necessary dependencies, open the console/terminal, and get inside project folder. Verify that The file folder contains the package.json file. This file declares what additional/necessary libraies are needed to run the program. Install with the following comand and move on to Step 5:

```javascript
npm install
```

Step 2:
If the package.json file isn't availbe then verify that you have Node JS on your computer by checking for the node version with the command:

```javascript
node -v
```

Step 3:
The response should be or simmilar to:

```javascript
v15.2.0
```

Step 4:
If Node.js has been verified skip to Step: . Else, intstall Node.JS on your computer by visiting the [node webpage](https://nodejs.org/en/download/) for the program download and follow the instructions for proper installation. Once Installed and verified open your project the project folder location us the command:

```javascript
npm init -y
```

This will create the package.json file.
Check the declared required files and install the acccordingly.
For Example"

Install all required dependacies with these commands:

```javascript
npm install inquirer

npm install mysql

npm install cli-table
```

Step 5:
Once your libraries are installed you will copy the text in schema.sql file and and paste it into MySQL WorkBench to create the data base.

```javascript
DROP DATABASE IF EXISTS Work_Force_DB;
CREATE DATABASE Work_Force_DB;
USE Work_Force_DB;

CREATE TABLE departments (
  id int NOT NULL,
  department_id int NOT NULL,
  department_name varchar(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id int NOT NULL,
  department_id int NOT NULL,
  role_id int NOT NULL,
  title varchar(30) NOT NULL,
  salary decimal(10, 2) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE staff (
  id int NOT NULL,
  department_id int NOT NULL,
  department_name varchar(30) NOT NULL,
  role_id int NOT NULL,
  title varchar(30) NOT NULL,
  salary decimal(10, 2) NOT NULL,
  employee_id int NOT NULL,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  PRIMARY KEY (id)
);


SELECT * FROM  department;
SELECT * FROM  roles;
SELECT * FROM  staff;
```

Step 6: Using the import wizzard inside the WorkBench import the csv files to each respective table.

Once Complete run the following command to start the application.

```javascript
npm server.js
```

## Usage

Once the file has been run through Terminal the user will be prompted to ask some information about what you would like to do. Due to trial and many errors there is but one true option: "View Work Force". This selection will lead you to another prompt to select "view all".

```javascript
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
```

The viewAll(); displays the largest table of all 65 employees with all details.

```javascript
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
});
}
```

**You can find my project repository [Here](https://github.com/gcvarela21/work_force.db)**

### License

This project is licensed under:
MIT

### Contributing

```javascript
// There are no contributions at this time
```

### Tests

In order to test open the console and run the following:

```javascript
// There is no test at this time
```

### Questions

If you have any questions contact me on [GitHub](https://github.com/gcvarela21) or contact:
Gloria Varela at varela_gloria@yahoo.com
