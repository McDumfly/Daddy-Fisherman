// Check keypress
window.addEventListener("keyup", checkKeyPress, false)

function checkKeyPress(key) {
    if (key.keyCode == "27") {
        window.location.href = "index.html";
    }
}