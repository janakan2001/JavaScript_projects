var i=0;
var time=5000;
const cont = document.querySelector('.container')

function timechng()
{
   
    if(i<6)
    {
        i++;
    }
    else{
        i=1;
    }
    setTimeout("timechng()",time)
    console.log(i)
    cont.style.background = `url("media/bg${i}.jpg") center/cover`

    
}

window.onload=timechng();