document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('formsregistro').addEventListener('submit', function (event) {
        event.preventDefault(); // Evita o envio do formulário para a página de destino

        // Obtém a data e a hora atuais
        var dataHoraAtual = new Date();
        var dataHoraFormatada = dataHoraAtual.toLocaleString(); // Formata a data e a hora como uma string

        // Adiciona os valores da data e hora como campos ocultos no formulário
        var dataHoraInput = document.createElement('input');
        dataHoraInput.setAttribute('type', 'hidden');
        dataHoraInput.setAttribute('name', 'data_hora_envio');
        dataHoraInput.setAttribute('value', dataHoraFormatada);

        this.appendChild(dataHoraInput); // Adiciona o campo oculto ao formulário

        // Agora, você pode enviar o formulário com a data e a hora incluídas
        this.submit();
    });
});
