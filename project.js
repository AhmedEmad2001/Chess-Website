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

  var myInputcon = document.getElementById("conpsw");
  var confirmed = document.getElementById("confirmed");
  myInputcon.onfocus = function con(){
    
   {
    document.getElementById("message-con").style.display = "block"; 
  }
}
  myInputcon.onblur = function con() {
    {
    document.getElementById("message-con").style.display = "none"; 
  }
}
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

function show_conpassword() {
  var x = document.getElementById("conpsw");
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
 // alert("Submit Succsefully")
  return true;
}
else
{
  alert(
  "The enter number not valid\n\n valid number must:\n start with 01.\nand no less or more 11 numbers\nnumber as:01234567891");
  return false;
}
}

function validate_pass()
{
    let x=document.forms['form']['psw'].value;
    let pat=/^(?=[A-Z]{1})(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#&*_-]).{8}$/;
    
    if(pat.test(x))
    {
        //alert("Submit Succsefully");
      return true;
    }
    else
    {
        alert(
            "The enter password not valid\n\n valid password must:\n start with uppercase character.\n include 8 characters.\n include one digit at least.\n include one special character like -, _, #, &, and *\npassword as:Ahmed#20");
        return false;
    }
}


function validate_conpass()
{
    let x=document.forms['form']['conpsw'].value; 
    let y=document.forms['form']['psw'].value; ;
    if(y===x)
    {
       // alert("Submit Succsefully");
     return true;
    }
    else
    { 
       alert("password not matching");
        return false;
    }
}
myInputcon.onkeyup = function con() {
  
  if(myInputcon.value === myInput.value) {
    confirmed.classList.remove("invalid");
    confirmed.classList.add("valid");
  } else {
    confirmed.classList.remove("valid");
    confirmed.classList.add("invalid");
  }

}
function validate_email()
{
    let x=document.forms['form']['email'].value;
    let pat=/^[A-Za-z]+\S+@\S+\.[c]{1}[o]{1}[m]{1}/;
    
    if(pat.test(x))
    {
//      alert("You have entered a valid email address!");
        //alert("Submit Succsefully");
      return true;
    }
    else
    {
      alert("You have entered an invalid email address!\nvalid email must be as:username@orgnization.com\nusername:must be more than one character\nand must not start with digit"); 
         return false;
    }
}

 
function valid() {
  if(validate_email()===true && validate_pass()===true && validate_conpass()===true && validate_tle()===true)
  {alert("Submit Succsefully");
    return true;}
  else
  {return false;}
}


