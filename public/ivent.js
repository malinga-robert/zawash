// accessing elements by id
var itemy = document.getElementById('item');
var currentdate = document.getElementById('currentdate');
var price = document.getElementById('price');


// accessing error elements by id
var itemErr = document.getElementById('itemErr');
var costErr = document.getElementById('costErr');
var dateErr = document.getElementById('dateErr');


var validate = ()=>{
    // validating item
    if(itemy.value==""){
        itemErr.textContent = "Please Select An Item"
        itemy.style.border="1px solid red"
        return false;
    }else{
        itemy.style.border="1px solid green"
        itemErr.textContent = ""
    }

    // validating price
    if(price.value ==""){
        price.style.border="1px solid red"
        costErr.textContent = "Please Enter The Price Of Item"
        return false;
    }else{
        price.style.border="1px solid green"
        costErr.textContent = ""
    }

    // validating currentdate
    if(currentdate.value ==""){
        currentdate.style.border="1px solid red"
        dateErr.textContent = "Date Must Be Selected"
        return false;
        
    }else{
        currentdate.style.border="1px solid green"
        dateErr.textContent = ""
        
    }
  

}

