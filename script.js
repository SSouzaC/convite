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

function moveButtonRandomly() {
    const noButton = document.getElementById('noButton');
    const body = document.body;

    const maxX = body.clientWidth - noButton.offsetWidth;
    const maxY = body.clientHeight - noButton.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
}
