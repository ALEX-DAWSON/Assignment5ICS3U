/* -----------------------------------------------------------
Information Displayer
by Alex Dawson
----------------------------------------------------------- */

// ------------------------------------------Prompts/Variables
var name = prompt("Hey Buddy! What's your name?", "[insert name here]");
var day;
var reason;
var dolphin;
// -----Results
function displayResults() {
  document.getElementById("name").innerHTML =
  "Your name is " + name + " and your day was a(n) " + day +"/10 because '" + reason +"'.";
}

// ------------------------------------------Senarios
// -----Name
if (name == "null") {
  name = "I love you 3000";
  day = "'I hate you'";
  reason = "I decided to press cancel";
  displayResults();
}
else {
  day = prompt("Hey " + name + "! On a scale from 1-10, How was your day?","5");
  // -----Day
  // The numbers saga
  if (day >= 1 && day <= 4) {
    reason = prompt("That's too bad, " + name +". Why was that?","I live in existential fear");
    displayResults();
  }

  else if (day == 5) {
    reason = prompt("Oh. That's alright, " + name +". Why was that?","Just kinda living");
    displayResults();
  }

  else if (day >= 6 && day <= 10) {
    reason = prompt("That's awesome, " + name +"! Why was that?","I had sex");
    displayResults();
  }

  else if (day < 1) {
    reason = prompt("First off, I said 1 - 10. Second off, That must have been shit, " + name +". What happened?","I live in worse than existential fear. Help me.");
    displayResults();
  }

  // The dolphin saga
  else if (day == "dolphin" || day == "Dolphin" || day == "DOLPHIN" || day == "dOlPhIn" || day == "DoLpHiN") {
    dolphin = confirm("Oh my god. You've been here before, haven't you?");
    if (dolphin == true) {
      reason = prompt("I knew it. You're just a lonely prick, aren't you? Okay, fine. So, why are you annoying me then?", "I'm lonely")
    }
    else {
      reason = prompt("Oh. Lucky guess then? Ech, whatever. So why was your day "+ day +" anyway?", "I like "+ day +"'s")
    }
    displayResults();
  }

  // The last resort
  else {
    reason = prompt("Hey "+ name +"! What the hell?! I said from 1 - 10. I'm not about to sit here and program a bunch of different senarios just so you can be like 'my day was a DOLPHIN out of 10'. But anyway, why was your day a "+ day +"/10?", "ur mom")
    displayResults();
  }

  // -----Reason
  if (reason == "I love you 3000" || reason == "i love you 3000") {
    alert("Get out and come back when you're better behaved");
    window.location.replace('index.html');
  }
}
