let userPoints = 0;
let user = prompt("What can I call you?");

while (!user) {
  user = prompt("Inorder to play the game, You have to tell your name!");
}

alert("Hello there " + user + "! Welcome to my guessing game");

let question = confirm(
  "Do you really think you know me that well? Let's see.."
);
if (question == true) {
  alert("I like your confidence, lets gooooo!");
} else {
  alert("WHAT ARE YOU DOING HERE THEN?");
}

//question one
let favouriteplace = prompt(
  "Which is my favourite place to visit?"
).toLowerCase();
if (
  favouriteplace == "london" ||
  favouriteplace == "switzerland" ||
  favouriteplace == "japan"
) {
  alert("WELL DONE, you got one right..so far! Keep going!");
  userPoints++;
  console.log(userPoints);
} else {
  alert("I guess somebody does'nt know me much!");
}

// question two
let foodQuestion = prompt("What is my favourite go to cuisine?")?.toLowerCase();
while (!foodQuestion) {
  foodQuestion = prompt("You need to answer this question")?.toLowerCase();
}
let foodsILike = ["thai", "indian", "italian", "mediterranian"];

for (let i = 0; i < foodsILike.length; i++) {
  if (foodQuestion == foodsILike[i]) {
    alert(
      "Yes I love " +
        foodQuestion +
        "!" +
        " Your doing well, let's see if you can keep it going."
    );
    userPoints++;
    console.log(userPoints);
  }
}

alert("Have you kept track of how many you go right so far?🤔");

// question three
let shopping = confirm("Do I like to do online shopping ?");

if (shopping == true) {
  alert("Your smashing this! Only 2 questions to go.");
  userPoints++;
  console.log(userPoints);
} else {
  alert("Come on, pay attention. You really aren't having much luck.");
}

// question four
let question4 = confirm("Is my favourite cuisine chinese?");
if (question4 == true) {
  alert("Your smashing this! Only 1 more question to go.");
  userPoints++;
  console.log(userPoints);
} else {
  alert("better luck next time");
}

let question5 = prompt(
  "What is my favourite number? guess a number between 1-5"
);
let attempts = 3;
while (question5 != 2 && attempts > 0) {
  if (question5 > 2) {
    question5 = prompt(
      "your guess is high" + " Try again " + attempts + "more attempts"
    );
    attempts--;
  }
  if (question5 < 2) {
    question5 = prompt(
      "your guess is low" + " Try again " + attempts + "more attempts"
    );
    attempts--;
  }
}
if (question5 == 2) {
  alert("Nice, you guessed my favourite number.");
  userPoints++;
  console.log(userPoints);
}
{
  alert(user + " Well done, you scored " + userPoints + "/5");
}
