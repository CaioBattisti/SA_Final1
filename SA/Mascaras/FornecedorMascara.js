// Função genérica para aplicar máscaras
function mascara(o, f) {
    let objeto = o;
    let funcao = f;
    setTimeout(function () {
        executaMascara(objeto, funcao);
    }, 1);
}

// Executa máscara no valor do campo
function executaMascara(objeto, funcao) {
    objeto.value = funcao(objeto.value);
}

// Máscara de Telefone: (XX) XXXXX-XXXX
function telefone(valor) {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
    valor = valor.replace(/(\d{4,5})(\d{4})$/, "$1-$2");
    return valor;
}

// Apenas letras e espaços
function ApenasLetras(valor) {
    return valor.replace(/[^a-zA-ZÀ-ú\s]/g, "");
}

// Máscara para email (remove espaços e força minúsculas)
function EmailMascara(valor) {
    valor = valor.replace(/\s/g, "");
    return valor.toLowerCase();
}

// Validação de email antes do envio
function validarEmail() {
    const email = document.querySelector('#Email').value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        alert("Por favor, insira um e-mail válido no formato exemplo@dominio.com");
        return false;
    }
    return true;
}
