const frm = document.querySelector("form")
const resp = document.querySelector("#outResp")

frm.addEventListener("submit" , (e) =>{
    const valor = Number(document.querySelector("#inValor").value)
    const tempo = Number(document.querySelector("#inTempo").value)

    let tempoUso = (tempo - ( tempo % 15)) / 15

    if (tempo % 15 != 0) {
        tempoUso +=1
    }
    const total = tempoUso * valor

    resp.innerText = ` O valor a pagar é de : R$ ${total.toFixed(2)}`

    e.preventDefault()
})