let nome = document.getElementById('userName');
let email = document.getElementById('userEmail');
let telefone = document.getElementById('userTel');
let mensagem = document.getElementById("userMsg");
let msgObt = document.getElementById('msgObt');

const hamburger = document.querySelector(".mobile-menu");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

emailjs.init('jprZzBBj2IeLFXCNo');

function VerificarCampos(event) {
  event.preventDefault();
  if (nome.value == '' || telefone.value == '' || email.value == '' || mensagem.value == '') {
    msgObt.innerText = "Preencha todos os campos!";
    msgObt.style.color = '#ff0000';
    msgObt.style.fontWeight = '600';
    msgObt.style.textAlign = 'center';
  } else {
    msgObt.innerText = "Formulário enviado!";
    msgObt.style.color = '#00ff00';
    msgObt.style.fontWeight = '600';
    msgObt.style.textAlign = 'center';

    
    emailjs.send('service_4fjfj0x', 'template_gckk5js',
      {
        from_name : nome.value,
        from_email : email.value,
        from_tel : telefone.value,
        to_message : mensagem.value
      }
    );

    nome.value = '';
    email.value = '';
    telefone.value = '';
    mensagem.value = '';
  }
};

