var fullname = document.forms["register-form"]["fullname"];
var gender = document.forms["register-form"]["gender"];
var dateofbirth = document.forms["register-form"]["dateofbirth"];
var nationalid = document.forms["register-form"]["nationalid"];
var residence = document.forms["register-form"]["residence"];
var employeeid = document.forms["register-form"]["employeeid"];


var name_error = document.getElementById("name_error");
var gender_error = document.getElementById("gender_error");
var dateofbirth_error = document.getElementById("dateofbirth_error");
var nationalid_error = document.getElementById("nationalid_error");
var residence_error = document.getElementById("residence_error");
var employeeid_error = document.getElementById("employeeid_error");


var namereg  = /^[(A-Z){1}(a-z){1,}(A-Z){1}(a-z){1,}]+$/;
var dobreg = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
var nid = /^[(A-Z){3}(0-9a-zA-Z)]+$/
var eid = /^[(zwash\.)?+[0-9]{4}]+$/


var Validate =()=>{
    
    if(fullname.value ==''){
        fullname.style.border="1px solid red";
        name_error.textContent = "Names should not be left empty";
    } else if(fullname.value.length <8){
        fullname.style.border="1px solid red";
        name_error.textContent = "Characters must not be less than 8";
    } else if(fullname.value.match(namereg)){
        fullname.style.border="1px solid red";
        name_error.textContent = "All names should start with capital leters and without nuemerics";
    }else{
        fullname.style.border="1px solid green";
        fullname.focus();
    }

    
    if(dateofbirth.value ==''){
        dateofbirth.style.border="1px solid red";
        dateofbirth_error.textContent = "Date of birth must be selected";
    } else if(!(dateofbirth.value.match(dobreg))){
        dateofbirth.style.border="1px solid red";
        dateofbirth_error.textContent = "You must be 18 years of age to register";
    }else{
        dateofbirth.style.border="1px solid green";
        dateofbirth.focus();
        
    }

    if(residence.value ==''){
        residence.style.border="1px solid red";
        residence_error.textContent = "Place of residence should not be left empty";
    }else{
        residence.style.border="1px solid green";
        residence.focus();
        
    }

    
    if(nationalid.value ==''){
        nationalid.style.border="1px solid red";
        nationalid_error.textContent = "National ID should not be left empty";
    } else if(nationalid.value.length <11){
        nationalid.style.border="1px solid red";
        nationalid_error.textContent = "Characters must not be less than 11";
    } else if(nationalid.value.match(nid)){
        nationalid.style.border="1px solid red";
        nationalid_error.textContent = "National ID should start with 3 capital leters";
    }else{
        nationalid.style.border="1px solid green";
        nationalid.focus();
        
    }

    if(employeeid.value ==''){
        employeeid.style.border="1px solid red";
        employeeid_error.textContent = "Employee ID should not be left empty";
    } else if(employeeid.value.match(eid)){
        employeeid.style.border="1px solid red";
        employeeid_error.textContent = "Employee ID should start with ZWASH followed by 3 numbers";
    }else{
        employeeid.style.border="1px solid green";
        employeeid.focus();
        
    }

    if(this.gender[0].checked==false && this.gender[1].checked==false){
        gender_error.textContent = "please gender must be selected";
        return false;
    
    }
    return true;
}
