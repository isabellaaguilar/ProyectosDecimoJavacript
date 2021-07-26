let band=true;
    nav=document.querySelector("nav"),
    bt=document.querySelector(".btn_menu"),
    menu=document.querySelector(".fas");
    menu=addEventListener("click",menuresponsive);
    bt.addEventListener("click",menuresponsive);
    function menuresponsive(){
        if(band){
            nav.style.transition="0.7s";
            nav.style.left="0";
            band=false;
        }
        else{
            band=true;
            nav.style.transition="0.7s";
            nav.style.left="-100%";
        }
    }