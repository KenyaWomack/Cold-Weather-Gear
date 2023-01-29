alert("Hello Hikers");
console.log("Where is the console?");
document.write("WELCOME TO THE COLD WEATHER GEAR PAGE!!!");

let usersName = prompt("What is your name?");
document.write("Hello" + usersName);

let userInput = prompt("How old are you?");

let userInput = prompt("Pick a number betweem 1 & 10");
console.log(userInput);

let myNumber = 7;

if (userInput == myNumber){
    document.write("You won the prize!");
} else if (userInput > myNumber){
    document.write("A little too high");
} else if (userInput < myNumber){
    document.write("A tad bit too low");
} else {
    document.write("That's somewhere in the stratosphere!");
}

console.log("Out of the logic");
