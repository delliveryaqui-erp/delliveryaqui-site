/**
 * vitrine-smart/app.js
 */

document.addEventListener('DOMContentLoaded', () => {
    // Escolha de Layout (Página 1 -> 2)
    // Gerenciado pelo data-navigate

    // Upload Foto Fake
    const uploadPhoto = document.getElementById('upload-photo');
    if (uploadPhoto) {
        uploadPhoto.addEventListener('click', () => {
            const icon = uploadPhoto.querySelector('i');
            const p = uploadPhoto.querySelector('p');
            
            icon.className = 'ph ph-spinner ph-spin';
            p.innerText = 'Processando IA...';
            
            setTimeout(() => {
                icon.className = 'ph ph-image-square';
                icon.style.color = 'var(--primary)';
                p.innerText = 'Imagem Pronta!';
            }, 1500);
        });
    }

    // Gerar Banner (Página 2 -> 3)
    const btnGerar = document.getElementById('btn-gerar');
    if (btnGerar) {
        btnGerar.addEventListener('click', async () => {
            const nomeInput = document.getElementById('vs-nome').value.trim();
            const precoInput = document.getElementById('vs-preco').value.trim();
            
            const originalText = btnGerar.innerHTML;
            btnGerar.innerHTML = '<i class="ph ph-spinner ph-spin"></i> Criando Arte...';
            btnGerar.disabled = true;

            await App.delay(2000);

            // Atualiza preview
            if (nomeInput) {
                document.getElementById('bp-nome').innerText = nomeInput;
            }
            if (precoInput) {
                document.getElementById('bp-preco').innerText = `R$ ${precoInput}`;
            }

            App.navigate('page-3');

            btnGerar.innerHTML = originalText;
            btnGerar.disabled = false;
        });
    }

    // Aplicar na Loja
    const btnAplicar = document.getElementById('btn-aplicar');
    const applySuccess = document.getElementById('apply-success');

    if (btnAplicar) {
        btnAplicar.addEventListener('click', async () => {
            const originalText = btnAplicar.innerHTML;
            btnAplicar.innerHTML = '<i class="ph ph-spinner ph-spin"></i> Publicando...';
            btnAplicar.disabled = true;

            await App.delay(1500);

            btnAplicar.style.display = 'none';
            document.querySelector('.actions-grid').style.display = 'none';
            applySuccess.classList.remove('hidden');

            setTimeout(() => {
                btnAplicar.style.display = 'block';
                document.querySelector('.actions-grid').style.display = 'grid';
                applySuccess.classList.add('hidden');
                btnAplicar.innerHTML = originalText;
                btnAplicar.disabled = false;
            }, 5000);
        });
    }
});
