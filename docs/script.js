window.addEventListener("keyup", checkKeyPress, false)

function checkKeyPress(key) {
    if (key.keyCode == "13") {
        window.location.href = "game.html";
    } else if (key.keyCode == "72") {
        openHelpWindow();
    } else if (key.keyCode == "27") {
        window.close();
    } else if (key.keyCode == "77") {
        window.location.href="fishMarket.html";
    } 
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
