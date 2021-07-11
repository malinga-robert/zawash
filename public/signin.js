  

    var validation =() =>{
        //condition to check if
        var inputUsername = document.getElementById('username');
        var inputPassword = document.login.password;
       
        

        if(inputUsername.value ==''){
            inputUsername.style.border="1px solid red";
            inputUsername.focus(); 
        }else{
            inputUsername.style.border="1px solid green";
            inputUsername.focus();
        }
        if(inputPassword.value ==''){
            inputPassword.style.border="1px solid red";
            inputPassword.focus(); 
        }else{
            inputPassword.style.border="1px solid green";
            inputPassword.focus();
        }

        if(inputUsername.value.length <=2 || inputUsername.value.length>15)  {
            // inputUsername.alert('Enter valid length')
            // inputPassword.focus();
        
            inputUsername.style.border="1px solid red";
            inputUsername.focus();
        }else{
            inputUsername.style.border="1px solid green";
            inputUsername.focus();
        }

        if(inputPassword.value.length <=2 || inputPassword.value.length >8){
    
            inputPassword.style.border="1px solid red";
            inputPassword.focus();
        }else{
            inputUsername.style.border="1px solid green";
            inputUsername.focus();
        }
        
           
    }
    // var checklength =() =>{
       
    // }
    
    
    

