window.onload =()=>{

    const valor1 = document.querySelector("#valor1");
    const valor2 = document.querySelector("#valor2");
    const btnR = document.querySelector("#soma");
    const Resultado = document.querySelector("#resultado");

btnR.addEventListener("click", ()=>{
        var caixa1 = valor1.value;
        var caixa2 = valor2.value;
        var caixa3 = Resultado.value;
        var r = Number(caixa1) + Number(caixa2);

        var correto = r == caixa3
            if(correto){
                alert("Está correto!");
            } else{
                alert("Está errado!")
            }
        });

};