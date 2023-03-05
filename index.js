const inquirer = require("inquirer");

// Prompt the user for the team manager's information
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is the team manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the team manager's employee ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the team manager's email address?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the team manager's office number?",
    },
  ])
  .then((answers) => {
    // Store the team manager's information in an object
    const manager = {
      name: answers.name,
      id: answers.id,
      email: answers.email,
      officeNumber: answers.officeNumber,
    };

    // Do something with the manager object, such as pass it to a function to continue building the team
  });
