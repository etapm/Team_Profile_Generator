// Import the Engineer constructor
const Engineer = require("../lib/engineer");

test("creates an Engineer object with a GitHub username property that is a string", () => {
  // Create an engineer object with a name, ID number, email address, and GitHub username
  const engineer = new Engineer("Edgar", 64, "etap@ucdavis.edu", "etapm");

  // Test that the engineer object has a GitHub username that is a string
  expect(engineer.github).toEqual(expect.any(String));
});

test("returns the GitHub username of an Engineer object using the getGithub() method", () => {
  // Create an engineer object with a name, ID number, email address, and GitHub username
  const engineer = new Engineer("Edgar", 64, "etap@ucdavis.edu", "etapm");

  // Test that the getGithub() method returns the engineer's GitHub username
  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});

test("returns the role of an Engineer object using the getRole() method", () => {
  // Create an engineer object with a name, ID number, email address, and GitHub username
  const engineer = new Engineer("Edgar", 64, "etap@ucdavis.edu", "etapm");

  // Test that the getRole() method returns "Engineer"
  expect(engineer.getRole()).toEqual("Engineer");
});
