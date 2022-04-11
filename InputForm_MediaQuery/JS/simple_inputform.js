const text=document.querySelector('#text');
const textError=document.querySelector('.text-error');
text.addEventListener('input', function(){
    let namRegex= new RegExp(/^[A-Z][a-z]{2,}$/);
    if(namRegex.test(text.value))
     textError.textContent="";
     else
     textError.textContent="Name is incorrect";
})
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input',function(){
     let pattern = RegExp('^[A-Z a-z]{1,}([+-_.]*)[A-Z a-z 0-9 _+-.]*[@]{1}[A-Z a-z 0-9 +_-]{1,}[.]{1}[a-z]{2,3}([.]{1}[a-z]{2})*$');
      if(pattern.test(email.value))
           emailError.textContent='';
       else
           emailError.textContent="Email is Incorrect";
   });

   
   const number = document.querySelector('#number');
   const numbererror = document.querySelector('.number-error');
   number.addEventListener('input', function () {
   let numberpattern = RegExp('^[1-9]{1}[0-9]{9}$');
       if (numberpattern.test(number.value))
           numbererror.textContent = ' ';
        else
           numbererror.textContent = 'Number is Incorrect!';
   });

   const pwd = document.querySelector('#pwd');
   const passworderror = document.querySelector('.pwd-error');
   pwd.addEventListener('input', function () {
   let passwordpattern = RegExp('^(?=[0-9 A-Z a-z !@#$%^&*();:]{8,}$)(?=.*[A-Z]{1,})(?=.*[0-9]{1,})(?=.*[!@#$%^&*();:]{1,}).*$');
       if (passwordpattern.test(pwd.value))
           passworderror.textContent = ' ';
       else
           passworderror.textContent = 'Password is Incorrect!';
});

const salary=document.querySelector('#salary');
const output=document.querySelector('.salary-output');
output.textContent=salary.value;
salary.addEventListener('input',function(){
    output.textContent=salary.value;
})