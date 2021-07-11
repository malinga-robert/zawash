var numberplate = document.forms["carreg"]["numberplate"];
var time = document.forms["carreg"]["time"];
var date = document.forms["carreg"]["date"];
var inputMake = document.forms["carreg"]["inputMake"];
var inputType = document.forms["carreg"]["inputType"];
var washers = document.forms["carreg"]["washers"];
var payment = document.forms["carreg"]["payment"];
var inputColor = document.getElementById('inputColor');
var packages = document.forms["carreg"]["packages"];


var numberplateErr = document.getElementById('numberplateErr');
var timeErr = document.getElementById('timeErr');
var colorErr = document.getElementById('colorErr');
var dateErr = document.getElementById('dateErr');
var typeErr = document.getElementById('typeErr');
var makeErr = document.getElementById('makeErr');
var asignErr = document.getElementById('asignErr');
var paymentErr = document.getElementById('paymentErr');
var packageErr = document.getElementById('packageErr');

var numplate = /^[(a-zA-Z){3}][(0-9a-zA-Z){7}]+$/;

// numberplate.addEventListener('input',checkNumberplateField =()=>{
 var Validate = ()=>{   
    if(inputNumberplate.value ==''){
        inputNumberplate.style.border="1px solid red";
        numberplateErr.textContent = "Numberplate should be filled";
        // inputNumberplate.focus();
    }else if(inputNumberplate.value.match(numplate)){
        inputNumberplate.style.border="1px solid red";
        numberplateErr.textContent = "Must Start with 3 letters followed by 7 alphanumeric";
    }else{
        inputNumberplate.style.border="1px solid green";
        inputNumberplate.focus();
        // return false;
    }
    if(time.value ==''){
        time.style.border="1px solid red";
        timeErr.textContent = "Time should be filled";
        // time.focus(); 
    }else{
        time.style.border="1px solid green";
        time.focus();
        // return false;
    }

    if(inputMake.value ==''){
        inputMake.style.border="1px solid red";
        makeErr.textContent = "Make should be filled";
        // inputMake.focus(); 
    }else{
        inputMake.style.border="1px solid green";
        inputMake.focus();
        // return false;
    }

    if(inputColor.value ==''){
        inputColor.style.border="1px solid red";
        colorErr.textContent = "Color should be filled";
        // inputColor.focus(); 
    }else{
        inputColor.style.border="1px solid green";
        inputColor.focus();
        // return false;
    }


    if(date.value ==''){
        date.style.border="1px solid red";
        dateErr.textContent = "Date should be filled";
        // date.focus(); 
    }else{
        date.style.border="1px solid green";
        date.focus();
        // return false;
    }
    
    
    if(inputType.value ==''){
        inputType.style.border="1px solid red";
        typeErr.textContent = "Type should be filled";
        // inputType.focus(); 
    }else{
        inputType.style.border="1px solid green";
        inputType.focus();
        // return false;
    }

    if(this.washers.value==""){
        asignErr.textContent = "Atleast a Washer must be assigned";
        // this.Washers.focus();
        // return false;
    }

    if(this.packages.value==""){
        packageErr.textContent = "Atleast a package must be selected";
        // this.packages.focus();
        // return false;
    }
    if(this.payment.value==""){
        paymentErr.textContent = "A payment package must be selected";
        // this.packages.focus();
        // return false;
    }
    
    
   
    // if(Washers.value ==''){
    //     Washers.style.border="2px solid red";
    //     asignErr.textContent = "Atleat a Washer should be asigned"
    //     Washers.focus(); 
    // }else{
    //     Washers.style.border="1px solid green";
    //     Washers.focus();
    //     return false;
    // }
    // if(Payment.value ==''){
    //     Payment.style.border="2px solid red";
    //     paymentErr.textContent = "Select a Payment pakage"
    //     Payment.focus(); 
    // }else{
    //     Payment.style.border="2px solid green";
    //     Payment.focus();
    //     return false;
    // }

}        
   
