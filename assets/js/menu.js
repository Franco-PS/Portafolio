const barr= document.getElementById('menu');
let scrolly= document.documentElement.scrollTop;        
// console.log(scrolly);
window.addEventListener('scroll', ()=>{
    let scrolly= document.documentElement.scrollTop;        
    // console.log(scrolly);
    if(scrolly <= 780){
        barr.classList.remove('menu-scrolly');
    }else{
        barr.classList.add('menu-scrolly');
    }
})