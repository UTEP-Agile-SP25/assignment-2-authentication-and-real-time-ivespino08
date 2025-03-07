import { createAccount, logOut, signIn } from "./auth"


const accountCreationForm = document.querySelector("#accountCreation")
if (accountCreationForm) {
    accountCreationForm.addEventListener("submit", (event) => {
        event.preventDefault()
        const firstName = document.getElementById("inputFirstName").value
        const lastName = document.getElementById("inputLastName").value
        const email = document.getElementById("inputEmail").value
        const password = document.getElementById("inputPassword").value
    
        createAccount(firstName, lastName, email, password)
    })
}

const logInForm = document.querySelector("#logInForm")
if (logInForm) {
    logInForm.addEventListener("submit", (event) => {
        event.preventDefault()
        const email = document.getElementById("logInEmail").value
        const password = document.getElementById("logInPassword").value

        signIn(email, password)
    })
}

const logOutForm = document.querySelector("#logOutForm")
if (logOutForm) {
    logOutForm.addEventListener("submit", (event) => {
        event.preventDefault()
        logOut()
    })
}
