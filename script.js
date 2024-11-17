// Funções de login simples (simulação sem backend)
document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulação de login
    alert('Login realizado com sucesso!');
    window.location.href = 'boas-vindas.html'; // Redireciona para a página de boas-vindas
});

document.getElementById('recuperar-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulação de envio de email de recuperação
    alert('Link de recuperação enviado!');
});

document.getElementById('form-cadastrar-carro')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const modelo = document.getElementById('modelo').value;
    const marca = document.getElementById('marca').value;
    const ano = document.getElementById('ano').value;
    const preco = document.getElementById('preco').value;
    const novoCarro = { modelo, marca, ano, preco };

    // Adiciona carro na lista do estoque
    const carrosList = JSON.parse(localStorage.getItem('carros')) || [];
    carrosList.push(novoCarro);
    localStorage.setItem('carros', JSON.stringify(carrosList));

    alert('Carro cadastrado com sucesso!');
    window.location.href = 'estoque.html'; // Redireciona para a página de estoque
});

document.getElementById('form-editar-carro')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Carro editado com sucesso!');
});

// Função para carregar carros no estoque
window.onload = function() {
    const carrosList = JSON.parse(localStorage.getItem('carros')) || [];
    const carrosDiv = document.getElementById('carros-list');
    
    carrosDiv.innerHTML = '';
    
    carrosList.forEach(function(carro, index) {
        const carroDiv = document.createElement('div');
        carroDiv.classList.add('carro-item');
        carroDiv.innerHTML = `
            <h3>${carro.modelo}</h3>
            <p><strong>Marca:</strong> ${carro.marca}</p>
            <p><strong>Ano:</strong> ${carro.ano}</p>
            <p><strong>Preço:</strong> R$ ${carro.preco}</p>
            <a href="editar-carro.html" class="btn">Editar</a>
        `;
        carrosDiv.appendChild(carroDiv);
    });
};
