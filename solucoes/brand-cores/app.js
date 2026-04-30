/**
 * brand-cores/app.js
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Cores
    const colPrimary = document.getElementById('color-primary');
    const hexPrimary = document.getElementById('hex-primary');
    const colSecondary = document.getElementById('color-secondary');
    const hexSecondary = document.getElementById('hex-secondary');
    
    // Mockup Elements
    const mHeader = document.getElementById('mockup-header');
    const mBanner = document.getElementById('mockup-banner');
    const mBtn1 = document.getElementById('mockup-btn1');
    const mBtn2 = document.getElementById('mockup-btn2');

    function updateColors() {
        const pColor = colPrimary.value;
        const sColor = colSecondary.value;

        // Atualiza inputs text
        hexPrimary.value = pColor;
        hexSecondary.value = sColor;

        // Atualiza Mockup
        if (mHeader) mHeader.style.backgroundColor = pColor;
        if (mBanner) mBanner.style.backgroundColor = sColor;
        if (mBtn1) mBtn1.style.backgroundColor = pColor;
        if (mBtn2) mBtn2.style.backgroundColor = pColor;
    }

    if (colPrimary) colPrimary.addEventListener('input', updateColors);
    if (colSecondary) colSecondary.addEventListener('input', updateColors);

    // Presets
    const presets = document.querySelectorAll('.preset-btn');
    presets.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const color = e.target.getAttribute('data-color');
            if (colPrimary) {
                colPrimary.value = color;
                updateColors();
            }
        });
    });

    // Upload Simulation
    const uploadAreas = document.querySelectorAll('.upload-area');
    uploadAreas.forEach(area => {
        area.addEventListener('click', () => {
            const icon = area.querySelector('i');
            const p = area.querySelector('p');
            
            icon.className = 'ph ph-spinner ph-spin';
            p.innerText = 'Enviando...';
            
            setTimeout(() => {
                icon.className = 'ph ph-check-circle';
                icon.style.color = 'var(--success)';
                p.innerText = 'Imagem enviada com sucesso!';
            }, 1000);
        });
    });

    // Salvar Tema
    const btnSalvar = document.getElementById('btn-salvar-tema');
    const successOverlay = document.getElementById('success-overlay');

    if (btnSalvar) {
        btnSalvar.addEventListener('click', async () => {
            const originalText = btnSalvar.innerHTML;
            btnSalvar.innerHTML = '<i class="ph ph-spinner ph-spin"></i> Publicando...';
            btnSalvar.disabled = true;

            await App.delay(1500);

            // Reseta botão
            btnSalvar.innerHTML = originalText;
            btnSalvar.disabled = false;

            // Mostra sucesso
            if (successOverlay) {
                successOverlay.classList.remove('hidden');
            }
        });
    }
});
