const usernameArray = [];
const passwordArray = [];
const loginBox = document.getElementById("login");

function loginTabFun() {
    event.preventDefault();
    loginBox.style.visibility = "visible";
}

function forTabFun() {
    event.preventDefault();
    loginBox.style.visibility = "hidden";
}

function login() {
    event.preventDefault();
    const username = document.getElementById("su").value;
    const password = document.getElementById("sp").value;
    const i = usernameArray.indexOf(username);

    if (usernameArray.indexOf(username) == -1) {
        if (username == "") {
            console.log("username required.");
            return;
        }
        console.log("username does not exist.");
        return;
    } else if (passwordArray[i] != password) {
        if (password == "") {
            console.log("Password required.");
            return;
        }
        console.log("Password does not match.");
        return;
    } else {
        console.log(username + " yor are login Now \n welcome to our app.");
        document.getElementById("se").value = "";
        document.getElementById("sp").value = "";
        return;
    }
}