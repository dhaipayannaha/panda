$(document).ready(function(){
    $("#login-submit").click(function(){
        const emailField = $("#user-email");
        const userEmail = emailField.val();
        const passwordField = $("#user-password");
        const userPassword = passwordField.val();

        if (userEmail === "dhaipayan@gmail.com" && userPassword === "CanThree"){
            window.location.href ='index.html';
        }
    });
});