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

// Máscara para o lote: 3 letras + hífen + 4 números (exemplo: ABC-1234)
function Lote(valor) {
    valor = valor.toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (valor.length > 3) {
        valor = valor.slice(0, 3) + '-' + valor.slice(3, 7);
    }
    return valor.slice(0, 8);
}

// Máscara que permite somente letras e espaços (para nomes)
function ApenasLetras(valor) {
    return valor.replace(/[^a-zA-ZÀ-ú\s]/g, "");
}
