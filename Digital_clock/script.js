let hr = document.getElementById('hours')
let min = document.getElementById('minutes')
let sec = document.getElementById('seconds')

let ampm = document.getElementById('ampm')
let dt = document.getElementById('date')

function disp()
{
    let date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hr.innerHTML=hours
    if(hours>12)
    {
        hours = hours-12
        ampm.innerHTML ='PM'
    }
    else
    {
        ampm.innerHTML = 'AM'
    }
    min.innerHTML = minutes
    sec.innerHTML = seconds

    dt.innerHTML = date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear() 
    
}

setInterval(disp,500)