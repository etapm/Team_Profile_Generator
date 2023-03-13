// Import the Employee constructor
const Employee = require("./employee");

// Create a subclass of Employee called Intern
class Intern extends Employee {
  constructor(name, id, email, school) {
    // Call the parent constructor with super
    super(name, id, email);
    // Add the school property to the object
    this.school = school;
  }

  // Define a method to return the school
  getSchool() {
    return this.school;
  }

  // Override the getRole method to return "Intern"
  getRole() {
    return "Intern";
  }
}

// Export the Intern class
module.exports = Intern;
