function nav_menu() {
  var x = document.getElementById("topnav");
  if (x.className === "nav") {
    x.className += " nav_res";
  } else {
    x.className = "nav";
  }
}
  
  var myInput = document.getElementById("psw");
  var letter = document.getElementById("letter");
  var capital = document.getElementById("capital");
  var special = document.getElementById("special");
  var number = document.getElementById("number");
  var length = document.getElementById("length");
  
  var number_mob =document.getElementById("number_mob");
  var length_mob = document.getElementById("length_num");

  myInput.onfocus = function() {
    document.getElementById("message").style.display = "block"; 
  }
  
  myInput.onblur = function() {
    document.getElementById("message").style.display = "none"; 
  }
  myInput.onkeyup = function() {

    var upperCaseLetters = /^[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {  
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    }
    else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }
    if(myInput.value.match(upperCaseLetters)) {  
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {  
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }

    var specialLetters = /([-_*#&])/g;
    if(myInput.value.match(specialLetters)) {  
      special.classList.remove("invalid");
      special.classList.add("valid");
    } else {
      special.classList.remove("valid");
      special.classList.add("invalid");
    }

    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {  
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
    
    if(myInput.value.length === 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  }
}

function show_password() {
var x = document.getElementById("psw");
if (x.type === "password") {
  x.type = "text";
}
else {
  x.type = "password";
}
}
function validate_tle()
{
let y=document.forms['form']['mobile'].value;
let pat=/^([0]{1})([1]{1})([0-9]{9})$/
if(pat.test(y))
{
  alert("Submit Succsefully")
  return true;
}
else
{
  alert(
  "The enter number not valid\n\n valid number must:\n start with 0.\nand no less or more 11 numbers\nnumber as:01234567891");
  return false;
}
}

function validate_pass()
{
    let x=document.forms['form']['psw'].value;
    let pat=/^(?=[A-Z]{1})(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#&*_-]).{8}$/;
    
    if(pat.test(x))
    {
        alert("Submit Succsefully");
      return true;
    }
    else
    {
        alert(
            "The enter password not valid\n\n valid password must:\n start with uppercase character.\n include 8 characters.\n include one digit at least.\n include one special character like -, _, #, &, and *\npassword as:Ahmed#20");
        return false;
    }
}