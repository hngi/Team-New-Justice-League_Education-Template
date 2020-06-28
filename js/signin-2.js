

// hide or show password
var eyeCon=$("#eyeCon");
var showPassword=false;
var passwordField=$("#passwordField");
eyeCon.click(function(e){
    $(this).toggleClass("fa-eye-slash");
    showPassword=!showPassword;
    if(showPassword){
        passwordField.attr('type','text');
    }else{
        passwordField.attr('type','password');
    }
});

//validate input
var email=$("#emailField");
var password=$("#passwordField");
var error=$("#error");
var signIn=$("#signIn");

signIn.click(function(){
    //validaton
    if(email.val()===''){
        error.text("Input a valid email");
    }else if(password.val()===''){
        error.text("Input a password");
    }
    else{
        error.text("");
    }
})

