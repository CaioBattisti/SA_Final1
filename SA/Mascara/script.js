document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");

    form.addEventListener("submit", async function(event) {
        event.preventDefault(); // previne envio até validar
        let errors = [];

        // Validação do nome (não aceita números)
        if (/\d/.test(nomeInput.value)) {
            errors.push("O nome não pode conter números!");
        }

        // Validação do email
        const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(emailInput.value)) {
            errors.push("Digite um email válido!");
        }

        // Verificar email duplicado via AJAX
        try {
            const response = await fetch(`verificar_email.php?email=${encodeURIComponent(emailInput.value)}`);
            const data = await response.json();
            if (data.exists) {
                errors.push("Este email já está cadastrado!");
            }
        } catch (error) {
            console.error("Erro ao verificar email:", error);
            errors.push("Não foi possível verificar o email no momento.");
        }

        if (errors.length > 0) {
            alert(errors.join("\n"));
        } else {
            form.submit(); // se tudo certo, envia o formulário
        }
    });
});