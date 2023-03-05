// Importing Intern constructor from lib folder
const Intern = require("../lib/Intern");

// Testing if Intern object is created
test("creates an Intern object", () => {
  const intern = new Intern("Manuel", 46, "mannysemail@gmail", "UCD");

  expect(intern.school).toEqual(expect.any(String));
});

// Testing if getSchool() returns employee school
test("returns employee school", () => {
  const intern = new Intern("Manuel", 46, "mannysemail@gmail", "UCD");

  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});

// Testing if getRole() returns employee role
test("returns employee role", () => {
  const intern = new Intern("Manuel", 46, "mannysemail@gmail.com", "UCD");

  expect(intern.getRole()).toEqual("Intern");
});
