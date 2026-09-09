const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit" , (e)=>{
    e.preventDefault()

    const ladoA = Number(document.querySelector("#inLadoA").value)
    const ladoB = Number(document.querySelector("#inLadoB").value)
    const ladoC= Number(document.querySelector("#inLadoC").value)

    if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB){
        resp1.innerText = "Estas medidas podem formar um triângulo."

        if (ladoA == ladoB && ladoB == ladoC){
            resp2.innerText = "Triângulo tipo equilátero."
        }else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
            resp2.innerText = "Triângulo tipo isósceles"
        }else{
            resp2.innerText = "Triângulo tipo escaleno"
        }
    }else{
        resp1.innerText = "Estas medidas não formam um triângulo."
        resp2.innerText=""
    }
})