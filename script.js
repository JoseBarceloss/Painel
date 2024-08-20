// Função para gerar números aleatórios
function generateRandomNumbers(length) {
    let numbers = '';
    for (let i = 0; i < length; i++) {
        numbers += Math.floor(Math.random() * 10);
    }
    return numbers;
}

// Prefixo aleatório
let prefixo = `[${generateRandomNumbers(3)}] `; // Gera o prefixo aleatório

function enforcePrefix() {
    const acaoInput = document.getElementById('acao');
    const value = acaoInput.value;

    // Se o valor não começa com o prefixo, adicione-o
    if (!value.startsWith(prefixo)) {
        acaoInput.value = prefixo;
    }

    // Permite apenas edição após o prefixo
    const cursorPos = acaoInput.selectionStart;
    acaoInput.value = prefixo + value.slice(prefixo.length);
    acaoInput.selectionStart = acaoInput.selectionEnd = Math.max(cursorPos, prefixo.length);
}

// Configura o campo quando ele recebe o foco
document.getElementById('acao').addEventListener('focus', function() {
    enforcePrefix();
});

// Atualiza o prefixo enquanto o usuário digita
document.getElementById('acao').addEventListener('input', function() {
    enforcePrefix();
});

// Justificativa VVVVV
document.getElementById("justificativa").addEventListener("input", function() {
    var maxLength = 60;
    if (this.value.length > maxLength) {
        this.value = this.value.slice(0, maxLength);
    }
});

// Apoiadores VVVVV
document.getElementById("responsavel").addEventListener("input", function() {
    var maxLength = 20;
    if (this.value.length > maxLength) {
        this.value = this.value.slice(0, maxLength);
    }
});

// Local VVVVV
document.getElementById("local").addEventListener("input", function() {
    var maxLength = 30;
    if (this.value.length > maxLength) {
        this.value = this.value.slice(0, maxLength);
    }
});

// Prazo VVVVV
document.getElementById("Prazo").addEventListener("input", function() {
    var value = this.value;
    // Remove all non-numeric characters
    value = value.replace(/\D/g, '');
    // Format as dd/mm/yyyy
    if (value.length > 8) {
        value = value.slice(0, 8);
    }
    if (value.length > 4) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4) + '/' + value.slice(4);
    } else if (value.length > 2) {
        value = value.slice(0, 2) + '/' + value.slice(2);
    }
    this.value = value;
});

// Etapas VVVVV 
document.getElementById("etapas").addEventListener("input", function() {
    var maxLength = 60;
    if (this.value.length > maxLength) {
        this.value = this.value.slice(0, maxLength);
    }
});

// Custo VVVVV
document.getElementById("custo").addEventListener("input", function() {
    var value = this.value;
    
    // Remove tudo que não é número
    value = value.replace(/\D/g, '');
    
    // Adiciona o ponto como separador de milhar e vírgula como separador decimal
    if (value.length > 2) {
        value = value.slice(0, -2) + ',' + value.slice(-2);
    }
    
    // Adiciona separadores de milhar
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    
    // Adiciona o símbolo de R$ no início
    value = 'R$ ' + value;
    
    // Atualiza o valor do campo
    this.value = value;
});

// Limpa os campos quando a página é carregada
window.addEventListener('load', function() {
    document.getElementById('acao').value = '';
    document.getElementById('justificativa').value = '';
    document.getElementById('responsavel').value = '';
    document.getElementById('local').value = '';
    document.getElementById('Prazo').value = '';
    document.getElementById('etapas').value = '';
    document.getElementById('custo').value = '';
});

// Limpa os campos quando o usuário tenta sair da página
window.addEventListener('beforeunload', function() {
    document.getElementById('acao').value = '';
    document.getElementById('justificativa').value = '';
    document.getElementById('responsavel').value = '';
    document.getElementById('local').value = '';
    document.getElementById('Prazo').value = '';
    document.getElementById('etapas').value = '';
    document.getElementById('custo').value = '';
});
