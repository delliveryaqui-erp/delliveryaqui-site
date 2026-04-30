/**
 * totem-rapido/app.js
 */

document.addEventListener('DOMContentLoaded', () => {
    // Quando uma categoria for clicada, podemos simular salvar a escolha
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Aqui normalmente abriria os itens da categoria.
            // Para o protótipo, vamos direto para o checkout como solicitado.
            document.getElementById('cliente-nome').focus();
        });
    });

    // Finalizar Pedido
    const btnFinalizar = document.getElementById('btn-finalizar');
    if (btnFinalizar) {
        btnFinalizar.addEventListener('click', async () => {
            const nomeInput = document.getElementById('cliente-nome');
            const nome = nomeInput.value.trim() || 'Cliente';
            
            const originalText = btnFinalizar.innerHTML;
            btnFinalizar.innerHTML = '<i class="ph ph-spinner ph-spin"></i> Processando...';
            btnFinalizar.disabled = true;

            // Simula delay de pagamento
            await App.delay(2000);

            // Gera senha aleatória
            const senha = Math.floor(Math.random() * 100).toString().padStart(3, '0');
            document.getElementById('senha-numero').innerText = senha;

            // Vai para tela de Status
            App.navigate('page-3');

            // Reseta form para o próximo pedido
            btnFinalizar.innerHTML = originalText;
            btnFinalizar.disabled = false;
            nomeInput.value = '';
            
            // Voltar automaticamente após 10 segundos
            setTimeout(() => {
                if(document.getElementById('page-3').classList.contains('active')) {
                    App.navigate('page-1');
                }
            }, 10000);
        });
    }
});
