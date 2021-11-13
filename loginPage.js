function checkGuesser() {

var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

if(username == "admin" && password == "password")
{
  alert("Correct login information!");
  window.location.href = "congratulations.html";
}
else{
  alert("wrong login information!");
}

}

