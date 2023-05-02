let ip = document.getElementById('ip');

function display(num)
{
    ip.value = ip.value+num;
}

function calculate()
{
    try{
        ip.value = eval(ip.value);
    }
    catch(err)
    {
        alert("Invalid")
    }
}

function Clear()
{
    ip.value = "";
}

function del()
{
    ip.value = ip.value.slice(0,-1)
}