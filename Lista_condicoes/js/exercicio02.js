const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit" , (e)=>{
    e.preventDefault()

    const velocidadePermitida = Number(document.querySelector("#inVelocidadePermitida").value)
    const velocidadeCondutor = Number(document.querySelector("#inVelocidadeCondutor").value)

    const limite = velocidadePermitida * 1.20

    if (velocidadeCondutor <= velocidadePermitida){
        resp.innerText="Sem Multa"
    }else if (velocidadeCondutor <= limite){
        resp.innerText ="Multa Leve"
    }else{
        resp.innerText = "Multa Grave!"
    }
})