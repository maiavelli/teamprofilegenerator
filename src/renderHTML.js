const generateTeam = (team) => {
    console.log(team);

    //empty array to push html elements into
    const htmlElements = [];

    //function to create html element for manager
    const generateManager = manager => {
        console.log(manager);
        let managerHTML = `
            <div class = "column is-one-third ">
                <div class = "card">
                    <header class = "card-header has-background-primary-dark">
                    <span class = "icon"> <i class="fa-solid fa-mug-hot"></i> </span>
                    <p class = "card-header title">${manager.name}</p>
                    </header>

                    <div class = "card-content">
                        <div class = "content">
                            <ul>
                                <li> ID: ${manager.id} </li>
                                <li> Email: <a href = "mailto:${manager.email}">${manager.email}</a></li>
                                <li> Office Number: ${manager.officeNumber} </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;

        htmlElements.push(managerHTML);
    };

    //function to create html element for engineer
    const generateEngineer = engineer => {
        console.log(engineer);
        let engineerHTML = `
            <div class = "column is-one-third ">
                <div class = "card">
                    <header class = "card-header has-background-primary">
                    <span class = "icon"> <i class="fa-solid fa-glasses"></i> </span>
                    <p class = "card-header title">${engineer.name}</p>
                    </header>

                    <div class = "card-content">
                        <div class = "content">
                            <ul>
                                <li> ID: ${engineer.id} </li>
                                <li> Email: <a href = "mailto:${engineer.email}">${engineer.email}</a></li>
                                <li> GitHub: ${engineer.github} </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;

        htmlElements.push(engineerHTML);
    };

        //function to create html element for intern
        const generateIntern = intern => {
            console.log(intern);
            let internHTML = `
                <div class = "column is-one-third ">
                    <div class = "card">
                        <header class = "card-header has-background-primary-light">
                        <span class = "icon"> <i class="fa-solid fa-graduation-cap"></i> </span>
                        <p class = "card-header title">${intern.name}</p>
                        </header>

                        <div class = "card-content">
                            <div class = "content">
                                <ul>
                                    <li> ID: ${intern.id} </li>
                                    <li> Email: <a href = "mailto:${intern.email}">${intern.email}</a></li>
                                    <li> School: ${intern.school} </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            htmlElements.push(internHTML);
};

    //create a loop for all of the employees
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateIntern(team[i]);
        }
    }

    // return html blocks
    return htmlElements.join('');
};


module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang = "en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial scale=1">
            <title> Team Profile </title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans&display=swap">
            <script src="https://kit.fontawesome.com/7afa7fcea5.js" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">  
        </head>
    
        <body>
            <section class = "hero has-background-primary-dark mb-3">
                <div class = "hero-body has-text-centered">
                    <h1 class = "title is-1">My Team</h1>
                </div>
            </section>

            <section class = "columns is-centered is-multiline"> 
                ${generateTeam(team)}
            </section>
        </body>
    </html>
    `  
};

