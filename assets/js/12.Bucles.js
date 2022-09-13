//BUCLES 
//Bucles son una estructura de control de flujo que se van repitiendo 
//dependiendo de una condición dada 

//WHILE(mientras)
/*
 let timer=10; 

 while(timer >= 10 && timer<20){
    timer++
    if(timer % 2 == 0){
        console.log("timer:"+  timer)
    }
 }
*/

//DO WHILE(haz - mientras)
//se va a ejecutar siempre 
//minimo una vez 
//primero hace y luego evalua
/*
 let timer=40; 

 do {
     timer++
     console.log('timer:'+timer)

 }while(timer>20 && timer < 30)
*/
//FOR  (por)
/*
 let frutas=['platano','naranja','sandia','melón']

 for(let i=0;i<frutas.length;i++){
     console.log(frutas[i])
 }
*/
//FOR OF (POR)
//Recorremos un array y nos devuelve 
// los elementos 

//let frutas=['platano','naranja','sandia','melón']
/*
 for(const fruta of frutas){
   console.log(fruta)
 }
*/
//FOR IN (POR )
//Recorre un array y nos devuelve los indices 
/*
for(const fruta in frutas){
    console.log(fruta)
}
*/

//RECORREMOS OBJETOS CON FOR IN 
/*
const mascota={
    nombre:"Pipo",
    raza:"Pastor Aleman",
    edad:3, 
    propietario:"Luis Fernandez",
    aficciones:['saltar','jugar','morder']
}

for(const propiedad in mascota){
    console.log(`key:${propiedad},value:${mascota[propiedad]}`)
}
*/
/*
for(let i = 1; i <= 2; i++ ){

    for(let j = 1; j <= 2; j++){
        console.log("Valor de i: "+ i + " valor de j: "+ j)
    }
}
*/
for(let i = 1; i <= 10; i++){
    if(i % 2 == 0)
        continue;
    console.log(i)
    if(i>=5)
        break;
}