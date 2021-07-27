// accessing elements by id
var numberplate = document.forms["carreg"]["numberplate"];
var toa = document.forms["carreg"]["toa"];
var doa = document.forms["carreg"]["doa"];
var make = document.forms["carreg"]["make"];
var type = document.forms["carreg"]["type"];
var washer = document.forms["carreg"]["washer"];
var color = document.forms["carreg"]["color"];
// var inputColor = document.getElementById('inputColor');
var package = document.forms["carreg"]["package"];

// accessing error elements by id
var numberplateErr = document.getElementById('numberplateErr');
var timeErr = document.getElementById('timeErr');
var colorErr = document.getElementById('colorErr');
var dateErr = document.getElementById('dateErr');
var typeErr = document.getElementById('typeErr');
var makeErr = document.getElementById('makeErr');
var asignErr = document.getElementById('asignErr');
// var paymentErr = document.getElementById('paymentErr');
var packageErr = document.getElementById('packageErr');

// regular expresion for numberplate
var numplate = /^([A-Z]{3}.*[\s\.]*[0-9]{3}[A-Z]{1})$/;



 var Validate = ()=>{   
    // validating numperplate
    if(numberplate.value ==''){
        numberplate.style.border="1px solid red";
        numberplateErr.textContent = "Numberplate should be filled";
        return false;
    }else if(!(numberplate.value.match(numplate))){
        numberplate.style.border="1px solid red";
        numberplateErr.textContent = "Must Start with 3 letters and by 4 alphanumeric";
        return false;
    }else{
        numberplate.style.border="1px solid green";
        numberplateErr.textContent = "";
        numberplate.focus();
    }
    // validating time of arrival
    if(toa.value ==''){
        toa.style.border="1px solid red";
        timeErr.textContent = "Time should be filled";
        return false;
    }else{
        toa.style.border="1px solid green";
        timeErr.textContent = "";
        toa.focus();
    }
    // validating car make
    if(make.value ==''){
        make.style.border="1px solid red";
        makeErr.textContent = "Make should be filled";
        return false;
    }else{
        make.style.border="1px solid green";
        makeErr.textContent = "";
        make.focus();
    }
    // validating color
    if(color.value ==''){
        color.style.border="1px solid red";
        colorErr.textContent = "Color should be filled";
        return false;
    }else{
        color.style.border="1px solid green";
        colorErr.textContent = "";
        color.focus();
    }

    // validating date of arrival
    if(doa.value ==''){
        doa.style.border="1px solid red";
        dateErr.textContent = "Date should be filled";
        return false; 
    }else{
        doa.style.border="1px solid green";
        dateErr.textContent = "";
        doa.focus();
    }
    
    // validating car type
    if(type.value ==''){
        type.style.border="1px solid red";
        typeErr.textContent = "Type should be filled";
        return false;
    }else{
        type.style.border="1px solid green";
        typeErr.textContent = "";
        type.focus();
    }

    // validating washer
    if(this.washer.value==""){
        washer.style.border="1px solid red";
        asignErr.textContent = "Atleast a Washer must be assigned";
       return false;
    }else{
        washer.style.border="1px solid green";
        asignErr.textContent = "";
        washer.focus();
    }
    
    // validating package
    if(this.package.value==""){
        package.style.border="1px solid red";
        packageErr.textContent = "Atleast a package must be selected";
       return false;
    }else{
        package.style.border="1px solid green";
        packageErr.textContent = "";
        package.focus();
    }
   
}        
   
// numberplate.addEventListener('input',checkNumberplateField =()=>{