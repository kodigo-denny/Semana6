const btnGuardar = document.querySelector("#btnGuardar")
const btnCancelar = document.querySelector("#btnCancelar")

const formulario = document.querySelector("#formulario")

const controles = document.querySelectorAll("input")
const tablaBody = document.querySelector("#tablaBody")



for(const temp of controles){
    //console.log(temp)
    temp.addEventListener('focus', (e) =>{
        temp.style.backgroundColor = 'yellow'
    })
    temp.addEventListener('blur', (e) =>{
        temp.style.backgroundColor = 'white'
    })
    temp.addEventListener('mouseover', (e) =>{
        if(temp.style.backgroundColor != 'yellow')
            temp.style.backgroundColor = 'gray'
    })
    temp.addEventListener('mouseout', (e) =>{
        if(temp.style.backgroundColor != 'yellow')
            temp.style.backgroundColor = 'white'
    })
}

btnGuardar.addEventListener('click', (e) => {
    let nombre = formulario.children[0].children[1].value
    let apellido = formulario.children[1].children[1].value
    let telefono = formulario.children[2].children[1].value
    let correo = formulario.children[3].children[1].value

    let fila = document.createElement("tr")
    fila.innerHTML = `<td>${nombre}</td><td>${apellido}</td><td>${telefono}</td><td>${correo}</td>`

    tablaBody.append(fila)
    //console.log(formulario.children[0].children)
})

btnCancelar.addEventListener('click', (e) => {
    formulario.children[0].children[1].value = ""
    formulario.children[1].children[1].value = ""
    formulario.children[2].children[1].value = ""
    formulario.children[3].children[1].value = ""
})

/*
btnGuardar.addEventListener('click', evento)

function evento(){
    alert('Titulo')
}*/

/*
const input = document.querySelector("input")

input.addEventListener('focus', (e) => {
    input.style.backgroundColor = 'yellow'
})

input.addEventListener('blur', (e) => {
    input.style.backgroundColor = 'white'
})
*/