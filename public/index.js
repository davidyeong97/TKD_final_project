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