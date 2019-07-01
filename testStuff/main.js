/* ------------------------------------------------------------
Haiku Generator
by Mathew Clark
--------------------------------------------------------------- */

var lines = [
    ["Jack's Challenge is here",
     "Hey, your grammar sucks"
    ],

    ["Theres never not not nuttin",
     "And your English is so bad",
     "Your spelling is attrocious"
    ],

    ["Stop being a rude",
     "Almost a hundred",
     "It's making me sad",
     "My heart skipped a beet"
    ]
    ];

var lines2 = [
    ["Jack's challenge is here",
     "Start of my haiku",
     "How can I start this?",
     "Finish this haiku",
     "Stop being a bich",
     "Jack is amazing",
     "Stay on my website",
     "Yesterday I said"
    ],

    ["This is not the best thing here",
     "Wasn't meant to go this way",
     "YGS one hundred's here",
     "This haiku might not make sense",
     "Theres never not not nuttin",
     "It might be fun in the end",
     "Sorry, I didn't mean that",
     "Was this found from Jack Douglass?",
     "Just help me clean up YouTube",
"Have you heard of John Cena?"
    ],

    ["End of my haiku",
     "It then crawls away",
     "That is very cheap",
     "This does not make sense",
     "Help, I cannot see",
     "Hope you've had some fun",
     "Oh shit, I fucked up!",
     "My name is Matthew",
     "Why not click again?",
     "Oh wait his name's John",
"I am a light switch",
"That is pretty cool",
"Oh wait, wait, wait! NO!"
    ]
    ];

function changeMessage(){
    for(var i=0; i<lines2.length; i++){
            document.getElementById(i+"line").innerHTML=lines2[i][(Math.floor(Math.random()*lines2[i].length))];
    }
    document.getElementById("startBttn").textContent = "Again?";
}
