function login(){
let username = document.getElementById(prompt("Enter Username:")).value;
let password =  document.getElementById(prompt("Enter Password:")).value;

if (username === "admin" && password === "1234") {
    alert("Login Successful!");
} else {
    alert("Invalid Username or Password!");
}
}