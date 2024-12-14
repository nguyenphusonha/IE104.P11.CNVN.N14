const showPasswordButton = document.getElementById("showPassword-btn");
const passwordField = document.getElementById("password");
showPasswordButton.addEventListener("click", function () {
  if (passwordField.type == "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
});
