const container = document.querySelector('.container')
const btns = document.querySelectorAll('.btn')

imglist =["bg1","bg2","bg3","bg4","bg5","bg6"]

index=0

btns.forEach((button) =>{
    button.addEventListener('click',()=>{
        if(button.classList.contains('btn-left'))
        {
            index--;
            if(index<0)
            {
                index=imglist.length-1
            }
            container.style.background = `url("media/${imglist[index]}.jpg") center/cover`
        
        }
        else{
            index++;
            if(index===imglist.length)
            {
                index=0
            }
            container.style.background = `url("media/${imglist[index]}.jpg") center/cover`
            
        }
    })

})

