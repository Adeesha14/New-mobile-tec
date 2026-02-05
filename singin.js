function showError(message) {
  let msg = document.getElementById("msg");
  msg.style.display = "block";
  msg.style.backgroundColor = "red";
  msg.style.color = "white";
  msg.style.padding = "10px";
  msg.innerHTML = message;
}

function signup() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let msg = document.getElementById("msg");

  if (username === "" || password === "" || confirmPassword === "") {
    showError("All fields are required");
    return;
  }

  if (password !== confirmPassword) {
    showError("Passwords do not match");
    return;
  }

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  msg.style.backgroundColor = "green";
  msg.style.color = "white";
  msg.innerHTML = "Sign up successful! Redirecting...";

  setTimeout(() => {
    window.location.href = "login_form.html";
  }, 1500);
}
