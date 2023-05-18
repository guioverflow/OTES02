<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        // 1 - Mostrar data e hora atual no formato:
        echo("<h1>Mostrar data e hora atual na formatação</h1>");
        $dataAtual= date('d/m/Y');
        $horaAtual = date('H:i');
        echo "<h3>Hoje é $dataAtual e agora são $horaAtual.</h3>";

        // 2- Explore em um exemplo o uso de "function", utilize ainda alguma(s) funções do PHP para manipulação de Strings e Arrays (pelo menos uma de cada).
        echo("<h1>Exemplos de function</h1>");

        echo("<h2>Concatenação de strings</h2>");

        function concatenarStrings($string1, $string2) {
            return $string1 . $string2;
        }

        $string1 = "Olá, ";
        $string2 = "mundo!";
        $resultadoConcatenacao = concatenarStrings($string1, $string2);
        echo "<p>Primeira string = $string1</p>";
        echo "<p>Segunda string = $string2</p>";
        echo "<p>Resultado da concatenação: $resultadoConcatenacao</p>";

        echo("<h2>Acesso de array</h2>");

        function primeiroItem($array) {
            return $array[0];
        }

        $frutas = array("maçã", "banana", "laranja");
        
        $i = 0;
        foreach($frutas as $fruta) {
            $i++;
            echo "<p>Fruta $i = $fruta</p>";
        }
        
        $primeiraFruta = primeiroItem($frutas);
        echo "<p>Primeira fruta do array: $primeiraFruta</p>";

        // 3 - Criar um contador de visitas (sugestão - usar um arquivo txt)
        echo("<h1>Contador de visitas</h1>");

        $arquivoContador = "contador.txt";
        if (file_exists($arquivoContador)) {
            $contadorVisitas = file_get_contents($arquivoContador);
            $contadorVisitas++;
            file_put_contents($arquivoContador, $contadorVisitas);
        } else {
            $contadorVisitas = 1;
            file_put_contents($arquivoContador, $contadorVisitas);
        }
        echo "<p>Esta página foi visitada $contadorVisitas vezes.</p>";

        // 4 - Faça um exemplo mostrando o uso de "Cookie" e/ou "Session".
        $cookieNome = "nome_usuario";
        $cookieValor = "Gui";
        setcookie($cookieNome, $cookieValor, time() + 10, "/"); // O cookie expira em 10 segundos
        if (isset($_COOKIE[$cookieNome])) {
            $nomeUsuario = $_COOKIE[$cookieNome];
            echo "<p>Olá, $nomeUsuario! Seu cookie foi definido com sucesso.</p>";
        } else {
            echo "<p>Cookie não encontrado.</p>";
        }
    ?>
</body>
</html>