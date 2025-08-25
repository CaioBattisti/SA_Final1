<?php
include '../conexao.php'; // Ajuste o caminho conforme a sua estrutura de pastas

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome_produto = $_POST['Nome_Produto'];
    $qntd_enviada = $_POST['Qntd_Enviada'];
    $qntd_estoque = $_POST['Qntd_Estoque'];
    $nome_fornecedor = $_POST['Nome_Fornecedor'];
    $lote = $_POST['Lote'];
    $validade = $_POST['Validade'];
    $data_fabricacao = $_POST['Data_Fabricacao'];
    $tipo_remedio = $_POST['Tipo_Remedio'];

    $sql = "INSERT INTO Produtos (nome_produto, quantidade_enviada, quantidade_estoque, nome_fornecedor, lote, validade, data_fabricacao, tipo_remedio)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("siisssss", $nome_produto, $qntd_enviada, $qntd_estoque, $nome_fornecedor, $lote, $validade, $data_fabricacao, $tipo_remedio);

    if ($stmt->execute()) {
        echo "Novo produto cadastrado com sucesso!";
    } else {
        echo "Erro: " . $sql . "<br>" . $conn->error;
    }

    $stmt->close();
}

$conn->close();
?>