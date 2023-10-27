const errors = document.querySelectorAll(".error");
const inputBoxes = document.querySelectorAll(".form-group input");
let nameInput = document.getElementById("name");
let userName = document.getElementById("username");
let emailInput = document.getElementById("email");
let password = document.getElementById("password");
let submitBtn = document.getElementById("submitBtn");

const nameValidation = (name) => {
  if (name == "") {
    inputBoxes[0].style.borderColor = "#FF7979";
    inputBoxes[0].style.borderWidth = "2px";
    inputBoxes[0].style.backgroundImage = 'url("images/icon-error.svg")';
    errors[0].textContent = "FirstName cannot be empty";
    return false;
  }
  return true;
};
const lastNameValidation = (username) => {
  if (username == "") {
    inputBoxes[1].style.borderColor = "#FF7979";
    inputBoxes[1].style.borderWidth = "2px";
    inputBoxes[1].style.backgroundImage = 'url("images/icon-error.svg")';
    errors[1].textContent = "LastName cannot be empty";
    return false;
  }
  return true;
};
const emailValidation = (emailAddres) => {
  if (emailAddres == "") {
    inputBoxes[2].style.borderColor = "#FF7979";
    inputBoxes[2].style.borderWidth = "2px";
    inputBoxes[2].style.backgroundImage = 'url("images/icon-error.svg")';
    errors[2].textContent = "Looks like this is not email";
    return false;
  }
  if (!emailAddres.includes("@") || !emailAddres.includes(".")) {
    inputBoxes[2].style.borderColor = "#FF7979";
    inputBoxes[2].style.borderWidth = "2px";
    inputBoxes[2].style.backgroundImage = 'url("images/icon-error.svg")';
    errors[2].textContent = "Looks like thisis not email";
    return false;
  }
  return true;
};
const passwordValidation = (pass) => {
  if (pass == "") {
    inputBoxes[3].style.borderColor = "#FF7979";
    inputBoxes[3].style.borderWidth = "2px";
    inputBoxes[3].style.backgroundImage = 'url("images/icon-error.svg")';
    errors[3].textContent = "Password cannot be empty";
    return false;
  }
  if (pass.length < 8 && pass != "") {
    inputBoxes[3].style.borderColor = "#FF7979";
    inputBoxes[3].style.borderWidth = "2px";
    inputBoxes[3].style.backgroundImage = 'url("images/icon-error.svg")';
    errors[3].textContent = "Password length cannot be less than 8";
    return false;
  }
  return true;
};
const removeError = (index) => {
  inputBoxes[index].style.borderColor = "#DEDEDE";
  inputBoxes[index].style.borderWidth = "1px";
  inputBoxes[index].style.backgroundImage = '';
  errors[index].textContent = "";
};
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  nameValidation(nameInput.value);
  lastNameValidation(userName.value);
  emailValidation(emailInput.value);
  passwordValidation(password.value);
  if (
    nameValidation(nameInput.value) &&
    lastNameValidation(userName.value) &&
    emailValidation(emailInput.value) &&
    passwordValidation(password.value)
  ) {
    console.log("Form is submitted succsessfully");
  }
});
