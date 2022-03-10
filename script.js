document.getElementById("textbox").focus();
function validate(){
    var RegNoValidater = document.getElementById("textAlert");
    var passwordValidater= document.getElementById("passwordAlert");
    var RegNo = document.getElementById("textbox").value;
    var password = document.getElementById("password").value;
    console.log(password);
    if(RegNo.length==0){
        RegNoValidater.innerHTML="Register number is missing"
    }
    if(RegNo.length<8){
        RegNoValidater.innerHTML="Register number must be atleast 7 characters";
        RegNoValidater.style.color="Red";
    }
    else{
        RegNoValidater.innerHTML=" ";
    }
    if(password.length<8){
        passwordValidater.innerHTML="Password must be atleast 8 characters";
        passwordValidater.style.color="Red";
    }
    else if(password.search(/[0-9]/)==-1){
        passwordValidater.innerHTML="Password must have atleast one digit 0-9";
        passwordValidater.style.color="Red";
    }
    else if(password.search(/[a-z]/)==-1){
        passwordValidater.innerHTML="Password must have atleast one lowercase letter a-z";
        passwordValidater.style.color="Red";
    }
    else if(password.search(/[A-Z]/)==-1){
        passwordValidater.innerHTML="Password must have atleast one uppercase letter A-Z";
        passwordValidater.style.color="Red";
    }
    else if(password.search(/[!\@\#\$\%\&\*]/)==-1){
        passwordValidater.innerHTML="Password must have atleast one special case character";
        passwordValidater.style.color="Red";
    }
    else{
        passwordValidater.innerHTML=" ";
    }
   
}