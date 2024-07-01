import { signup, createUser } from "./Signup.js";
import {
  sendEmailLink,
  auth,
} from "../../../../Firebase-config/firebase-config.js";
import { User } from "../../../../Data-Models/UserDataModel.js";

function getDataFromSignupForm(event) {
  event.preventDefault();
  let userData = event.target;
  console.log(userData);

  let user = new User(
    "",
    userData.firstName.value,
    userData.lastName.value,
    userData.email.value,
    userData.image.files[0],
    userData.bio.value
  );



  signup(user, userData.password.value);
}



let signupForm = document.getElementById("Signup-Form");
signupForm.addEventListener("submit", getDataFromSignupForm);
