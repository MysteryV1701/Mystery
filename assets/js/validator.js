const form = document.querySelector('#register-form'); 
const username = document.querySelector('#user-username');
const email = document.querySelector('#user-email');
const telephone = document.querySelector("#user-telephone");
const password = document.querySelector('#user-password');
const password2 = document.querySelector('#user-password2');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
   // get the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim(); 
    const telephoneValue = telephone.value.trim();
    if(usernameValue === '') {
       // show error
       // add error class
       setErrorFor(username,'User Name cannot be blank');
     } else {
       // add success class
       setSuccessFor(username);
    }
    if(telephoneValue === ''){
      setErrorFor(telephone, "Hãy nhập vào số điện thoại của bạn");
    }
    else{
      setSuccessFor(telephone);
    }

    if(emailValue === '') {
        // show error
        // add error class
        setErrorFor(email,'Email cannot be blank');
      } else if(!isEmail(emailValue)){
        
        setErrorFor(email,'Email is not valid');
     }
     else{
         setSuccessFor(email)
     }

     if(passwordValue === '') {
        // show error
        // add error class
        setErrorFor(password,'Password cannot be blank');
      } else {
        // add success class
        setSuccessFor(password);
     }

     if(password2Value === '') {
        // show error
        // add error class
        setErrorFor(password2,'Password cannot be blank');
      }else if(password2Value!= passwordValue){
        setErrorFor(password2,'Password does not match');
      } 
      else {
        // add success class
        setSuccessFor(password2);
     }

}
function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-field
    const para = formControl.querySelector('p');
   // add error message 
    para.innerText= message;
   // add error class
    formControl.className = 'form-field error';
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className='form-field success'
}
function isEmail (email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
