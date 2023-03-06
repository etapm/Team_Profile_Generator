// link to page creation
const generateHTML = require("./src/generateHTML.js");

// team profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// node modules
const fs = require("fs");
const readline = require("readline");

// team array
const teamArray = [];

// start of manager prompts
const addManager = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Who is the manager of this team?", (name) => {
    if (!name) {
      console.log("Please enter the manager's name!");
      addManager();
      return;
    }

    rl.question("Please enter the manager's ID.", (id) => {
      if (isNaN(id)) {
        console.log("Please enter the manager's ID!");
        addManager();
        return;
      }

      rl.question("Please enter the manager's email.", (email) => {
        const valid = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(email);
        if (!valid) {
          console.log("Please enter a valid email!");
          addManager();
          return;
        }

        rl.question(
          "Please enter the manager's office number.",
          (officeNumber) => {
            if (isNaN(officeNumber)) {
              console.log("Please enter a valid office number!");
              addManager();
              return;
            }

            const manager = new Manager(name, id, email, officeNumber);
            teamArray.push(manager);
            console.log(manager);
            rl.close();
          }
        );
      });
    });
  });
};

const addEmployee = () => {
  console.log(
    "================= Adding employees to the team ================="
  );

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Please choose your employee's role", (role) => {
    if (!["Engineer", "Intern"].includes(role)) {
      console.log("Please choose a valid role!");
      addEmployee();
      return;
    }

    rl.question("What's the name of the employee?", (name) => {
      if (!name) {
        console.log("Please enter an employee's name!");
        addEmployee();
        return;
      }

      rl.question("Please enter the employee's ID.", (id) => {
        if (isNaN(id)) {
          console.log("Please enter the employee's ID!");
          addEmployee();
          return;
        }

        rl.question("Please enter the employee's email.", (email) => {
          const valid = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(email);
          if (!valid) {
            console.log("Please enter a valid email!");
            addEmployee();
            return;
          }

          if (role === "Engineer") {
            rl.question(
              "Please enter the employee's github username.",
              (github) => {
                if (!github) {
                  console.log("Please enter the employee's github username!");
                  addEmployee();
                  return;
                }

                const employee = new Engineer(name, id, email, github);
                teamArray.push(employee);
                console.log(employee);

                rl.question(
                  "Would you like to add more team members?",
                  (confirmAddEmployee) => {
                    if (confirmAddEmployee.toLowerCase() === "yes") {
                      addEmployee();
                    } else {
                      rl.close();
                      console.log(teamArray);

                      //generate HTML
                      const html = generateHTML(teamArray);

                      // create HTML file
                      fs.writeFile("./dist/team.html", html, (err) => {
                        if (err) {
                          console.log(err);
                          return;
                        }
                        console.log(
                          "File created! Check out team.html in the dist directory to see it."
                        );
                      });

                      // initialize app
                      const init = () => {
                        addManager();
                      };

                      init();
                    }
                  }
                );
              }
            );
          }
        });
      });
    });
  });
};
