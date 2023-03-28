let nav=document.getElementById('nav-ul');
let barBtn=document.querySelector('.one');
let upBtn=document.querySelector('button');
barBtn.addEventListener("click", function(){
    barBtn.classList.toggle('fa-times');
    nav.classList.toggle('appear');
})
window.onscroll= function(){
    barBtn.classList.remove('fa-times');
    nav.classList.remove('appear');
    if(window.scrollY >= 400){
        upBtn.style.display='block'
    }else{
        upBtn.style.display='none'
    }
}

upBtn.onclick=function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
}