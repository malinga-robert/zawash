var fullname = document.addManager.fullname;
var username = document.addManager.username;
var phoneNumber = document.addManager.phoneNumber;
var password = document.addManager.password;



var fnameErr = document.getElementById('fnameErr');
var emailErr = document.getElementById('emailErr');
var mobileErr = document.getElementById('mobileErr');
var passErr = document.getElementById('passErr');


var Validate = ()=>{
    
    if(fullname.value==""){
        fnameErr.textContent = "Please Enter Fullnames"
        fullname.style.border="1px solid red"
        return false;
    }else{
        fullname.style.border="1px solid green"
        fnameErr.textContent = ""
    }

    if(email.value ==""){
        email.style.border="1px solid red"
        emailErr.textContent = "Please Enter Email"
        return false;
    }else{
        email.style.border="1px solid green"
        emailErr.textContent = ""

    }

    if(number.value ==""){
        number.style.border="1px solid red"
        mobileErr.textContent = "Mobile Number Must Be Entered"
        return false;
        
    }else{
        number.style.border="1px solid green"
        mobileErr.textContent = ""
        
    }

    
    if(password.value ==""){
        password.style.border="1px solid red"
        passErr.textContent = "Password Must Be Entered"
        return false;
        
    }else{
        password.style.border="1px solid green"
        passErr.textContent = ""
        
    }
    return true

}

