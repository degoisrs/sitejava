let botao = document.querySelector("#botao");
botao.style.background= "yellow";

botao.addEventListener("click",function () {
    mensagem.textContent = "E não é que deu certo mesmo, nem tudo na vida está perdido, o sucesso vem para os insistentes!";
    mensagem.style.display = "block";})