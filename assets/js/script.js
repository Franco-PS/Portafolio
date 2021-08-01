$(document).ready(()=>{
    $(window).scroll(()=>{
        if(this.scrollY > 20){
            $('.menu').addClass("menu-scrolly");
        }else{
            $('.menu').removeClass("menu-scrolly");
        }
    })
})