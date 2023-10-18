const inquirer = require('inquirer');
const {writeFile} = require('fs/promises');
// const { log } = require('console');
const { Circle, Square, Triangle} = require("./lib/shapes")
const SVG = require("./lib/svg")
    return inquirer
        .prompt([
     {
        type: 'list',
        message: 'what shape would you like your logo to be?',
        choices: ['Square', 'Circle', 'Triangle'],
        name: 'shapeType',
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
        name: "message",
    },
    ])
    .then(({shapeType, shapeColor, textColor, message}) => {
       console.log("Shape type: " +shapeType);
        let shapeCreated;
        switch(shapeType){
            case "Square":
                console.log("This is a square");
                shapeCreated = new Square();
                break;
            case "Circle":
                shapeCreated = new Circle();
                break;
             default: 
                console.log("Triangle");
                shapeCreated = new Triangle();   
                break;
        }
        shapeCreated.setColor(shapeColor);
        console.log(shapeCreated);
        const svg = new SVG();
        svg.setText(message, textColor);
        svg.setShape(shapeCreated);
        console.log(svg);
        return writeFile("logo.svg", svg.render());
    }).then(()=>{
        console.log("Generating the logo.svg");
    }).catch((error) => {
        console.log(error);
        console.log("Something went wrong.");
    })

        
        // fs.writeFile("logo.svg", generateVector(userInput),err =>
        // err ? console.log(err) : console.log("success!"))
     

