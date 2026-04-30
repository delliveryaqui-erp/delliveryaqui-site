/**
 * kds-lite/app.js
 */

document.addEventListener('DOMContentLoaded', () => {
    // Lógica das abas do header
    const tabs = document.querySelectorAll('.kds-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(t => t.classList.remove('active'));
            e.currentTarget.classList.add('active');
            
            // Navegação é gerenciada pelo data-navigate no shared.js
        });
    });

    // Marcar Pedido Pronto
    const btnReady = document.querySelectorAll('.btn-kds-action');
    btnReady.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.order-card');
            
            // Animação de saída
            card.style.transform = 'scale(0.9)';
            card.style.opacity = '0';
            
            setTimeout(() => {
                card.remove();
                
                // Atualiza contador da aba
                updateCounters();
            }, 300);
        });
    });

    // Remover da lista de prontos
    const btnDelivered = document.querySelectorAll('.ready-item .btn-outline');
    btnDelivered.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const item = e.target.closest('.ready-item');
            
            item.style.transform = 'translateX(100%)';
            item.style.opacity = '0';
            
            setTimeout(() => {
                item.remove();
                updateCounters();
                checkEmptyReady();
            }, 300);
        });
    });

    function updateCounters() {
        const orderCount = document.querySelectorAll('.order-card').length;
        const readyCount = document.querySelectorAll('.ready-item').length;
        
        tabs[0].innerText = `Em Preparo (${orderCount})`;
        tabs[1].innerText = `Prontos (${readyCount})`;
    }

    function checkEmptyReady() {
        const readyCount = document.querySelectorAll('.ready-item').length;
        const emptyState = document.querySelector('.empty-state');
        if (readyCount === 0 && emptyState) {
            emptyState.classList.remove('hidden');
        }
    }
});
