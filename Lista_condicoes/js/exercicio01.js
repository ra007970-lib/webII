const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit" , (e)=>{
    e.preventDefault();

    const numero = Number(document.querySelector("#inNumero").value);

    // usando o if e else
    if (numero % 2 === 0){
        resp1.innerText = `${numero} é par!`;

    }else{
        resp1.innerText= `${numero} é ímpar`;
    }

    // usando operador ternário
    resp2.innerText = (numero % 2 === 0)
        ? `Resultado com ternário: ${numero} é par!`
        :`Resultado com ternério: ${numero} é ímpar!`;
})

frm.addEventListener("reset" ,()=>{
    resp1.innerText="";
    resp2.innerText="";
})