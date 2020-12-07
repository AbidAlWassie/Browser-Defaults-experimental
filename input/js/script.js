window.onload = function () {
  const name = document.getElementById("username");
  const email = document.getElementById("email");
  const signUpForm = document.getElementById("formSignUp");
  const inputName = document.querySelector(".inputName");
  const inputEmail = document.querySelector(".inputEmail");
  const inputPassword = document.querySelector(".inputPassword");
  const inputConfirmPassword = document.querySelector(".inputConfirmPassword");
  const errorMessage = document.querySelectorAll(".errorMessage");
  
  inputName.addEventListener("blur", inputLeave);
  inputEmail.addEventListener("blur", inputLeave);
  inputPassword.addEventListener("blur", inputLeave);
  inputConfirmPassword.addEventListener("blur", inputLeave);
  
  function inputLeave(e) {
    console.log("left")
    errorMessage.className = "errorMessage success";
    e.preventDefault();
  }
}
