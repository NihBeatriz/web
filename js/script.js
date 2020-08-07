document.querySelector(".hamburguer").addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
});

document.querySelector("#qtde").addEventListener("change", attPreco);
document.querySelector("#js").addEventListener("change", attPreco);
document.querySelector("#layout-sim").addEventListener("change", attPreco);
document.querySelector("#layout-nao").addEventListener("change", attPreco);
document.querySelector("#prazo").addEventListener("change", function(){
    const prazo = document.querySelector("#prazo").value;
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semana(s)`;
    attPreco();
});

function attPreco(){
    const qtde = document.querySelector("#qtde").value;
    const temJS = document.querySelector("#js").checked;
    const comLayout = document.querySelector("#layout-sim").checked;
    const prazo = document.querySelector("#prazo").value;

    let preco = qtde * 100;
    if(temJS) preco *= 1.1;
    if(comLayout) preco += 500;
    let taxaUrgencia = 1 - (prazo * 0.1);
    preco *= 1 + taxaUrgencia;

    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`;
}