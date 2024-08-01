(function() {
    emailjs.init('XDGKS8hNAWhPtaleC'); 
})();

document.getElementById('yesButton').addEventListener('click', function() {


    const name = prompt("Por favor, insira seu nome:");
    
    if (name) {
        emailjs.send('service_0miax7i', 'template_ul3vz1s', {
            from_name: name,
            to_name: 'Carolina Santos Souza',
            to_email: 'carolinassouza01@gmail.com'
        }).then(function(response) {
            alert('Obrigado por confirmar sua presença! Email de confirmação enviado.');
        }, function(error) {
            console.error('Erro ao enviar o email: ', error)
            alert('Houve um problema ao enviar o email de confirmação. Tente novamente mais tarde.');
        });
    } else {
        alert('Nome não fornecido.')
    }
    
});

document.getElementById('noButton').addEventListener('mouseover', function() {
    moveButtonRandomly();
});

document.addEventListener("DOMContentLoaded", function() {
    function moveButtonRandomly() {
        const noButton = document.getElementById('noButton');
        const body = document.body;

        // Obter as dimensões da tela
        const maxX = body.clientWidth - noButton.offsetWidth;
        const maxY = body.clientHeight - noButton.offsetHeight;

        // Gerar posição aleatória
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        // Atualizar a posição do botão
        noButton.style.left = randomX + 'px';
        noButton.style.top = randomY + 'px';
    }

    // Mover o botão ao carregar a página
    moveButtonRandomly();

    // Mover o botão quando a janela for redimensionada
    window.addEventListener('resize', function() {
        moveButtonRandomly();
    });

    // Mover o botão a cada 2 segundos
    setInterval(moveButtonRandomly, 2000); // 2000 milissegundos = 2 segundos

    // Mover o botão ao passar o mouse sobre ele
    document.getElementById('noButton').addEventListener('mouseover', function() {
        moveButtonRandomly();
    });
});