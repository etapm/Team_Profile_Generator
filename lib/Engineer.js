// Import the Employee constructor
const Employee = require("./employee");

// Define the Engineer constructor, which extends the Employee constructor
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // Call the Employee constructor using super()
    super(name, id, email);

    // Set the github property
    this.github = github;
  }

  // Define a method to get the github property
  getGithub() {
    return this.github;
  }

  // Override the Employee method to return the string 'Engineer'
  getRole() {
    return "Engineer";
  }
}

// Export the Engineer constructor
module.exports = Engineer;
