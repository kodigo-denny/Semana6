const btnSumar = document.querySelector("#btnSumar")

btnSumar.addEventListener('click', (e) =>{
    const Num1 = document.querySelector('#Num1')
    const Num2 = document.querySelector('#Num2')

    const resultado = document.querySelector("#resultado")
    resultado.value = Number(Num1.value)+Number(Num2.value)
    console.log(e)
})

const caja = document.querySelector("#caja")
const titulo = document.querySelector("#titulo")

caja.addEventListener('click', (e) => {
    titulo.innerText = e.clientX + ", " + e.clientY
    console.log(e)
})