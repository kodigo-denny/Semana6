//setTimeout 

 const pantalla=document.querySelector('body')
const num = document.querySelector('h1')
/*
 let retardo=setTimeout(()=>{

     pantalla.style.backgroundColor='green'
     clearTimeout(retardo)
     console.log('se ha limpiado el retardo')

 },5000)
*/

//setInteval *****************************************************************************
/*
 let contador=0; 

 let newContador=setInterval(()=>{
    
     contador>20 ? clearInterval(newContador) : num.innerText = contador++ //console.log(contador++)

 },1000)
*/
//window.requestAnimationFrame()*****************************************************************
/*
 function holaMundo(){
   let saludo=window.requestAnimationFrame(holaMundo)
    
   console.log('hola mundo')

   saludo>1000 ? window.cancelAnimationFrame(saludo):null

 }
 holaMundo()

*/