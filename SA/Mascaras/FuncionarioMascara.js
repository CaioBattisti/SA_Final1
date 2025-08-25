// Função genérica para aplicar máscara no input
function mascara(o, f) {
    let objeto = o;
    let funcao = f;
    setTimeout(function () {
        executaMascara(objeto, funcao);
    }, 1);
}

function executaMascara(objeto, funcao) {
    objeto.value = funcao(objeto.value);
}

// Máscara CPF: 000.000.000-00
function CPF(valor) {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return valor;
}

// Apenas letras e espaços
function ApenasLetras(valor) {
    return valor.replace(/[^a-zA-ZÀ-ú\s]/g, "");
}

// Máscara simples de e-mail (remove espaços e tudo minúsculo)
function EmailMascara(valor) {
    valor = valor.replace(/\s/g, ""); // Remove espaços
    return valor.toLowerCase();
}

// Função para validar email antes de enviar
function validarEmail() {
    const email = document.querySelector('input[name="email_funcionario"]').value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        alert("Por favor, digite um e-mail válido no formato exemplo@dominio.com");
        return false; // impede envio
    }
    return true; // tudo certo
}
