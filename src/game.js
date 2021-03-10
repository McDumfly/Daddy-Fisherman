// Add sound(s)
var splash = new Audio('sounds/watersplash.mp3');
var BMusic = new Audio('sounds/backgroundmusic.mp3'); 

// Add more variables
var background = document.getElementById("background");
var msg = document.getElementById("messageToUser");
var catchedFishes = [];
var fishImageName;

// ====-KEYBOARD-==== //
// Check keypress
window.addEventListener("keyup", checkKeyPress, false)

function checkKeyPress(key) {
    if (key.keyCode == "27") {
        window.location.href = "index.html";
    } else if (key.keyCode == "38") {
        arrowUp();
    } else if (key.keyCode == "70") {
        showCatchedFishes();
    } else if (key.keyCode == "79") {
        BMusic.play();
    } else if (key.keyCode == "80") {
        BMusic.pause();
    } else if (key.keyCode == "76") {
        selectLake(); 
    } else if (key.keyCode == "13") {
        window.location.href = "game.html";
    } else if (key.keyCode == "72") {
        openHelpWindow();
    }
}



/*
switch (key.keyCode) {
     // This is throw
     case "38":
        arrowUp();
        break;
     // This is escape
    case "27":
        escapeOut();
        break;
     // This is catch
     case "40":
         arrowDown();
         break;
     // This is see all fish
     case "70":
         fKeyPressed();
         break;
     // This is nothing
     default:
         break;
}
*/

var correctTime;

function arrowUp() {
    document.getElementById("messageToUser").innerHTML = " ";
    var fishCatch = false;
    document.getElementById("background").classList.remove("background-water");
    document.getElementById("background").classList.add("background-float");
    
    splash.play();

    var waitTimeForFish = Math.floor(Math.random() * 60000)

    setTimeout( function() {
        document.getElementById("background").classList.remove("background-float");
        document.getElementById("background").classList.add("background-waterNormal");
        fishCatch = true;
    }, waitTimeForFish);

    window.addEventListener("keyup", checkKeyPress, false)

    function checkKeyPress(key) {
        if (key.keyCode == "40" && fishCatch === true) {
            arrowDown();
            fishCatch = false;
        }
    }

}

function arrowDown() {
    document.getElementById("messageToUser").innerHTML = " ";
    // Get random fish
    var fish = new Array("pike","roach","crucianCarp","bleak","bream","silverBream","sunfish","herring","trout","perch","catfish");
    randomFishNum = Math.floor(Math.random() * fish.length);
    var fishName;
    var fishClassName;

    // Get fish class name
    if (randomFishNum === 0) {
        fishClassName = "pike";
    } else if (randomFishNum === 1) {
        fishClassName = "roach";
    } else if (randomFishNum === 2) {
        fishClassName = "crucianCarp";
    } else if (randomFishNum === 3) {
        fishClassName = "bleak";
    } else if (randomFishNum === 4) {
        fishClassName = "bream";
    } else if (randomFishNum === 5) {
        fishClassName = "silverBream";
    } else if (randomFishNum === 6) {
        fishClassName = "sunfish";
    } else if (randomFishNum === 7) {
        fishClassName = "herring";
    } else if (randomFishNum === 8) {
        fishClassName = "trout";
    } else if (randomFishNum === 9) {
        fishClassName = "perch";
    } else if (randomFishNum === 10) {
        fishClassName = "catfish";
    }

    // Get fish name
    if (randomFishNum === 0) {
        fishName = "pike";
    } else if (randomFishNum === 1) {
        fishName = "roach";
    } else if (randomFishNum === 2) {
        fishName = "crucian carp";
    } else if (randomFishNum === 3) {
        fishName = "bleak";
    } else if (randomFishNum === 4) {
        fishName = "bream";
    } else if (randomFishNum === 5) {
        fishName = "silver bream";
    } else if (randomFishNum === 6) {
        fishName = "sunfish";
    } else if (randomFishNum === 7) {
        fishName = "herring";
    } else if (randomFishNum === 8) {
        fishName = "trout";
    } else if (randomFishNum === 9) {
        fishName = "perch";
    } else if (randomFishNum === 10) {
        fishName = "catfish";
    }

    document.getElementById("background").classList.remove("background-waterNormal");
    document.getElementById("background").classList.add(fishClassName);

    splash.play();

    setTimeout( function() {
        document.getElementById("messageToUser").innerHTML = "Congratulations! You catch a " + fishName + "!";
    }, 200);

    fishImageName = fishName;
    catchedFishes.push(fishName);

    setTimeout ( function() {
        document.getElementById("messageToUser").innerHTML = "Press N key to next";
    }, 3000);

    window.addEventListener("keyup", checkKeyPress, false)

    function checkKeyPress(key) {
        if (key.keyCode == "78") {
            document.getElementById("messageToUser").innerHTML = " ";
            document.getElementById("background").classList.remove(fishClassName);
            document.getElementById("background").classList.add("background-water");
        }
    }

    /*
    if (correctTime < 5) {
    } else {
        document.getElementById("background").classList.remove("background-waterNormal");
        document.getElementById("background").classList.add("emptyBucket");

        setTimeout( function() {
            document.getElementById("messageToUser").innerHTML = "You took out the fish too late and escaped. Other times be faster!";
        }, 200);

        setTimeout (function() {
            document.getElementById("messageToUser").innerHTML = " ";
            document.getElementById("background").classList.remove("emptyBucket");
            document.getElementById("background").classList.add("background-water");
        }, 3000)
        
    } 
    */
}

