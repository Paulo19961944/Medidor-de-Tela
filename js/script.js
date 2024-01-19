function atualizarTamanhoDaTela() {
    var larguraDaTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var alturaDaTela = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var tamanhoTelaElemento = document.getElementById('tamanho-tela');
    tamanhoTelaElemento.textContent = larguraDaTela + ' x  ' + alturaDaTela;
}
window.addEventListener('load', atualizarTamanhoDaTela);
window.addEventListener('resize', atualizarTamanhoDaTela);
