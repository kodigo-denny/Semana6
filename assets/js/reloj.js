const hora = document.querySelector('h1')
const boton = document.querySelector('button')

let newContador=setInterval(()=>{
   let time = new Date()
   //hora.innerText = time.toLocaleTimeString()
   let horaMilitar = time.getHours()

   let horaNormal = ""
    let final = "AM"

   if(horaMilitar == 0)
        horaNormal = 12
    else if(horaMilitar >= 1 && hora <=12)
        horaNormal = horaMilitar
    else if(horaMilitar >= 13)
        horaNormal = horaMilitar - 12

    if(horaMilitar>=12 && horaMilitar<=23)
        final = "PM"

   hora.innerText = `${horaNormal}:${time.getMinutes()}:${time.getSeconds()} ${final}`
    //contador>20 ? clearInterval(newContador) : num.innerText = contador++ //console.log(contador++)

},1000)

boton.addEventListener('click', (e) => {
    clearInterval(newContador)
})