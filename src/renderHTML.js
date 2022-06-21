const fs = require('fs');

const generateTeam = (team) => {
    console.log(team);

    //empty array to push html elements into
    const htmlElements = [];

    //function to create html element for manager
    const generateManager(manager) {
        console.log(manager);
        let managerHTML = `
        <div class = "card">
            <header class = "card-header"
            <span class = "icon">
                <i class="fa-solid fa-mug-hot"></i>
            </span>
                <p class = "card-header title">
                ${manager.name}
                </p>
            </header

            <div class = "card-content">
                <div class = "content">
                    <ul>
                        <li> ID: ${manager.id} </li>
                        <li> email: <a href = "mailto:${manager.email}">${manager.email}</a> 1</li>
                        <li> office number: ${manager.officeNumber} </li>
                    </ul>
                </div>
        `;

        htmlElements.push(managerHTML);
    };

    //function to create html element for engineer
    const generateEnginer(engineer) {
        console.log(engineer);
        let engineerHTML = `
        <div class = "card">
            <header class = "card-header"
            <span class = "icon">
                <i class="fa-solid fa-glasses"></i>
            </span>
                <p class = "card-header title">
                ${engineer.name}
                </p>
            </header

            <div class = "card-content">
                <div class = "content">
                    <ul>
                        <li> ID: ${engineer.id} </li>
                        <li> email: <a href = "mailto:${engineer.email}">${engineer.email}</a> 1</li>
                        <li> github: <a href = "https://github.com/${engineer.github}</a> ${engineer.github} </li>
                    </ul>
                </div>
        `;

        htmlElements.push(engineerHTML);
    };

        //function to create html element for intern
        const generateIntern(intern) {
            console.log(intern);
            let internHTML = `
            <div class = "card">
                <header class = "card-header"
                <span class = "icon">
                    <i class="fa-solid fa-graduation-cap"></i>
                </span>
                    <p class = "card-header title">
                    ${intern.name}
                    </p>
                </header
    
                <div class = "card-content">
                    <div class = "content">
                        <ul>
                            <li> ID: ${intern.id} </li>
                            <li> email: <a href = "mailto:${intern.email}">${intern.email}</a> 1</li>
                            <li> school: ${intern.school} </li>
                        </ul>
                    </div>
            `;

            htmlElements.push(internHTML);
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
            <section class = "hero is-primary">
                <div class = "hero-body has-text-centered">
                    <h1 class = "title is-1">My Team</h1>
                </div>
            </section>

            <section> 
            ${generateTeam(team)}
            </section>
        </body>
    </html>
    `

    
}

const generateManager = manager