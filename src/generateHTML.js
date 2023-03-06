// Create Manager card
function generateManager(manager) {
  return `
      <div class="col-4 mt-4">
        <div class="card h-100">
          <div class="card-header">
            <h3>${manager.name}</h3>
            <h4>Manager</h4>
            <i class="material-icons">content_paste</i>
          </div>
          <div class="card-body">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.officeNumber}</p>
          </div>
        </div>
      </div>`;
}

// Create Engineer card
function generateEngineer(engineer) {
  return `
      <div class="col-4 mt-4">
        <div class="card h-100">
          <div class="card-header">
            <h3>${engineer.name}</h3>
            <h4>Engineer</h4>
            <i class="material-icons">laptop_mac</i>
          </div>
          <div class="card-body">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
          </div>
        </div>
      </div>`;
}

// Create Intern card
function generateIntern(intern) {
  return `
      <div class="col-4 mt-4">
        <div class="card h-100">
          <div class="card-header">
            <h3>${intern.name}</h3>
            <h4>Intern</h4>
            <i class="material-icons">assignment_ind</i>
          </div>
          <div class="card-body">
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="school">School: ${intern.school}</p>
          </div>
        </div>
      </div>`;
}

// Generate HTML page
function generateHTML(data) {
  let pageArray = [];

  // Loop through employee data and add appropriate card
  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    switch (role) {
      case "Manager":
        pageArray.push(generateManager(employee));
        break;
      case "Engineer":
        pageArray.push(generateEngineer(employee));
        break;
      case "Intern":
        pageArray.push(generateIntern(employee));
        break;
      default:
        break;
    }
  }

  // Join array of card strings
  const employeeCards = pageArray.join("");

  // Generate final HTML page
  return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Team Profile</title>
          <link rel="stylesheet" href="style.css">
        </head>
        <body>
          <header>
            <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1">Team Profile</span>
              </nav>
              </header>
              <main>
              <div class="container">
              <div class="row justify-content-center" id="team-cards">
              ${employeeCards}
              </div>
              </div>
              </main>
              <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
              <script src="https://cdn.jsdelivr.net/npm/bs-custom-file-input/dist/bs-custom-file-input.min.js"></script>
              <script src="index.js"></script>
              </body>
              </html>
              `;
}

module.exports = generateHTML;
