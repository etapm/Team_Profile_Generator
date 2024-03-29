// create the html for engineers
const generateEngineer = (engineer) => {
  return `
  <!-- Engineer info-->
  <div class="card" style="width: 20rem">
    <div class="card-body">
      <h3 class="card-title text-center" id="engineer-name">
        ${engineer.getName()}
      </h3>
      <h5 id="engineer-role" class="text-center">
      <span class="material-icons md-24">engineering</span> ${engineer.getRole()}
      </h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" id="engineer-id">ID: ${engineer.getId()}</li>
      <li class="list-group-item" id="engineer-email">Email: 
        <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
      </li>
      <li class="list-group-item" id="engineer-github">Github: 
        <a href="https://github.com/${engineer.getGithub()}" target="_blank"> ${engineer.getGithub()}
        </a>
      </li>
    </ul>
  </div>
  `;
};

// create the html for interns
const generateIntern = (intern) => {
  return `
  <!-- Intern info -->
  <div class="card" style="width: 20rem">
    <div class="card-body">
      <h3 class="card-title text-center" id="intern-name">
        ${intern.getName()}
      </h3>
      <h5 id="intern-role" class="text-center">
      <span class="material-icons md-24">school</span> ${intern.getRole()}
      </h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" id="intern-id">ID: ${intern.getId()}</li>
      <li class="list-group-item" id="intern-email">Email: 
        <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
      </li>
      <li class="list-group-item" id="intern-school">School: ${intern.getSchool()}</li>
    </ul>
  </div>
  `;
};

// create the manager html
const generateManager = (manager) => {
  return `
  <div class="card" style="width: 20rem">
    <div class="card-body">
      <h3 class="card-title text-center" id="manager-name">
        ${manager.getName()}
      </h3>
      <h5 id="manager-role" class="text-center">
      <span class="material-icons md-24">supervisor_account</span> Manager
      </h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" id="manager-id">ID: ${manager.getId()}</li>
      <li class="list-group-item" id="manager-email">Email: 
        <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
      </li>
      <li class="list-group-item" id="manager-officeNumber">Office number: ${manager.getOfficeNumber()}</li>
    </ul>
  </div>
  `;
};

// create the team
const generateTeam = (team) => {
  const html = [];

  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );

  return html.join("");
};

// export function to generate entire page
module.exports = (team) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <!-- CSS libraries -->
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossorigin="anonymous"
      />
      <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
      />

      <!-- Custom CSS -->
      <link rel="stylesheet" href="style.css" />

      <title>Team Profile</title>
    </head>
    <body>
      <div class="container">
        <h1 class="display-1">The Magic Circle</h1>
      </div>

      <div class="container" id="card-container">
        <div>
          <div class="card-area mt-5 col-12 d-flex justify-content-center">
            ${generateTeam(team)}
          </div>
        </div>
      </div>
    </body>
  </html>`;
};
