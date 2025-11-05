const nomeProduto = document.getElementById('nomeProduto');

        nomeProduto.addEventListener('input', function() {
            this.value = this.value.replace(/[^A-Za-zÀ-ÿ\s]/g, '');
        });

        const form = document.getElementById('formProduto');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Produto cadastrado: ' + nomeProduto.value);
        });