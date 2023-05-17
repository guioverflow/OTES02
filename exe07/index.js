function validaCampos() {
    // Validação de campos não preenchidos
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;

    if ( !nome || !cpf ) {
        alert("Preencha todos os campos.");
        return false;
    }

    var nomeRegex = /^[a-zA-Z\s]+$/;
    if (!nomeRegex.test(nome)) {
      alert("Nome inválido! O nome deve conter apenas letras.");
      return false;
    }

    // Validação de CPF com regex
    var cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(cpf)) {
        alert("CPF inválido!");
        return false;
    }

    return true;
}

function inverterNome() {
    // Manipulação de string
    var nome = document.getElementById("nome").value;
    var nomeInvertido = nome.split("").reverse().join("");

    if (!nome) {
        alert("Escreva um nome primeiro!")
        return false;
    }

    alert("Nome invertido (string): " + nomeInvertido);
}

function adivinhacao() {
    // Funções matemáticas
    var numeroInput = prompt('Chute um numero de 1 a 10')
    var numeroAleatorio = Math.floor(Math.random() * 10) + 1;

    if (!numeroInput) {
        alert("Escreva um número!");
        return false;
    } else if (isNaN(numeroInput)) {
        alert('Não é um numero!')
        return false;
    }

    if (numeroInput == numeroAleatorio) {
        alert('Acertou')
    } else {
        alert('Errou, o numero era ' + numeroAleatorio)
    }
}

function datas() {
    // Datas
    var dataAtual = new Date();
    var dia = dataAtual.getDate();
    var mes = dataAtual.getMonth() + 1;
    var ano = dataAtual.getFullYear();
    alert("Data atual (datas): " + dia + '/' + mes + '/' + ano);

    var dataProximaSemana = new Date();
    dataProximaSemana.setDate(dataAtual.getDate() + 7);
    var dia = dataProximaSemana.getDate();
    var mes = dataProximaSemana.getMonth() + 1;
    var ano = dataProximaSemana.getFullYear();
    alert("Data próxima semana (datas): " + dia + '/' + mes + '/' + ano);
  
    return true;
}