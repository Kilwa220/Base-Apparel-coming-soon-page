let form = document.querySelector("form");
let container = document.querySelector(".text-content");
let errorIcon = document.querySelector(".error-icon");
let email = document.querySelector("[type=email]");

form.onsubmit = function (e) {
  let validEmail = false;
  let regex = /^([^\W]\w+[_|.|-]?\w*@\w+[_|.|-]?\w+\.\w{2,})\b/;
  console.log(email.value.match(regex));
  if (document.querySelector(".error")) {
    document.querySelector(".error").remove();
  }

  if (email.value === "") {
    let messageError = document.createElement("span");
    messageError.textContent = "The input field is empty";
    messageError.classList.add("error");
    container.append(messageError);
    errorIcon.style.display = "initial";
    email.style["borderColor"] = "red";
    e.preventDefault();
  } else if (!email.value.match(regex)) {
    let messageError = document.createElement("span");
    messageError.textContent = "The email address is not formatted correctly";
    messageError.classList.add("error");
    container.append(messageError);
    errorIcon.style.display = "initial";
    email.style["borderColor"] = "red";
    e.preventDefault();
  }
};
