<?php
include '../conexao.php'; // Ajuste o caminho conforme a sua estrutura de pastas

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome_funcionario'];
    $cpf = $_POST['cpf'];
    $email = $_POST['email_funcionario'];
    $funcao = $_POST['funcao'];
    $vendas = $_POST['quantidade_vendas'];
    $salario = $_POST['salario'];
    $inicio_contrato = $_POST['inicio_contrato'];

    $sql = "INSERT INTO Funcionarios (nome_funcionario, cpf, email_funcionario, funcao, quantidade_vendas, salario, inicio_contrato)
            VALUES (?, ?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssids", $nome, $cpf, $email, $funcao, $vendas, $salario, $inicio_contrato);

    if ($stmt->execute()) {
        echo "Novo funcionário cadastrado com sucesso!";
    } else {
        echo "Erro: " . $sql . "<br>" . $conn->error;
    }

    $stmt->close();
}

$conn->close();
?>