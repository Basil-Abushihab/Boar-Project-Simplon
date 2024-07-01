import { login } from "./login.js";

function getDataFromLoginForm(event) {
  event.preventDefault();
  let userData = document.getElementById("Login-Form");

  login(userData.email.value, userData.password.value);
}

let loginForm = document.getElementById("Login-Form");
loginForm.addEventListener("submit", getDataFromLoginForm);
