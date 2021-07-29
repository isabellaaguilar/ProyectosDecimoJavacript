let contador=true,
    nav=document.querySelector('nav'),
    bt=document.querySelector('.bt_menu'),
    menu=document.querySelector(".fas");
    menu.addEventListener('click',menuresponsive);
    //bt.addEventListener('click',menuresponsive);
    function menuresponsive(){
        if(contador){
 	    nav.style.transition="0.7s";
            nav.style.left="0";
            contador=false;
        }
        else{
            contador=true;
 	    nav.style.transition="0.7s";
            nav.style.left="-100%";
        }
    }
