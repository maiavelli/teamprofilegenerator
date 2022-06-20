const fs = require('fs');

function newHTML(data) {
    let head = 
    `<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial scale=1">
        <title> ${data.managerName} Team Profile </title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans&display=swap">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    </head>
    
    <section class = "hero is-primary">
        <div class = "hero-body has-text-centered">
            <h1 class = "title is-1">My Team</h1>
        </div>
    </section>`
}