const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector('.form input'),
generateBtn = wrapper.querySelector(".form button"),
qrimg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener('click',()=>
{
    let qrval = qrInput.value;
    if(!qrval) return;
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrval}`
    wrapper.classList.add('active')
})