function showCatchedFishes() {
    Window = window.open("Daddy Fisherman", "Help", "width=1000,height=1000");
    Window.document.write("<h1>Fishing net</h1>");
    Window.document.write("<hr>");
    Window.document.write("<img src='images/.jpg'>");
    Window.document.write(`
    <script>
        "var fishImage = document.createElement("img");"
        "fishImage.src='${fishImageName}';"
        "document.appendChild(fishImage);"
    </script>
    `);
    Window.document.write("<link rel='stylesheet' href='game.css'>");
    Window.document.write(catchedFishes.join(`<br>`));
    Window.document.write("<br><br>");
    Window.document.write("<button onclick='window.close()'>Exit</button>");
}

function openHelpWindow() {
    Window = window.open("Daddy Fisherman", "Help", "width=1000,height=1000");
    Window.document.write("<h1>Help</h1>");
    Window.document.write("<br>");
    Window.document.write("<br>");
    Window.document.write("ENTER -> start the game");
    Window.document.write("<br>");
    Window.document.write("H -> help");
    Window.document.write("<br>");
    Window.document.write("M -> fis market");
    Window.document.write("<br>");
    Window.document.write("ESC -> exit");
    Window.document.write("<br>");
    Window.document.write("<br>");
    Window.document.write("<br>");
    Window.document.write("<h1>In the game:</h1>")
    Window.document.write("<br>");
    Window.document.write("Arrow key up -> throwing");
    Window.document.write("<br>");
    Window.document.write("Arrow key down -> catch");
    Window.document.write("<br>");
    Window.document.write("F key -> show fishing net");
    Window.document.write("<br>");
    Window.document.write("ESC key -> escape");
    Window.document.write("<br>");
    Window.document.write("H -> help");
    Window.document.write("<br>");
    Window.document.write("N -> next");
    Window.document.write("<br>");
    Window.document.write("O -> enable sound");
    Window.document.write("<br>");
    Window.document.write("P -> disable sound");
    Window.document.write("<br>");
    Window.document.write("ENTER -> reload");
    Window.document.write("<br>");
    Window.document.write("<br>");
    Window.document.write("<button onclick='window.close()'>Exit</button>");
}

/* Add more function to the game 

Memory the catched fishes
In the fishing net show the fish image
Add Marketplace, where you can sell the catched fishes
Add random weight to fish
Add to buy new fishing rod or new float in Marketplace

*/