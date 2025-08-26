<?php
include '../conexao.php'; // Ajuste o caminho conforme a sua estrutura de pastas

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['ID'];
    $nome = $_POST['NomeFornecedor'];
    $email = $_POST['Email'];
    $telefone = $_POST['Telefone'];
    $produto = $_POST['Produto'];
    $transporte = $_POST['Transporte'];
    $inicio_contrato = $_POST['InicioContrato'];
    $final_contrato = $_POST['FinalContrato'];

    $sql = "INSERT INTO Fornecedores (id_fornecedor, nome_fornecedor, email, telefone, produto, transporte, inicio_contrato, final_contrato)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("isssssss", $id, $nome, $email, $telefone, $produto, $transporte, $inicio_contrato, $final_contrato);

    if ($stmt->execute()) {
        echo "Novo fornecedor cadastrado com sucesso!";
    } else {
        echo "Erro: " . $sql . "<br>" . $conn->error;
    }

    $stmt->close();
}

$conn->close();
?>