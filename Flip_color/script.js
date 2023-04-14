let btn = document.querySelector("button")
let color= document.getElementById("container")
let text = document.getElementById("cont3")
let hexval = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

let button2 = document.querySelector(".btn2")

btn.addEventListener('click',func)

function func()
{
    
    let col = "#"

    for(let i=1;i<=6;i++)
    {
        let res = randomindex()
        col = col+res

    }

    color.style.backgroundColor=col
    text.innerHTML = col


}

function randomindex()
{
    let no = Math.floor(Math.random()*16)
    return hexval[no];
}

