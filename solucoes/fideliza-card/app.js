/**
 * fideliza-card/app.js
 */

document.addEventListener('DOMContentLoaded', () => {
    // Lógica para Dar Selo
    const btnDarSelo = document.getElementById('btn-dar-selo');
    const inputTelefone = document.getElementById('telefone-cliente');
    const successBox = document.getElementById('selo-success');
    
    if (btnDarSelo) {
        btnDarSelo.addEventListener('click', async () => {
            const tel = inputTelefone.value.trim();
            if (!tel) {
                inputTelefone.focus();
                return;
            }

            const originalText = btnDarSelo.innerHTML;
            btnDarSelo.innerHTML = '<i class="ph ph-spinner ph-spin"></i>';
            btnDarSelo.disabled = true;

            // Simula delay de API
            await App.delay(1000);

            // Reseta botão
            btnDarSelo.innerHTML = originalText;
            btnDarSelo.disabled = false;
            inputTelefone.value = '';

            // Mostra a caixa de sucesso animada
            successBox.classList.remove('hidden');

            // Esconde após 3 segundos
            setTimeout(() => {
                successBox.classList.add('hidden');
            }, 4000);
        });
    }

    // Máscara simples para telefone (apenas visual)
    if (inputTelefone) {
        inputTelefone.addEventListener('input', (e) => {
            let v = e.target.value.replace(/\D/g, "");
            if (v.length > 11) v = v.slice(0, 11);
            if (v.length > 2) {
                v = `(${v.slice(0, 2)}) ${v.slice(2)}`;
            }
            if (v.length > 10) {
                v = `${v.slice(0, 10)}-${v.slice(10)}`;
            }
            e.target.value = v;
        });
    }

    // Lógica para Configurar Recompensa (Contador)
    const stampCount = document.querySelector('.stamp-count');
    const btnsCircle = document.querySelectorAll('.btn-circle');
    
    if (stampCount && btnsCircle.length === 2) {
        const btnMinus = btnsCircle[0];
        const btnPlus = btnsCircle[1];

        btnMinus.addEventListener('click', () => {
            let count = parseInt(stampCount.innerText);
            if (count > 1) {
                stampCount.innerText = count - 1;
            }
        });

        btnPlus.addEventListener('click', () => {
            let count = parseInt(stampCount.innerText);
            if (count < 50) {
                stampCount.innerText = count + 1;
            }
        });
    }
});
