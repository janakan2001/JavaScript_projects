const increase = document.querySelector('.increase')
const decrease = document.querySelector('.decrease')
const reset = document.querySelector('.reset')

let ans = document.getElementById('ans')

index=0
ans.innerHTML=index

increase.addEventListener('click',()=>{
    index++
    ans.innerHTML=index
    

})

decrease.addEventListener('click',()=>{
    if(index>0)
    {
        index--;
    }
    ans.innerHTML=index
})

reset.addEventListener('click',()=>{
    index=0
    ans.innerHTML=index

})
