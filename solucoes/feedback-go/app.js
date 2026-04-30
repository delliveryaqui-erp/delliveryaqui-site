/**
 * feedback-go/app.js
 */

document.addEventListener('DOMContentLoaded', () => {
    // Emojis (Página 1 -> Página 2)
    const emojiBtns = document.querySelectorAll('.emoji-btn');
    emojiBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Pode guardar o valor do emoji selecionado (triste, neutro, feliz)
            // const rating = btn.getAttribute('data-value');
            
            // Vai para a tela de feedback escrito
            App.navigate('page-2');
        });
    });

    // Tag buttons toggle
    const tagBtns = document.querySelectorAll('.tag-btn');
    tagBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('selected');
        });
    });

    // Enviar Feedback
    const btnEnviar = document.getElementById('btn-enviar-feedback');
    const successBox = document.getElementById('feedback-success');
    const feedbackForm = document.querySelector('.feedback-form');

    if (btnEnviar) {
        btnEnviar.addEventListener('click', async () => {
            const originalText = btnEnviar.innerHTML;
            btnEnviar.innerHTML = '<i class="ph ph-spinner ph-spin"></i> Enviando...';
            btnEnviar.disabled = true;

            await App.delay(1000);

            // Oculta o form, mostra a tela de sucesso
            feedbackForm.style.display = 'none';
            successBox.classList.remove('hidden');

            // Após 3 segundos, volta para a tela inicial
            setTimeout(() => {
                feedbackForm.style.display = 'block';
                successBox.classList.add('hidden');
                document.getElementById('feedback-text').value = '';
                tagBtns.forEach(b => b.classList.remove('selected'));
                App.navigate('page-1');
            }, 3000);
        });
    }
});
