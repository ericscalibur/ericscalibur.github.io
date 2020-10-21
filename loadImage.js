'use strict';
var z = "ChainReacton";
let name = prompt("Please enter the password: ", "password");

if(name == z) {
  alert("Correct! Please Enter.");
}
else {
  history.go(-1);
}
