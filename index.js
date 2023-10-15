const jest = require('jest')
const inquirer = require('inquirer')
const fs = require('fs');
//const { log } = require('console');

inquirer
.prompt([
    {
        type: 'list',
        message: 'what shape would you like your logo to be?',
        choices: ['square', 'circle', 'triange'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'enter the name of the color you want your shape to be',
        name: 'shapeColor',
    },
    {   
        type: 'input',
        message: 'enter the name of the color you want your logo text to be',
        name: 'textColor',
    },
    {   
        type: 'input',
        message: 'type the three characters you want in your logo',
        name: "monogram",
    },
    ])

    .then(function(userInput);
        console.log(userInput);
        fs.writeFile("logo.svg", generateVector(userInput),err =>
        err ? console.log(err) : console.log("What a nice logo!"))
    )

    function renderVectorShape(shape){
        if (userInput.shape === "square"){
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <rect x="90" y="40" width="120" height="120" fill="${shapeColor}" />
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${monogram}</text>
          
          </svg>`
        } if (userInput.shape === "circle"){
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <circle cx="150" cy="100" r="80" fill="${userInput.shapeColor}" />
            
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${userInput.textColor}">${userInput.monogram}</text>
            
            </svg>`
        }
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 18 244, 182 56, 182" fill="${userInput.shapeColor}" />
      
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${userInput.textColor}">${userInput.monogram}</text>
      
      </svg>`
    }

function generateVector(userInput){
console.log(userInput);
return`${renderVectorShape(userInput.shape)}`
}

module.export = generateVector