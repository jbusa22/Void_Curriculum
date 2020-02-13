// Functions Exercise
// 1. Write a function that takes in an array of numbers and returns their average

// 2. Write a function that takes in a number and returns in factorial (use an arrow function!)
//  (ex. factorial(3) returns 6)

var numbers = [2, 3, 5, 8, 10];



// JSON Exercise
// 1. Using this login info data write a function which return true if a given username and password are in the loginInfo array and a match
// 2. Make sure you feel comfortable using both the function keyword and arrow functions
    //a. try writing your solution with both methods
var loginInfo = [{username: "jack", password: "1234"}, 
                 {username: "chris", password: "iLovekittens"},
                 {username: "alexis", password: "iHateLiza"},
                 {username: "hannah", password: "functionsAreFun"},
                 {username: "liza", password: "myDogHatesSweaters"}
                ];
function loggedIn(login, name, pass) {
    for (var i = 0; i < login.length; i++) {
        var el = login[i];
        if(el.username === name && el.password === pass) {
            return true;
        }
    }
    return false;
}

var navbarItems = document.querySelectorAll(".navbar-item");

// TODO
// get starter files
// add slide for ===
// add slide for DOM
// come up with a useful excercise using eventlisteners and queryselector
// homework can be something like store json in a file with various keys like username
// age, etc and change the text color / other properties when the user either clicks a button or maybe even scrolls 
