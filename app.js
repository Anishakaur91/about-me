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
let football = prompt("What football team do i support?").toLowerCase();
if (
  football == "tottenham hotspurs" ||
  football == "spurs" ||
  football == "tottenham"
) {
  alert("WELL DONE, you got one right..so far! Keep going!");
} else if (football == "arsenal" || football == "gooners") {
  alert("I guess somebody has too!");
} else {
  alert("bum boy");
}

// question two
let foodQuestion = prompt("What is my favourite go to cuisine?").toLowerCase();

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
  }
}

alert("Have you kept track of how many you go right?🤔");

// question three
let sports = confirm("Did i used to play rugby for Liverpool?");

if (sports == true) {
  alert("Your smashing this! Only 2 questions to go.");
  userPoints++;
} else {
  alert("Come on, pay attention. You really aren't having much luck.");
}

// question four
let question4 = confirm("Is my favourite cuisine chinese?");
if (question4 == true) {
  console.log("correct!");
} else {
  console.log("incorrect!");
}

let question5 = prompt(
  "What is my favourite number? guess a number between 1-5"
);
let attempts = 3;
while (question5 != 2 && attempts > 0) {
  if (question5 > 2) {
    question5 = prompt(
      "your guess is high" + "Try again " + attempts + "more attempts"
    );
    attempts--;
  }
  if (question5 < 2) {
    question5 = prompt(
      "your guess is low" + "Try again " + attempts + "more attempts"
    );
    attempts--;
  }

  // alert("Try again " + attempts + "more attempts");
  // attempts--;
  // console.log(attempts + "more attempts");
}
if (question5 == 2) {
  userPoints++;
  alert("well done");
}
