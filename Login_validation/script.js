const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');


form.addEventListener('submit',(e)=>
{
    e.preventDefault();
    validateinput();
})

function validateinput()
{
    const usernameval = username.value.trim();
    const emailidval = email.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();

    if(usernameval === '')
    {
        seterror(username,'Username is required')
    }
    else
    {
        setsucess(username)
    }

    if(emailidval === '')
    {
        seterror(email,'Email is required')
    }
    else if(!validateEmail(emailidval))
    {
        seterror(email,'Please Enter a Valid Email')
    }
    else
    {
        setsucess(email)
    }

    if(passwordval === '')
    {
        seterror(password,'Password is required')
    }
    else if(passwordval.length<8)
    {
        seterror(password,'Password must be atleast 8 Characters long')
    }
    else{
        setsucess(password)
    }

    if(cpasswordval ==='')
    {
        seterror(cpassword,'Confirm Password is required')
    }
    else if(cpasswordval!== passwordval)
    {
        seterror(cpassword,'Password does not Match')
    }
    else
    {
        setsucess(cpassword)
    }

}

function seterror(element,message)
{
    const inputgroup = element.parentElement;
    const errorelement = inputgroup.querySelector(".error")

    errorelement.innerText=message;
    inputgroup.classList.add('error')
    inputgroup.classList.remove('sucess')



}

function setsucess(element,message)
{
    const inputgroup = element.parentElement;
    const errorelement = inputgroup.querySelector(".error")

    errorelement.innerText='';
    inputgroup.classList.add('sucess')
    inputgroup.classList.remove('error')



}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };