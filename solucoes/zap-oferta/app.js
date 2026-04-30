/**
 * zap-oferta/app.js
 */

document.addEventListener('DOMContentLoaded', () => {
    const tituloInput = document.getElementById('oferta-titulo');
    const precoInput = document.getElementById('oferta-preco');
    const textoInput = document.getElementById('oferta-texto');
    const msgPreview = document.getElementById('msg-preview');

    function updatePreview() {
        const titulo = tituloInput.value.trim();
        const preco = precoInput.value.trim();
        const texto = textoInput.value.trim();

        if (!titulo && !preco && !texto) {
            msgPreview.innerHTML = '<span class="muted">Preencha os campos para ver a pré-visualização da mensagem...</span>';
            return;
        }

        let previewHtml = '';
        if (titulo) previewHtml += `*${titulo}*\n\n`;
        if (texto) previewHtml += `${texto}\n\n`;
        if (preco) previewHtml += `🔥 *Apenas R$ ${preco}*\n\n`;
        
        previewHtml += `👉 Peça agora: delliveryaqui.com/seu-link`;

        // Substituir \n por <br> para HTML
        msgPreview.innerHTML = previewHtml.replace(/\n/g, '<br>');
    }

    tituloInput.addEventListener('input', updatePreview);
    precoInput.addEventListener('input', updatePreview);
    textoInput.addEventListener('input', updatePreview);

    // Botão de Disparo
    const btnDisparar = document.getElementById('btn-disparar');
    if (btnDisparar) {
        btnDisparar.addEventListener('click', async () => {
            const originalText = btnDisparar.innerHTML;
            btnDisparar.innerHTML = '<i class="ph ph-spinner ph-spin"></i> Processando...';
            btnDisparar.disabled = true;

            // Simula um delay de API
            await App.delay(1500);

            // Navega para a Página 3 (Relatório)
            App.navigate('page-3');

            // Reseta botão
            btnDisparar.innerHTML = originalText;
            btnDisparar.disabled = false;

            // Anima os números
            App.animateValue('stat-enviados', 0, 1240, 2000);
            
            // Simula crescimento ao longo do tempo (fake real-time)
            setTimeout(() => App.animateValue('stat-cliques', 0, 84, 1500), 2000);
            setTimeout(() => App.animateValue('stat-pedidos', 0, 12, 1000), 3500);
            setTimeout(() => {
                const vendasObj = document.getElementById('stat-vendas');
                if(vendasObj) vendasObj.innerText = 'R$ 478,80';
            }, 4500);
        });
    }
});
