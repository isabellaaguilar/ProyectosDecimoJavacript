$(document).ready(function(){
   let elementos=document.querySelectorAll("li");
   for(let i=0;i<elementos.length;i++){
       elementos[i].addEventListener('mouseover',pimagen);
       elementos[i].addEventListener('mouseout',qimagen);
   }
});


function pimagen(m){
    if(m.target==elem1){
        $("elem1").addClass("destacar");
        $("#solo").attr("src","imagenes/html5.png")
        $("#solo").attr("width","250px");
        $("#solo").attr("height","250px"); 
    }
    else
    if(m.target==elem2){
        $("elem2").addClass("destacar");
        $("#solo").attr("src","imagenes/css.png")
        $("#solo").attr("width","250px");
        $("#solo").attr("height","250px"); 
    }
    else
    if(m.target==elem3){
        $("elem3").addClass("destacar");
        $("#solo").attr("src","imagenes/php.jpg")
        $("#solo").attr("width","250px");
        $("#solo").attr("height","250px"); 
    }
    else
    if(m.target==elem4){
        $("elem4").addClass("destacar");
        $("#solo").attr("src","imagenes/js.png")
        $("#solo").attr("width","250px");
        $("#solo").attr("height","250px"); 
    }
}


function qimagen(e){
    if(e.target==elem1){
        $("#elem1").removeClass("destacar");
        $("#solo").removeAttr("src");
        $("#solo").removeAttr("width","250px");
        $("#solo").removeAttr("height","250px");
    }
    else
    if(e.target==elem2){
        $("#elem2").removeClass("destacar");
        $("#solo").removeAttr("src");
        $("#solo").removeAttr("width","250px");
        $("#solo").removeAttr("height","250px");
    }
    else
    if(e.target==elem3){
        $("#elem3").removeClass("destacar");
        $("#solo").removeAttr("src");
        $("#solo").removeAttr("width","250px");
        $("#solo").removeAttr("height","250px");
    }
    else
    if(e.target==elem4){
        $("#elem4").removeClass("destacar");
        $("#solo").removeAttr("src");
        $("#solo").removeAttr("width","250px");
        $("#solo").removeAttr("height","250px");
    }
}



let contador=true,
    nav=document.querySelector('nav'),
    bt=document.querySelector('.bt_menu'),
    menu=document.querySelector(".icon-menu");
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
