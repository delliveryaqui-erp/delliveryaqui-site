/**
 * estoque-critico/app.js
 */

document.addEventListener('DOMContentLoaded', () => {
    // Interação de Repor Estoque (Página 1 -> 2)
    const btnRepor = document.querySelectorAll('.stock-card .btn-outline');
    const itemNameDisplay = document.getElementById('item-name');
    
    btnRepor.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.stock-card');
            const itemName = card.getAttribute('data-item');
            
            if (itemNameDisplay) {
                itemNameDisplay.innerText = itemName;
            }
            
            // Navega já configurado pelo atributo data-navigate no botão (tratado no shared.js)
        });
    });

    // Controle de Quantidade
    const btnMinus = document.querySelectorAll('.btn-circle')[0];
    const btnPlus = document.querySelectorAll('.btn-circle')[1];
    const qtyInput = document.querySelector('.qty-input');
    
    if (btnMinus && btnPlus && qtyInput) {
        btnMinus.addEventListener('click', () => {
            let val = parseInt(qtyInput.value);
            if (val > 1) qtyInput.value = val - 1;
        });
        
        btnPlus.addEventListener('click', () => {
            let val = parseInt(qtyInput.value);
            qtyInput.value = val + 1;
        });
    }

    // Enviar Pedido
    const btnPedir = document.getElementById('btn-pedir');
    const successBox = document.getElementById('order-success');
    
    if (btnPedir) {
        btnPedir.addEventListener('click', async () => {
            const originalText = btnPedir.innerHTML;
            btnPedir.innerHTML = '<i class="ph ph-spinner ph-spin"></i> Processando...';
            btnPedir.disabled = true;

            await App.delay(1200);

            // Esconde botão e mostra sucesso
            btnPedir.style.display = 'none';
            successBox.classList.remove('hidden');

            // Reset após voltar
            setTimeout(() => {
                btnPedir.style.display = 'block';
                btnPedir.innerHTML = originalText;
                btnPedir.disabled = false;
                successBox.classList.add('hidden');
            }, 5000); // Reseta após 5 segundos, caso o usuário volte
        });
    }
});
