window.onload = function () {
  const name = document.getElementById("username");
  const email = document.getElementById("email");
  const signUpForm = document.getElementById("formSignUp");
  const inputName = document.querySelector(".inputName");
  const inputEmail = document.querySelector(".inputEmail");
  
  inputName.addEventListener("blur", (e) => {
    inputName.style.color = "#6d6d6d";
    console.log("blurred")
    e.preventDefault();
  });
  
  inputEmail.addEventListener("blur", (e) => {
    inputEmail.style.color = "#6d6d6d";
    console.log("blurred")``
    e.preventDefault();
  });
}
