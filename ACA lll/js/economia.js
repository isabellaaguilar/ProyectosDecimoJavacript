let contador=true,
       nav=document.querySelector('nav'),
       bt=document.querySelector('.bt_menu'),
       menu=document.querySelector(".fas");
       menu.addEventListener('click',menuresponsive);
  function menuresponsive(){
    if(contador){
 	    nav.style.transition="0.7s";
      nav.style.left="0";
      contador=false;
    }else{
      contador=true;
 	    nav.style.transition="0.7s";
      nav.style.left="-100%";
    }
    }
  function calcular(){
      var luzR = luz()
      var aguaR = agua()
      var cableR = cable()
      var internetR = internet()
      total(aguaR, luzR, internetR, cableR)
      var luzR2 = luz2()
      var aguaR2 = agua2()
      var cableR2 = cable2()
      var internetR2 = internet2()
      total2(aguaR2, luzR2, internetR2, cableR2)
      total3()
      var operacionR = operacion()
      alimentacion(operacionR)
      salud(operacionR)
      entretenimiento(operacionR)
      ahorro(operacionR)
      gastosI(operacionR)
  }
   function luz(){
      var luz=document.getElementById("luz").value
      var ingresos=document.getElementById("ingresos").value
      resultadoluz=luz*100/ingresos
      luz1=document.getElementById("luz1")
      luz1.innerHTML=luz1.innerHTML+`${Math.round(Number(resultadoluz))}%`
      return resultadoluz
   }
   function agua(){
      var ingresos=document.getElementById("ingresos").value
      var agua=document.getElementById("agua").value
      resultadoagua=agua*100/ingresos
      agua1=document.getElementById("agua1")
      agua1.innerHTML=agua1.innerHTML+`${ Math.round( Number(resultadoagua))}%`
      return resultadoagua
   }
   function cable(){
      var ingresos=document.getElementById("ingresos").value
      var cable=document.getElementById("cable").value
      resultadocable=cable*100/ingresos
      cable=document.getElementById("cable1")
      cable1.innerHTML=cable1.innerHTML+`${Math.round(Number(resultadocable))}%`
      return resultadocable;
   }
   function internet(){
      var internet=document.getElementById("internet").value
      var ingresos=document.getElementById("ingresos").value
      resultadointernet=internet*100/ingresos
      internet=document.getElementById("inter1")
      inter1.innerHTML=inter1.innerHTML+`${Math.round(Number(resultadointernet))}%`
      return resultadointernet;
   }
  function total(resultadoagua,resultadoluz,resultadointernet,resultadocable){
      total1=document.getElementById("total1")
      var total=resultadoagua+resultadoluz+resultadointernet+resultadocable;
      total1.innerHTML=total1.innerHTML+`${Math.round(Number(total))}%`
   }
  function luz2(){
      var luz2=document.getElementById("luz").value
      resultadoluz2=luz2*12
      luz2=document.getElementById("luz2")
      luz2.innerHTML=luz2.innerHTML+`₡${resultadoluz2}`
      return resultadoluz2;
   }
   function agua2(){
      var agua2=document.getElementById("agua").value
      resultadoagua2=agua2*12
      agua2=document.getElementById("agua2")
      agua2.innerHTML=agua2.innerHTML+`₡${resultadoagua2}`
      return resultadoagua2;
   }
    function cable2(){
      var cable2=document.getElementById("cable").value
      resultadocable2=cable2*12
      cable2=document.getElementById("cable2")
      cable2.innerHTML=cable2.innerHTML+`₡${resultadocable2}`
      return resultadocable2;
   }
   function internet2(){
      var internet2=document.getElementById("internet").value
      resultadointernet2=internet2*12  
      internet2=document.getElementById("inter2")
      inter2.innerHTML=inter2.innerHTML+`₡${resultadointernet2}`
      return resultadointernet2;
    
   }
  function total2(resultadoagua2,resultadoluz2,resultadointernet2,resultadocable2){
      var cajatotal2=document.getElementById("total2")
      var resultadointernet=resultadoagua2+resultadoluz2+resultadointernet2+resultadocable2;
      cajatotal2.innerHTML=cajatotal2.innerHTML+`₡${Math.round(Number(resultadointernet))}`
   }
  function total3(){
      var luz1=document.getElementById("luz").value
      var agua1=document.getElementById("agua").value
      var cable1=document.getElementById("cable").value
      var internet1=document.getElementById("internet").value
      var cajatotal3=document.getElementById("gastosf2")
      var total3= Number(luz1)+ Number(agua1)+ Number(cable1)+ Number(internet1);
      cajatotal3.innerHTML=cajatotal3.innerHTML+`₡${(Number(total3))}`
   }
   function operacion(){
      var ingresos=document.getElementById("ingresos").value
      var luz1=document.getElementById("luz").value
      var agua1=document.getElementById("agua").value
      var cable1=document.getElementById("cable").value
      var internet1=document.getElementById("internet").value
      var ingresos=document.getElementById("ingresos").value
      var resultado1=Number(luz1)+ Number(agua1)+ Number(cable1)+ Number(internet1);
      var resultado2=Number(ingresos)-resultado1
    return resultado2;
   }
   function alimentacion(operacion){
     resA=operacion*0.35
     alimentacion2=document.getElementById("alimentacion2")
     alimentacion2.innerHTML=alimentacion2.innerHTML+`₡${Math.round(Number(resA))}`
  }
 function salud(operacion){
     resS=operacion*0.20
     salud2=document.getElementById("salud2")
     salud2.innerHTML=salud2.innerHTML+`₡${Math.round(Number(resS))}`
  }
  function entretenimiento(operacion){
     resE=operacion*0.15
     entretenimiento2=document.getElementById("entretenimiento2")
     entretenimiento2.innerHTML=entretenimiento2.innerHTML+`₡${Math.round(Number(resE))}`
  }
  function ahorro(operacion){
     resAH=operacion*0.05
     ahorro2=document.getElementById("ahorro2")
     ahorro2.innerHTML=ahorro2.innerHTML+`₡${Math.round(Number(resAH))}`
  }
  function gastosI(operacion){
     resG=operacion*0.25
     gastosi2=document.getElementById("gastosi2")
     gastosi2.innerHTML=gastosi2.innerHTML+`₡${Math.round(Number(resG))}`
  }
