$(document).ready(()=>{
    $(window).scroll(()=>{
        if(this.scrollY > 20){
            $('.menu').addClass("menu-scrolly");
        }else{
            $('.menu').removeClass("menu-scrolly");
        }
    })
})



// addEventListener('scroll', e =>{
//     console.log(scrollY)
// })

// const button1= document.getElementById('skill__click1')
// const button2= document.getElementById('skill__click2')
// const block1= document.getElementById('skill-show1')
// const block2= document.getElementById('skill-show2')

// button1.addEventListener('click',()=>{
//     block1.classList.toggle('show')
// })
// button2.addEventListener('click',()=>{
//     block2.classList.toggle('show')
// })