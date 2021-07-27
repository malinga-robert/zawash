// accessing elements by name
var fullname = document.forms["register-form"]["fullname"];
var gender = document.forms["register-form"]["gender"];
var dateofbirth = document.forms["register-form"]["dateofbirth"];
var nationalid = document.forms["register-form"]["nationalid"];
var residence = document.forms["register-form"]["residence"];
var employeeid = document.forms["register-form"]["employeeid"];

// accessing error  elements by id
var name_error = document.getElementById("name_error");
var gender_error = document.getElementById("gender_error");
var dateofbirth_error = document.getElementById("dateofbirth_error");
var nationalid_error = document.getElementById("nationalid_error");
var residence_error = document.getElementById("residence_error");
var employeeid_error = document.getElementById("employeeid_error");

// regullar expresions
var namereg  = /^[(A-Z){1}(a-z){1,}(){1}(A-Z){1}(a-z){1,}]+$/;
var nid = /^[A-Z]{3}[0-9A-Z]{8}$/;
// var nid = /^[(A-Z){3}(0-9a-zA-Z)]{8}+$/
// var eid =  /"##zwash-\d{3}"/
var eid =/^ZWASH([0-9]{3})$/;


var Validate =()=>{
    // validating fullname
    if(fullname.value ==''){
        fullname.style.border="1px solid red";
        name_error.textContent = "Names should not be left empty";
        return false;
    } else if(fullname.value.length <8){
        fullname.style.border="1px solid red";
        name_error.textContent = "Characters must not be less than 8";
        return false;
    } else if(fullname.value.match(namereg)){
        fullname.style.border="1px solid red";
        name_error.textContent = "All names should start with capital leters and without nuemerics";
        return false;
    }else{
        fullname.style.border="1px solid green";
        name_error.textContent = "";
        fullname.focus();
    }
    
    // validating gender
    if(this.gender.value==""){
        gender_error.textContent = "Please Select a Gender";
        this.gender.style.border="1px solid red";
        this.gender.focus();
        return false;
        
    }else{
        gender.style.border="1px solid green";
        gender_error.textContent = "";
        gender.focus();
    }
   
    // validating dateofbirth
    if(dateofbirth.value ==''){
        dateofbirth.style.border= "1px solid red";
        dateofbirth_error.textContent = "Date of birth must be selected";
        return false;
    }else{
        dateofbirth.style.border= "1px solid green";
        dateofbirth_error.textContent = "";
        dateofbirth.focus();
     
    }
    
    // validating national ID
    if(nationalid.value ==''){
        nationalid.style.border="1px solid red";
        nationalid_error.textContent = "National ID should not be left empty";
        return false;
    } else if(nationalid.value.length <11){
        nationalid.style.border="1px solid red";
        nationalid_error.textContent = "Characters must not be less than 11";
        return false;
    } else if(!(nationalid.value.match(nid))){
        nationalid.style.border="1px solid red";
        nationalid_error.textContent = "National ID should start with 3 capital leters";
        return false;
    }else{
        nationalid.style.border="1px solid green";
        nationalid_error.textContent = "";
        nationalid.focus();
    }
    
    // validating residence
    if(residence.value ==''){
        residence.style.border="1px solid red";
        residence_error.textContent = "Place of residence should not be left empty";
        return false;
    }else{
        residence.style.border="1px solid green";
        residence_error.textContent = "";
        residence.focus();
    }

    // validating employee ID
    if(employeeid.value ==''){
        employeeid.style.border="1px solid red";
        employeeid_error.textContent = "Employee ID should not be left empty";
        return false;
    } else if(!(employeeid.value.match(eid))){
        employeeid.style.border="1px solid red";
        employeeid_error.textContent = "Employee ID should start with ZWASH followed by 3 numbers";
        return false;
    }else{
        employeeid.style.border="1px solid green";
        employeeid_error.textContent = "";
        employeeid.focus();
    }

    // if(this.gender[0].checked==false && this.gender[1].checked==false){
    //     gender_error.textContent = "please gender must be selected";
    //     // return false;
    
    // }
}

