const forgetButton = document.getElementById('forgetButton')
const loginButton = document.getElementById('loginButton')
const createSubmitButton = document.getElementById('createSubmitButton')
const forgetSubmitButton = document.getElementById('forgetSubmitButton')
const createForm = document.getElementById('createForm')
const loginForm = document.getElementById('loginForm')
const forgetPasswordForm = document.getElementById('forgetPasswordForm')
const backupEmail = document.getElementById('backupEmail')

createFormToggle = () => {
    createForm.classList.toggle('notShow')
    loginForm.classList.toggle('notShow')
}
createButton.addEventListener('click', createFormToggle)
createSubmitButton.addEventListener('click', createFormToggle)

forgetFormToggle = () => {
    forgetPasswordForm.classList.toggle('notShow')
    loginForm.classList.toggle('notShow')
}
forgetButton.addEventListener('click', forgetFormToggle)
forgetSubmitButton.addEventListener('click', forgetFormToggle)

loginButton.addEventListener('click', () => {
    location.href = "./main/main.html"
})

const fetchLoginForm = document.querySelector('#fetchLoginForm')
fetchLoginForm.addEventListener('submit', async(event) => {
    event.preventDefault();
    const form = event.target;
    const formObject = {};
    formObject['username'] = form.fetchUsername.value;
    formObject['password'] = form.fetchPassword.value;
    const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formObject),
    })
    let jsonResponse = await response.json();
    document.querySelector('#fetch-area').innerHTML =
        `<div>username: ${jsonResponse.username}</div>
    <div>password: ${jsonResponse.password}</div>`
})

const myInput = document.getElementById("psw");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if (myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}