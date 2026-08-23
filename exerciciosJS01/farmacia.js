const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit" , (e)=>{
    const medicamento = document.querySelector("#inMedicamento").value
    const preco = Number(document.querySelector("#inPreco").value)

    const total = preco * 2
    const promocao = total - (total % 1)


    resp1.innerText = "Promoção de " + medicamento
    resp2.innerText = ` leve 2 por Apenas R$: ${promocao.toFixed(2)}`

    e.preventDefault()
})