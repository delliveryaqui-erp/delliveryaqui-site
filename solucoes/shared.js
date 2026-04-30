/**
 * shared.js - Funções utilitárias para os micro-apps
 */

const App = {
    /**
     * Navega para a próxima view (Página)
     * @param {string} viewId - O ID da view que será ativada
     */
    navigate: function(viewId) {
        // Encontra todas as views
        const views = document.querySelectorAll('.view-page');
        
        // Remove a classe active de todas
        views.forEach(v => {
            v.classList.remove('active');
        });
        
        // Adiciona a classe active na view desejada
        const targetView = document.getElementById(viewId);
        if (targetView) {
            targetView.classList.add('active');
            
            // Scroll para o topo suavemente
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            console.error('View não encontrada:', viewId);
        }
    },

    /**
     * Função simulada de delay para processos (como salvar, enviar, etc)
     * @param {number} ms - Milissegundos 
     * @returns {Promise}
     */
    delay: function(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },
    
    /**
     * Atualiza um valor em um elemento de forma animada (contador)
     */
    animateValue: function(id, start, end, duration) {
        const obj = document.getElementById(id);
        if (!obj) return;
        
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
};

// Quando o DOM carrega, configura automaticamente botões com data-navigate
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-navigate]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const target = btn.getAttribute('data-navigate');
            App.navigate(target);
        });
    });

    // Sidebar Toggle Logic
    const toggleBtn = document.getElementById('toggle-sidebar');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const sidebar = toggleBtn.closest('.presentation-sidebar');
            if (sidebar) {
                sidebar.classList.toggle('minimized');
            }
        });
    }
});
