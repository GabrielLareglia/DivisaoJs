
function clicar() {
    let numerador = parseFloat(document.getElementById('numerador').value);
    let denominador= parseFloat(document.getElementById('denominador').value);

    let texto = document.getElementById('calculo');
    
    if (denominador === 0) {
        texto.innerHTML = "Não é possivel dividir por zero";
        return;
    }
    else if(isNaN(numerador) || isNaN(denominador)) {
        texto.innerHTML = "Não é possivel dividir, pois nenhum numero foi digitado";
        return;
    }
    let divisao = numerador/denominador
    texto.innerHTML = `O resultado é: ${divisao.toFixed(1)}!`;
}