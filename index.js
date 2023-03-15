// Required modules and classes
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

// Variables and constants
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateHTML = require("./src/generateHTML");

const teamArray = [];

// Prompt for adding a new employee
const startApp = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What type of employee would you like to add to your team?",
        name: "userInput",
        choices: [
          "Manager",
          "Engineer",
          "Intern",
          "No more team members are needed.",
        ],
      },
    ])
    .then(function (input) {
      switch (input.userInput) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        case "No more team members are needed.":
          generateTeam();
          break;
      }
    });
};

// Prompt for manager information
const addManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the manager's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the manager's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the manager's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNumber",
      },
    ])
    .then(function (answers) {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamArray.push(manager);
      console.log(manager);
      startApp();
    });
};

// Prompt for intern information
const addIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the intern's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the intern's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the intern's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the intern's school?",
        name: "school",
      },
    ])
    .then(function (answers) {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamArray.push(intern);
      console.log(intern);
      startApp();
    });
};

// Prompt for engineer information
const addEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the engineer's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the engineer's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the engineer's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the engineer's GitHub username?",
        name: "github",
      },
    ])
    .then(function (answers) {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamArray.push(engineer);
      console.log(engineer);
      startApp();
    });
};

// Generate HTML file with team information
const generateTeam = () => {
  // Check if output directory exists, create it if it doesn't
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  // Write team array to HTML file using generateHTML function
  fs.writeFileSync(outputPath, generateHTML(teamArray), "utf-8");
  console.log(`Team profile page has been generated at ${outputPath}`);
};

module.exports = generateHTML;

// Call startApp function to begin prompting user for input
startApp();
