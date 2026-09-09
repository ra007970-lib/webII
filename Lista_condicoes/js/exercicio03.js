const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit" , (e)=>{
    e.preventDefault()

    const valor = Number(document.querySelector("#inValor").value)

    let tempo
    let troco

    if (valor < 1){
        resp1.innerText = "Valor Insuficiente"
        resp2.innerText=""
    }else if (valor < 1.75){
        tempo = 30
        troco = valor - 1

        resp1.innerText = `Tempo: ${tempo} min`
        resp2.innerText = `Troco R$ ${troco.toFixed(2)}`
    }else if (valor < 3){
        tempo = 60
        troco = valor - 1.75

        resp1.innerText = `Tempo : ${tempo} min`
        resp2.innerText = `Troco R$ ${troco.toFixed(2)}`
    }else{
        tempo = 120
        troco = valor - 3

        resp1.innerText = `Tempo: ${tempo} min`
        resp2.innerText = `Troco R$: ${troco.toFixed(2)}`

    }
})