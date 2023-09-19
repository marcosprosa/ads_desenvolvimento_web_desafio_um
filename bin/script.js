function exibirMensagemDeSucesso() {
    const mensagemSucesso = document.getElementById("mensagem-sucesso");

    mensagemSucesso.style.display = "block";

    
    setTimeout(function () {
        mensagemSucesso.style.display = "none";
    }, 3000); 
}

document.getElementById("salvar-button").addEventListener("click", function () {
    exibirMensagemDeSucesso();
});
