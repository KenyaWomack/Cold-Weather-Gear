alert("Hello Hikers");
console.log("Where is the console?");
document.write("WELCOME TO THE COLD WEATHER GEAR PAGE!!!");

function greetUser(){let usersName = prompt("What is your name?");
document.write("Hello" + usersName);
return usersName;
}

let userInput = prompt("Pick a number betweem 1 & 10");
console.log(userInput);

let myNumber = 7;

function numberGuess(){if (userInput == myNumber){
    document.write("You won the prize!");
} else if (userInput > myNumber){
    document.write("A little too high");
} else if (userInput < myNumber){
    document.write("A tad bit too low");
} else {
    document.write("That's somewhere in the stratosphere!");
}
}

console.log("Out of the logic");

let myNumber = 5

for (let i = 0; i< myNumber; i++){
    document.write ('<p> https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80')</p>
}
