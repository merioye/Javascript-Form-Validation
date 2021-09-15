let userNameDiv = document.querySelector('#username-div');
let emailDiv = document.querySelector('#email-div');
let phoneDiv = document.querySelector('#phone-no-div');
let passwordDiv = document.querySelector('#password-div');
let confirmPasswordDiv = document.querySelector('#confirm-password-div');
let userName = document.querySelector('#username');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone-number');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm-password');
let submitBtn = document.querySelector('#submit-btn');


// Variables for Cheking which input field is has valid data
let isUsernameValid = false;
let isEmailValid = false;
let isPhoneValid = false;
let isPasswordValid = false;
let isConfirmPasswordValid = false;


// Validating Username field
const validateUsername = ()=>{
    let value = userName.value.trim();
    
    if(value.length<3){
        if(value==''){
            userName.classList.remove('green-border');
            userName.classList.add('red-border');
            userNameDiv.nextElementSibling.textContent = "";
            userNameDiv.nextElementSibling.insertAdjacentHTML('afterbegin','<p style="color:red">Username cannot be blank</p>');
        }else{
            userName.classList.remove('green-border');
            userName.classList.add('red-border');
            userNameDiv.nextElementSibling.textContent = "";
            userNameDiv.nextElementSibling.insertAdjacentHTML('afterbegin', '<p style="color:red">Username must be minimum of 3 characters</p>');
        }
    }else{
        userName.classList.remove('red-border');
        userName.classList.add('green-border');
        isUsernameValid = true;
        userNameDiv.nextElementSibling.textContent = "";
    }
}


// Validating Email field
const validateEmail = ()=>{
    let value = email.value.trim();
    let isLastDot = false;
    let hasNotAmpersand = true;
    let ampersandIndex = value.lastIndexOf('@');
    let dotIndex = value.lastIndexOf('.');
    let isAmpersandPositionWrong = true;

    if(value[value.length-1]=='.'){
        isLastDot = true;
    }
    if(value.includes('@')){
        hasNotAmpersand = false;
    }
    if(ampersandIndex!=-1 && dotIndex!=-1){
        if(value.slice(ampersandIndex,dotIndex+1).length>2 && value.slice(0,ampersandIndex+1).length>2){
            isAmpersandPositionWrong = false;
        }
    }
    if(value.length==0){
        email.classList.remove('green-border');
        email.classList.add('red-border');
        emailDiv.nextElementSibling.textContent = "";
        emailDiv.nextElementSibling.insertAdjacentHTML('afterbegin','<p style="color:red">Email cannot be blank</p>');
    }else{
        if(isLastDot || hasNotAmpersand || isAmpersandPositionWrong){
            email.classList.remove('green-border');
            email.classList.add('red-border');
            emailDiv.nextElementSibling.textContent = "";
            emailDiv.nextElementSibling.insertAdjacentHTML('afterbegin','<p style="color:red">Not a valid email</p>');
        }else{
            email.classList.remove('red-border');
            email.classList.add('green-border');
            isEmailValid = true;
            emailDiv.nextElementSibling.textContent = "";
        }
    }
}




//Validating Phone field
const validatePhone = ()=>{
    let value = phone.value.trim();
    if(value.length==0){
        phone.classList.remove('green-border');
        phone.classList.add('red-border');
        phoneDiv.nextElementSibling.textContent = "";
        phoneDiv.nextElementSibling.insertAdjacentHTML('afterbegin', '<p style="color:red">Phone number cannot be blank</p>');
    }else{
        if(value.length==11){
            phone.classList.remove('red-border');
            phone.classList.add('green-border');
            isPhoneValid = true;
            phoneDiv.nextElementSibling.textContent = "";
        }else{
            phone.classList.remove('green-border');
            phone.classList.add('red-border');
            phoneDiv.nextElementSibling.textContent = "";
            phoneDiv.nextElementSibling.insertAdjacentHTML('afterbegin', '<p style="color:red">Phone number is not valid</p>');
        }
    }
}




//Validating Password field
const validatePassword = ()=>{
    let value = password.value.trim();
    if(value.length==0){
        password.classList.remove('green-border');
        password.classList.add('red-border');
        passwordDiv.nextElementSibling.textContent = "";
        passwordDiv.nextElementSibling.insertAdjacentHTML('afterbegin', '<p style="color:red">Password cannot be blank</p>');
    }else{
        if(value.length<5){
            password.classList.remove('green-border');
            password.classList.add('red-border');
            passwordDiv.nextElementSibling.textContent = "";
            passwordDiv.nextElementSibling.insertAdjacentHTML('afterbegin', '<p style="color:red">Password must be greater than 4 characters</p>');
        }else{
            password.classList.remove('red-border');
            password.classList.add('green-border');
            isPasswordValid = true;
            passwordDiv.nextElementSibling.textContent = "";
        }
    }
}




//Validating Confirm Password field
const validateConfirmPassword = ()=>{
    let value = confirmPassword.value;
    if(value.length==0){
        confirmPassword.classList.remove('green-border');
        confirmPassword.classList.add('red-border');
        confirmPasswordDiv.nextElementSibling.textContent = "";
        confirmPasswordDiv.nextElementSibling.insertAdjacentHTML('afterbegin', '<p style="color:red">Password2 cannot be blank</p>');
    }else{
        if(password.value===value){
            confirmPassword.classList.remove('red-border');
            confirmPassword.classList.add('green-border');
            isConfirmPasswordValid = true;
            confirmPasswordDiv.nextElementSibling.textContent = "";
        }else{
            confirmPassword.classList.remove('green-border');
            confirmPassword.classList.add('red-border');
            confirmPasswordDiv.nextElementSibling.textContent = "";
            confirmPasswordDiv.nextElementSibling.insertAdjacentHTML('afterbegin', '<p style="color:red">Password does not match</p>');
        }
    }
}




// Main event to check whether or not all field data is valid
submitBtn.addEventListener('click',()=>{
    validateUsername();
    validateEmail();
    validatePhone();
    validatePassword();
    validateConfirmPassword();
    
    console.log(isUsernameValid);
    console.log(isEmailValid);
    console.log(isPhoneValid);
    console.log(isPasswordValid);
    console.log(isConfirmPasswordValid);
    if(isUsernameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid){
        alert(userName.value+' Registered successfully');
    }
});