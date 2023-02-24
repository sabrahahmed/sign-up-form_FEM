
const submitButton = document.querySelector(".btn")

let users = [];

const addUser = (ev)=>{
    ev.preventDefault();

    let user = {
        firstName: document.getElementById("first-name").value,
        lastName: document.getElementById("last-name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    }
    users.push(user);
    document.querySelector("form").reset();
    console.log(users)
}

document.addEventListener("DOMContentLoaded", ()=>{
    submitButton.addEventListener("click", addUser)
});

