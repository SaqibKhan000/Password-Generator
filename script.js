
function pass() {
    let empty = "";
    let str = "abcdefghijklmnopqrstuvwxyz1234567890@$%^&*!";

    let len = 10;
    for (let i = 0; i < len; i++) {
        empty += str[Math.floor(Math.random() * str.length)];
    }
    document.getElementById("input").value = empty;
}

function rem() {
    document.getElementById("input").value = "";
}

function copy() {
    let password = document.getElementById("input");
    password.select();
    document.execCommand("copy");
    alert("Password has been coppied successfully.");
}