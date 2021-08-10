(function(){
    let actualizarhora=function(){
        let fecha= new Date(),
        horas=fecha.getHours(),
        ampm,
        minutos=fecha.getMinutes(),
        segundos=fecha.getSeconds(),
        diasemana=fecha.getDay(),
        dia=fecha.getDate(),
        mes=fecha.getMonth(),
        year=fecha.getFullYear();

        let phoras=document.getElementById('horas'),
            pampm=document.getElementById('ampm'),
            pminutos=document.getElementById('minutos'),
            psegundos=document.getElementById('segundos'),
            pdiasemana=document.getElementById('diasemana'),
            pdia=document.getElementById('dia'),
            pmes=document.getElementById('mes'),
            pyear=document.getElementById('year');
        let semana=['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sabado'];
        pdiasemana.innerHTML=semana[diasemana];
        pdia.innerHTML=dia;
        let tmeses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Setiembre','Octubre','Noviembre','Diciembre'];
        pmes.innerHTML=tmeses[mes];
        pyear.innerHTML=year;
        if(horas >=12){
            horas=horas-12;
            ampm='PM';
        }
        else 
        ampm='AM'
        if (horas==0){
            horas=12;
        }
        phoras.innerHTML=horas;
        pampm.innerHTML=ampm;
          if(minutos<10){
            minutos='0'+minutos;
        }
        if(segundos<10){
            segundos='0'+segundos;
        }
        pminutos.innerHTML=minutos;
        psegundos.innerHTML=segundos;
    }
    let intervalo=setInterval(actualizarhora,1000);
}())

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
