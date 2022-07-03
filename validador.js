const btn = document.querySelector("#buttonEnviarmsgError");
const btnCadastro = document.querySelector("#buttonEnviarmsgErrorCadastro")
const email = document.querySelector("#email");
const msgErro = document.querySelector(".msgError");
const senha = document.querySelector("#loginSenha");
const msgErrorSenha = document.querySelector(".msgErrorSenha");

console.log({ senha })


btn.addEventListener("click", validarEntrada);

function validarEntrada(ev) {
    const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    console.log({ inpult: email.value })
    if (!validEmail.test(email.value)) {
        msgErro.style.display = "flex";
    } else {
        msgErro.style.display = "none";

    }
    if (senha.value === "") {
        msgErrorSenha.style.display = "flex";
    }
    else {
        msgErrorSenha.style.display = "none";

    }

}


$("#buttonEnviarmsgErrorCadastro").click(function () {

    let nome = $("#registerName").val();
    let email = $("#registerEmail").val();
    let senha = $("#registerPassword").val();

    if (nome == "" || email == "" || senha == "") {
        alert("Favor preencher todos os campos");
    } else {
        $(".mensagem").text("Dados prontos para cadastrar!!");
    }

});
$(".btn-rede").hover(
    function () {
        $(this).append($("<span>Conecte-se com Facebook</span>"));
    }, function () {
        $(this).find("span").last().remove();
    }
);
$(".btn-rede2").hover(
    function () {
        $(this).append($("<span>Conecte-se com Google</span>"));
    }, function () {
        $(this).find("span").last().remove();
    }
);

$(".fab").hover(function () {
    $(this).fadeOut(100);
    $(this).fadeIn(500);
});

