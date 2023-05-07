console.log('Página carregada')
pedeNome()

const inputNomeCompleto = document.getElementById('nome-completo');
const inputNomePai = document.getElementById('nome-pai');
const inputNomeMae = document.getElementById('nome-mae');
const alternador = document.getElementById('alternador');
const labelCaixa = document.getElementById('texto-caps');
const circulo = document.getElementById("circulo");

function controllerLetras() {
    if (alternador.checked) {
        inputNomeCompleto.value = inputNomeCompleto.value.toLowerCase();
        inputNomePai.value = inputNomePai.value.toLowerCase();
        inputNomeMae.value = inputNomeMae.value.toLowerCase();
        labelCaixa.innerHTML = 'caixa baixa';
    } else {
        inputNomeCompleto.value = inputNomeCompleto.value.toUpperCase();
        inputNomePai.value = inputNomePai.value.toUpperCase();
        inputNomeMae.value = inputNomeMae.value.toUpperCase();
        labelCaixa.innerHTML = 'CAIXA ALTA';
    }
}

inputNomeCompleto.addEventListener("input", controllerLetras)
inputNomePai.addEventListener("input", controllerLetras)
inputNomeMae.addEventListener("input", controllerLetras)

alternador.addEventListener("change", controllerLetras);

function checaCampoPreenchido() {
    lista = document.getElementById("formulario-2").elements

    for (item of lista) {
        if (item.value.length == 0 && item.type != 'submit') {
            alert ("Preencha os campos obrigatórios!")
            return false
        }
    }
    
    alert ("Formulário enviado!")
    return true
}

function pedeNome() {

    const dataAtual = new Date();
    const horaAtual = dataAtual.getHours();
    const diaSemana = dataAtual.toLocaleDateString('pt-BR', { weekday: 'long' });
    const dia = dataAtual.getDate();
    const mes = dataAtual.toLocaleDateString('pt-BR', { month: 'long' });
    const ano = dataAtual.getFullYear();

    if (horaAtual >= 6 && horaAtual < 12) {
        var string = 'Bom dia';
    } else if (horaAtual >= 12 && horaAtual < 18) {
        var string = 'Boa tarde';
    } else {
        var string = 'Boa noite';
    }

    nome = prompt('Insira seu primeiro nome');
    if (nome) string += ', ' + nome + '. Hoje é: ';
    else string += '. Hoje é: ';

    string += diaSemana + ', ';
    string += dia + '/' + mes + '/' + ano + '.';

    alert(string);
}

console.log(circulo.width / 2);
document.addEventListener('mousemove', function (event) {
    circulo.style.left = (event.clientX - (circulo.offsetWidth / 2)) + "px";
    circulo.style.top = (event.clientY - (circulo.offsetHeight / 2)) + "px";
});
