
function login() {
    const senha = document.getElementById("password").value;
    const mensagem = document.getElementById("mensagem-erro");

    if (senha === "AxelCross") {
        mensagem.textContent = "";
        window.location.href = "terminal.html";
    } else {
        mensagem.textContent = "⚠ ACESSO NEGADO.";
    }
}

function verificarArquivo12() {

    const senha = document.getElementById("senhaArquivo12").value;

    if (senha === "William2030") {

        document.getElementById("mensagem").textContent =
            "ACCESS GRANTED.";

        setTimeout(function() {
            window.location.href = "arquivo12-secreto.html";
        }, 1000);

    } else {

        document.getElementById("mensagem").textContent =
            "ACCESS DENIED. CREDENCIAL INVÁLIDA.";

    }
}